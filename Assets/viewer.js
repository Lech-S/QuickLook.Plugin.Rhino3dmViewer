// SPDX-License-Identifier: GPL-3.0-or-later
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Rhino3dmLoader } from 'three/addons/loaders/3DMLoader.js';
import { readHostModel, acceptHostTransfer } from './host-transfer.js';

const $ = id => document.getElementById(id);
const post = data => window.chrome?.webview?.postMessage(data);
const state = { records: [], layers: [], selected: null, mode: 'original', tab: 'layers', isolated: false,
  section: false, sectionAxis: 'X', scale: 1, unit: '', loading: false, loaded: false, warnings: [],
  filename: '', bytes: 0, disposed: false, grid: true, ortho: false, view: 'iso' };
let renderer, scene, camera, controls, model, normalizer, loader, ground, grid, selectionBox;
let resizeObserver, pendingFrame = false, loadSequence = 0, lastLoad = null, loadAbort = null, loadTimer;
const viewport = $('viewport');
const raycaster = new THREE.Raycaster();
raycaster.params.Line.threshold = 0.035;
raycaster.params.Points.threshold = 0.05;
const pointer = new THREE.Vector2();
const clipPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
const temporaryMaterials = new Set();

function setProgress(title, detail, progress) {
  $('loadingTitle').textContent = title; $('loadingDetail').textContent = detail;
  $('progressBar').style.width = `${progress}%`;
}
function errorMessage(message) {
  if (typeof message === 'string') return message;
  return message?.error?.message || message?.message || '文件解析失败或此文件包含尚不支持的几何类型。';
}
function showError(message) {
  $('loading').hidden = true; $('error').hidden = false;
  $('errorDetail').textContent = errorMessage(message);
  state.loading = false; state.loaded = false;
  $('status').textContent = '3DM v1.0.2 · 预览失败 · 可关闭后重试';
  post({ type: 'error', message: errorMessage(message) });
}
function warn(messages) {
  state.warnings = [...new Set(messages.filter(Boolean))];
  $('warnings').hidden = state.warnings.length === 0;
  $('warningText').textContent = state.warnings.join('  ·  ');
}
function invalidate() {
  if (pendingFrame || state.disposed || !renderer) return;
  pendingFrame = true;
  requestAnimationFrame(() => {
    pendingFrame = false;
    if (state.disposed) return;
    controls.update(); renderer.render(scene, camera);
  });
}
function createCamera() {
  const aspect = Math.max(1, viewport.clientWidth) / Math.max(1, viewport.clientHeight);
  const c = state.ortho ? new THREE.OrthographicCamera(-6 * aspect, 6 * aspect, 6, -6, .01, 20000)
    : new THREE.PerspectiveCamera(38, aspect, .01, 20000);
  c.up.set(0, 0, 1); return c;
}
function initRenderer() {
  THREE.Object3D.DEFAULT_UP.set(0, 0, 1);
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.localClippingEnabled = true;
  viewport.insertBefore(renderer.domElement, viewport.firstChild);
  renderer.domElement.tabIndex = -1;
  scene = new THREE.Scene();
  camera = createCamera(); camera.position.set(13, -17, 12);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; controls.dampingFactor = .12;
  controls.minDistance = .02; controls.maxDistance = 10000;
  controls.addEventListener('change', invalidate);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, .04).texture;
  room.dispose(); pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xe7f1ff, 0x63707d, 1.6));
  const key = new THREE.DirectionalLight(0xfff2df, 3.5);
  key.position.set(-8, -10, 16); key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -10, right: 10, top: 10, bottom: -10, near: .1, far: 80 });
  key.shadow.normalBias = .025; key.shadow.bias = -.0002;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xd2e5ff, 1.4); fill.position.set(10, 6, 8); scene.add(fill);
  normalizer = new THREE.Group(); scene.add(normalizer);
  ground = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.ShadowMaterial({ opacity: .16 }));
  ground.receiveShadow = true; scene.add(ground);
  grid = new THREE.GridHelper(20, 20, 0x788897, 0x627485);
  grid.rotation.x = Math.PI / 2;
  grid.material.transparent = true; grid.material.opacity = .19; grid.material.depthWrite = false;
  scene.add(grid);
  resizeObserver = new ResizeObserver(resize); resizeObserver.observe(viewport);
  renderer.domElement.addEventListener('webglcontextlost', e => { e.preventDefault(); showError('显卡渲染上下文已丢失。请关闭预览后重试。'); });
  let down = null;
  renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, button: e.button }; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!down || down.button !== 0 || Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) return;
    const hit = pick(e); selectRecord(hit ? state.records.find(r => r.object === hit.object) : null);
  });
  renderer.domElement.addEventListener('dblclick', e => { const hit = pick(e); if (hit) fitBox(new THREE.Box3().setFromObject(hit.object)); });
  resize();
}
function resize() {
  if (!renderer) return;
  const w = Math.max(1, viewport.clientWidth), h = Math.max(1, viewport.clientHeight);
  renderer.setSize(w, h);
  if (camera.isPerspectiveCamera) camera.aspect = w / h;
  else { const height = camera.top - camera.bottom; camera.left = -height * w / h / 2; camera.right = -camera.left; }
  camera.updateProjectionMatrix(); invalidate();
}
function visibleInHierarchy(object) {
  for (let o = object; o; o = o.parent) if (!o.visible) return false;
  return true;
}
function bounds(onlyVisible = true) {
  const box = new THREE.Box3();
  for (const r of state.records) {
    if (onlyVisible && !visibleInHierarchy(r.object)) continue;
    if (!r.object.geometry.boundingBox) r.object.geometry.computeBoundingBox();
    if (r.object.geometry.boundingBox) box.union(r.object.geometry.boundingBox.clone().applyMatrix4(r.object.matrixWorld));
  }
  return box;
}
function fitBox(box, view = state.view) {
  if (!box || box.isEmpty()) return;
  const center = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3());
  const radius = Math.max(size.length() / 2, .01);
  const vectors = { iso: [1, -1.3, .9], front: [0, -1, .0001], right: [1, 0, .0001], top: [0, -.0001, 1] };
  const direction = new THREE.Vector3(...vectors[view]).normalize();
  if (camera.isPerspectiveCamera) {
    const fov = 2 * Math.atan(Math.tan(camera.fov * Math.PI / 360) * Math.min(1, camera.aspect));
    const distance = radius / Math.sin(fov / 2) * 1.18;
    camera.position.copy(center).addScaledVector(direction, distance);
    camera.near = Math.max(.00001, distance / 2000); camera.far = Math.max(200, distance * 100);
  } else {
    const half = radius * 1.2, aspect = viewport.clientWidth / viewport.clientHeight;
    camera.top = half / Math.min(1, aspect); camera.bottom = -camera.top;
    camera.right = camera.top * aspect; camera.left = -camera.right;
    camera.position.copy(center).addScaledVector(direction, radius * 4 + 10);
    camera.near = .00001; camera.far = Math.max(200, radius * 100);
  }
  controls.target.copy(center); camera.lookAt(center); camera.updateProjectionMatrix();
  controls.update(); invalidate();
}
function fitAll() { if (model) { model.updateWorldMatrix(true, true); fitBox(bounds()); } }
function pick(event) {
  if (!state.loaded || !renderer) return null;
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  return raycaster.intersectObjects(state.records.filter(r => visibleInHierarchy(r.object)).map(r => r.object), false)
    .find(h => !state.section || clipPlane.distanceToPoint(h.point) >= 0) || null;
}
function layerVisible(index) {
  let l = state.layers[index], seen = new Set();
  while (l && !seen.has(l.id)) {
    if (!l.on) return false;
    seen.add(l.id); l = state.layers.find(x => x.id === l.parentLayerId);
  }
  return true;
}
function updateVisibility() {
  for (const r of state.records) {
    r.object.visible = r.on && layerVisible(r.layerIndex) && (!state.isolated || r === state.selected);
  }
  if (selectionBox && state.selected) selectionBox.visible = visibleInHierarchy(state.selected.object);
  renderTree(); invalidate();
}
function resetVisibility() {
  state.layers.forEach(l => l.on = l.initial);
  state.records.forEach(r => r.on = r.initial);
  state.isolated = false; $('isolate').classList.remove('active'); updateVisibility();
}
function showAll() {
  state.layers.forEach(l => l.on = true); state.records.forEach(r => r.on = true);
  state.isolated = false; $('isolate').classList.remove('active'); updateVisibility(); fitAll();
}
function selectRecord(record) {
  state.selected = record;
  if (selectionBox) { scene.remove(selectionBox); selectionBox.geometry.dispose(); selectionBox.material.dispose(); selectionBox = null; }
  $('selection').hidden = !record; $('isolate').disabled = !record;
  if (record) {
    const box = new THREE.Box3().setFromObject(record.object);
    selectionBox = new THREE.Box3Helper(box, 0x77c7b4); scene.add(selectionBox);
    const size = box.getSize(new THREE.Vector3()).divideScalar(state.scale);
    $('selection').textContent = `${record.name}  ·  ${record.type}  ·  包围盒 ${dimensions(size)}`;
  } else if (state.isolated) {
    state.isolated = false; $('isolate').classList.remove('active'); updateVisibility();
  }
  renderTree(); invalidate();
}
function materialList(material) { return Array.isArray(material) ? material : [material]; }
function assignObjectColors(records) {
  // Rhino IDs and occurrence order are stable when reopening the same document.
  // Include an occurrence suffix so copies of a block can receive separate colors.
  const occurrences = new Map();
  const ordered = records.map((record, index) => {
    const id = record.object.userData.attributes?.id || `${record.type}:${record.name}:${index}`;
    const occurrence = occurrences.get(id) || 0;
    occurrences.set(id, occurrence + 1);
    return { record, key: `${id}:${occurrence}` };
  }).sort((a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0);
  ordered.forEach(({ record }, index) => {
    // Golden-angle hue spacing spreads consecutive objects across the color wheel.
    const hue = (0.57 + index * 0.618033988749895) % 1;
    const lightness = [0.53, 0.61, 0.47][Math.floor(index / 12) % 3];
    record.autoColor = new THREE.Color().setHSL(hue, 0.62, lightness, THREE.SRGBColorSpace);
  });
}
function applyMode(mode) {
  state.mode = mode;
  document.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  for (const r of state.records) {
    if (!r.object.isMesh && mode !== 'color') {
      // Curves/point clouds also support automatic color; restore their original
      // material when leaving that mode instead of leaving the color behind.
      r.object.material = r.originalMaterial;
      materialList(r.object.material).forEach(m => { m.clippingPlanes = state.section ? [clipPlane] : []; });
      continue;
    }
    if (!r.modes[mode]) {
      const originals = materialList(r.originalMaterial);
      const mats = originals.map(m => {
        let n;
        if (mode === 'color') {
          n = r.object.isMesh
            ? new THREE.MeshStandardMaterial({ color: r.autoColor, metalness: .04, roughness: .48, side: THREE.DoubleSide })
            : m.clone();
          n.color?.copy(r.autoColor);
          n.vertexColors = false;
        } else {
          n = mode === 'original' ? m.clone() : new THREE.MeshStandardMaterial({ color: 0xc8d2db, metalness: .08, roughness: .42, side: THREE.DoubleSide, wireframe: mode === 'wire' });
        }
        if (mode === 'original' && n.name === THREE.Loader.DEFAULT_MATERIAL_NAME) {
          if (r.color && n.color) n.color.setRGB(r.color.r / 255, r.color.g / 255, r.color.b / 255, THREE.SRGBColorSpace);
          n.metalness = .08; n.roughness = .45;
        }
        n.clippingPlanes = state.section ? [clipPlane] : [];
        temporaryMaterials.add(n); return n;
      });
      r.modes[mode] = Array.isArray(r.originalMaterial) ? mats : mats[0];
    }
    r.object.material = r.modes[mode];
    materialList(r.object.material).forEach(m => { m.clippingPlanes = state.section ? [clipPlane] : []; });
  }
  renderTree(); invalidate();
}
function updateSection() {
  const axis = $('sectionAxis').value;
  clipPlane.normal.set(axis === 'X' ? 1 : 0, axis === 'Y' ? 1 : 0, axis === 'Z' ? 1 : 0);
  const box = bounds(false);
  if (!box.isEmpty()) {
    const min = box.min[axis.toLowerCase()], max = box.max[axis.toLowerCase()];
    const t = (Number($('sectionSlider').value) + 100) / 200;
    clipPlane.constant = -(min + (max - min) * t);
  }
  for (const r of state.records) {
    materialList(r.object.material).forEach(m => { if (m) { m.clippingPlanes = state.section ? [clipPlane] : []; m.needsUpdate = true; } });
  }
  $('sectionPanel').hidden = !state.section; $('sectionToggle').classList.toggle('active', state.section);
  invalidate();
}
function toggleSection() { state.section = !state.section; updateSection(); }
function toggleProjection() {
  const position = camera.position.clone(), target = controls.target.clone();
  state.ortho = !state.ortho; controls.dispose(); camera = createCamera(); camera.position.copy(position);
  controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true; controls.dampingFactor = .12;
  controls.target.copy(target); controls.addEventListener('change', invalidate);
  $('projection').textContent = state.ortho ? '正交' : '透视'; fitAll();
}
function dimensions(v) { return `${format(v.x)} × ${format(v.y)} × ${format(v.z)}${state.unit ? ' ' + state.unit : ' 模型单位'}`; }
function format(n) { return n.toLocaleString('zh-CN', { maximumFractionDigits: Math.abs(n) < 1 ? 3 : 2 }); }
function unitLabel(settings) {
  const u = settings?.modelUnitSystem;
  const values = { 1: 'μm', 2: 'mm', 3: 'cm', 4: 'm', 5: 'km', 8: 'in', 9: 'ft', 10: 'mi' };
  if (typeof u === 'number') return values[u] || '';
  if (u && typeof u.value === 'number') return values[u.value] || '';
  const s = String(u?.name || u || '');
  return Object.entries({ Millimeters: 'mm', Centimeters: 'cm', Kilometers: 'km', Meters: 'm', Inches: 'in', Feet: 'ft', Microns: 'μm' }).find(([key]) => s.includes(key))?.[1] || '';
}
function renderTree() {
  const tree = $('tree'); tree.replaceChildren();
  const query = $('search').value.trim().toLocaleLowerCase();
  const items = state.tab === 'layers' ? state.layers : state.records;
  const filtered = items.filter(item => item.name.toLocaleLowerCase().includes(query));
  for (const item of filtered.slice(0, 1200)) {
    const row = document.createElement('div'); row.className = 'tree-row'; row.setAttribute('role', 'treeitem');
    row.classList.toggle('off', !item.on); row.classList.toggle('selected', state.tab === 'objects' && item === state.selected);
    const checkbox = document.createElement('input'); checkbox.type = 'checkbox'; checkbox.checked = item.on;
    checkbox.setAttribute('aria-label', '显示 ' + item.name);
    checkbox.addEventListener('change', () => { item.on = checkbox.checked; updateVisibility(); });
    const swatch = document.createElement('span'); swatch.className = 'swatch';
    const color = item.color;
    swatch.style.background = state.mode === 'color' && state.tab === 'objects' && item.autoColor
      ? '#' + item.autoColor.getHexString()
      : color ? `rgb(${color.r},${color.g},${color.b})` : '#8e9bad';
    const name = document.createElement('button'); name.className = 'tree-name'; name.textContent = item.name;
    name.title = item.name;
    name.addEventListener('click', () => {
      if (state.tab === 'objects') selectRecord(item);
      else {
        const box = new THREE.Box3(); state.records.filter(r => r.layerIndex === item.index).forEach(r => box.union(new THREE.Box3().setFromObject(r.object)));
        fitBox(box);
      }
    });
    if (state.tab === 'layers') {
      let depth = 0, parent = item.parentLayerId, seen = new Set();
      while (parent && depth < 8 && !seen.has(parent)) { seen.add(parent); const p = state.layers.find(l => l.id === parent); if (!p) break; depth++; parent = p.parentLayerId; }
      row.style.paddingLeft = `${7 + depth * 10}px`;
    }
    const count = document.createElement('span'); count.className = 'tree-count';
    count.textContent = state.tab === 'layers' ? String(state.records.filter(r => r.layerIndex === item.index).length) : item.type;
    row.append(checkbox, swatch, name, count); tree.append(row);
  }
  if (!filtered.length) { const empty = document.createElement('p'); empty.className = 'tree-empty'; empty.textContent = state.loaded ? '没有匹配的条目' : '载入模型后显示图层和对象'; tree.append(empty); }
  $('treeNote').textContent = filtered.length > 1200 ? `显示前 1200 项，共 ${filtered.length} 项；可搜索缩小范围` : `${filtered.length} 个${state.tab === 'layers' ? '图层' : '可预览对象'}`;
}
function clearModel() {
  selectRecord(null); state.isolated = false;
  const geometries = new Set(), materials = new Set(temporaryMaterials), textures = new Set();
  if (model) model.traverse(o => {
    if (o.geometry) geometries.add(o.geometry);
    if (o.material) materialList(o.material).forEach(m => materials.add(m));
  });
  state.records.forEach(r => materialList(r.originalMaterial).forEach(m => materials.add(m)));
  for (const m of materials) { for (const v of Object.values(m || {})) if (v?.isTexture) textures.add(v); m?.dispose(); }
  textures.forEach(t => t.dispose()); geometries.forEach(g => g.dispose()); temporaryMaterials.clear();
  if (model) normalizer.remove(model);
  model = null; state.records = []; state.layers = []; state.selected = null; state.loaded = false;
  normalizer.position.set(0, 0, 0); normalizer.scale.setScalar(1);
  loader?.dispose(); if (loader?.workerSourceURL) URL.revokeObjectURL(loader.workerSourceURL); loader = null;
}

async function loadModel(message) {
  const sequence = ++loadSequence;
  loadAbort?.abort(); loadAbort = new AbortController();
  clearTimeout(loadTimer); clearModel();
  lastLoad = message; state.filename = message.filename || 'Rhino 模型.3dm'; state.bytes = message.bytes || 0;
  state.loading = true; $('loading').hidden = false; $('error').hidden = true; $('warnings').hidden = true;
  $('filename').textContent = state.filename; $('filename').title = state.filename;
  $('subtitle').textContent = 'RHINO 3DM · v1.0.2 · OFFLINE PREVIEW';
  $('status').textContent = '读取模型…';
  setProgress('读取 3DM 文件', '文件仅在本机解析，不上传到网络。', 18);
  loadTimer = setTimeout(() => {
    if (sequence === loadSequence && state.loading) setProgress('模型仍在解析', '大文件、复杂块或高密度 SubD 需要更多时间。可关闭预览取消。', 65);
  }, 25000);
  let loadingStage = 'model';
  try {
    let data;
    if (message.transport === 'host-chunks') {
      data = await readHostModel(message, {
        signal: loadAbort.signal,
        progress: (received, total) => setProgress('从 QuickLook 读取模型', `${format(received / 1048576)} / ${format(total / 1048576)} MB · 本机分块传输`, 18 + received / total * 25)
      });
    } else {
      // Browser-only development/tests. Installed QuickLook uses host-chunks exclusively.
      const response = await fetch(message.url, { signal: loadAbort.signal, cache: 'no-store' });
      if (!response.ok) throw new Error(`无法读取模型文件（${response.status}）。请确认文件仍在原位置且已下载到本机。`);
      data = await response.arrayBuffer();
    }
    if (sequence !== loadSequence) return;
    const signature = new TextDecoder().decode(new Uint8Array(data, 0, Math.min(32, data.byteLength)));
    if (!signature.startsWith('3D Geometry File Format')) throw new Error('此文件没有有效的 Rhino 3DM 文件头。');
    const archiveVersion = Number(signature.slice(24).trim());
    const version = archiveVersion >= 50 ? String(archiveVersion / 10) : String(archiveVersion || '');
    state.bytes = data.byteLength;
    setProgress('解析模型与显示网格', `${format(data.byteLength / 1048576)} MB · 正在读取图层、对象和材质…`, 47);
    loadingStage = 'decoder';
    loader = new Rhino3dmLoader().setLibraryPath('./rhino/').setWorkerLimit(1).setSubdivisionLevel(2);
    // The preview is offline: external texture references must not cause requests.
    loader.manager.setURLModifier(url => {
      const u = new URL(url, location.href);
      return ['data:', 'blob:'].includes(u.protocol) || u.origin === location.origin ? url : 'data:,';
    });
    const activeLoader = loader;
    const object = await new Promise((resolve, reject) => activeLoader.parse(data, resolve, reject));
    if (sequence !== loadSequence || state.disposed) { activeLoader.dispose(); return; }
    model = object; normalizer.add(model);
    state.unit = unitLabel(model.userData.settings);
    state.layers = (model.userData.layers || []).map((l, index) => ({ ...l, index, name: l.name || `图层 ${index + 1}`, on: l.visible !== false, initial: l.visible !== false }));
    model.traverse(o => {
      if (o.isLight) { o.visible = false; return; }
      if (!o.geometry || !(o.isMesh || o.isLine || o.isPoints || o.isSprite)) return;
      const a = o.userData.attributes || {};
      const mode = a.mode?.value ?? a.mode;
      const initial = a.visible !== false && mode !== 1 && mode !== 'ObjectMode_Hidden';
      const type = o.userData.objectType || (o.isMesh ? 'Mesh' : o.isLine ? 'Curve' : 'Point');
      const record = { object: o, name: o.name || `${type} ${state.records.length + 1}`, type, layerIndex: a.layerIndex ?? 0,
        initial, on: initial, color: a.drawColor, originalMaterial: o.material, modes: {} };
      o.castShadow = o.isMesh; o.receiveShadow = false;
      state.records.push(record);
    });
    assignObjectColors(state.records);
    const warnings = (model.userData.warnings || []).map(w => {
      const text = typeof w === 'string' ? w : w.message || w.type || '';
      return /mesh|brep|extrusion/i.test(text) ? '部分曲面或实体没有保存显示网格。请在 Rhino 中切到着色视图，执行 Save，再取消“仅保存几何体 / Save small”。' : String(text);
    });
    if (!state.records.length) {
      warn(warnings);
      throw new Error('没有读取到可显示的几何体。\n若模型包含曲面或实体，请在 Rhino 中切换到着色视图，保存文件时取消“仅保存几何体 / Save small”，再试一次。\n空文档、无显示网格或不支持的对象也会出现此提示。');
    }
    model.updateWorldMatrix(true, true); updateVisibility();
    let box = bounds();
    if (box.isEmpty()) { box = bounds(false); warnings.push('模型中的对象初始均不可见。可点击“全显”查看。'); }
    const rawSize = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
    state.scale = 8 / Math.max(rawSize.x, rawSize.y, rawSize.z, .000001);
    normalizer.scale.setScalar(state.scale); normalizer.position.copy(center).multiplyScalar(-state.scale);
    model.updateWorldMatrix(true, true);
    const normalizedBox = bounds(false); ground.position.z = normalizedBox.min.z - .015; grid.position.z = ground.position.z + .005;
    let triangles = 0;
    state.records.forEach(r => { if (r.object.isMesh) triangles += (r.object.geometry.index?.count || r.object.geometry.attributes.position?.count || 0) / 3; });
    if (triangles > 1500000) warnings.push('模型网格较密，交互速度取决于显卡性能。');
    $('metadata').replaceChildren();
    for (const text of [`${state.records.length} 个可预览对象 · ${state.layers.length} 个图层`, `网格三角面 ${Math.round(triangles).toLocaleString('zh-CN')}`, `可见包围盒 ${dimensions(rawSize)}`, `${format(state.bytes / 1048576)} MB · 3DM ${version || ''}`]) {
      const row = document.createElement('div'); row.textContent = text; $('metadata').append(row);
    }
    state.loaded = true; state.loading = false;
    applyMode(state.mode); updateSection(); fitAll();
    if (bounds().isEmpty()) fitBox(bounds(false));
    $('loading').hidden = true;
    $('status').textContent = `${state.records.length} 对象 · ${Math.round(triangles).toLocaleString('zh-CN')} 三角面 · 只读预览`;
    warn(warnings); renderTree(); post({ type: 'modelLoaded', count: state.records.length });
  } catch (error) {
    if (sequence === loadSequence && error.name !== 'AbortError') {
      if (/failed to fetch/i.test(errorMessage(error))) {
        showError(loadingStage === 'decoder'
          ? '本地 3DM 解码组件读取失败。请确认已完整安装 v1.0.2，Assets/rhino 中的 rhino3dm.js 和 rhino3dm.wasm 未被拦截或删除。'
          : '模型文件传输失败。请安装完整的 v1.0.2 插件并重启 QuickLook。');
      } else showError(error);
    }
  } finally {
    if (sequence === loadSequence) clearTimeout(loadTimer);
  }
}

function wireEvents() {
  document.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => applyMode(b.dataset.mode)));
  document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => {
    state.view = b.dataset.view; fitAll(); document.querySelectorAll('[data-view]').forEach(x => x.classList.toggle('active', x === b));
  }));
  $('fit').onclick = fitAll; $('resetVisibility').onclick = resetVisibility; $('showAll').onclick = showAll;
  $('sectionToggle').onclick = toggleSection; $('sectionAxis').onchange = updateSection; $('sectionSlider').oninput = updateSection;
  $('projection').onclick = toggleProjection; $('search').oninput = renderTree;
  $('toggleSidebar').onclick = () => { document.body.classList.toggle('sidebar-hidden'); resize(); };
  $('theme').onclick = () => { document.body.classList.toggle('light'); $('theme').textContent = document.body.classList.contains('light') ? '深色' : '浅色'; invalidate(); };
  $('grid').onclick = () => { state.grid = !state.grid; grid.visible = state.grid; $('grid').classList.toggle('active', state.grid); invalidate(); };
  $('isolate').onclick = () => { if (state.selected) { state.isolated = !state.isolated; $('isolate').classList.toggle('active', state.isolated); updateVisibility(); } };
  for (const tab of ['layers', 'objects']) $(tab + 'Tab').onclick = () => {
    state.tab = tab; $('layersTab').classList.toggle('active', tab === 'layers'); $('objectsTab').classList.toggle('active', tab === 'objects'); renderTree();
  };
  $('closeWarnings').onclick = () => $('warnings').hidden = true;
  $('retry').onclick = () => { if (lastLoad) loadModel(lastLoad); };
  document.addEventListener('keydown', e => {
    const editing = e.target.closest('input,textarea,select,[contenteditable=true]');
    if (editing) { if (e.key === 'Escape') { e.target.blur(); e.preventDefault(); } return; }
    if (e.ctrlKey || e.altKey || e.metaKey || e.repeat) return;
    switch (e.key.toLowerCase()) {
      case ' ': case 'escape': e.preventDefault(); post({ type: 'close' }); break;
      case 'f11': e.preventDefault(); post({ type: 'fullscreen' }); break;
      case 'f': fitAll(); break;
      case 's': toggleSection(); break;
      case 'o': toggleProjection(); break;
      case 't': $('toggleSidebar').click(); break;
      case 'w': applyMode(state.mode === 'wire' ? 'original' : 'wire'); break;
      case 'c': applyMode(state.mode === 'color' ? 'original' : 'color'); break;
      case 'i': $('isolate').click(); break;
      case '1': case '2': case '3': case '4': document.querySelectorAll('[data-view]')[Number(e.key) - 1].click(); break;
    }
  });
  window.addEventListener('beforeunload', dispose);
}
function dispose() {
  if (state.disposed) return;
  state.disposed = true; loadSequence++; loadAbort?.abort(); clearTimeout(loadTimer);
  clearModel(); controls?.dispose(); resizeObserver?.disconnect();
  scene?.environment?.dispose(); ground?.geometry.dispose(); ground?.material.dispose();
  grid?.geometry.dispose(); grid?.material.dispose(); renderer?.dispose();
}

try {
  initRenderer(); wireEvents(); renderTree();
  if (window.chrome?.webview) {
    window.chrome.webview.addEventListener('message', e => {
      if (e.data?.type === 'load') loadModel(e.data);
      else acceptHostTransfer(e.data);
    });
    post({ type: 'ready' });
  } else {
    // Local development/test route. Production QuickLook never navigates to file URLs.
    const testModel = new URLSearchParams(location.search).get('model');
    if (testModel) loadModel({ url: testModel, filename: decodeURIComponent(testModel.split('/').pop()), bytes: 0 });
    else setProgress('等待 QuickLook 载入模型', '请安装插件后，在资源管理器中选中 .3dm 文件并按空格。', 15);
  }
  window.__rhinoViewer = { state, loadModel, dispose, fitAll, get scene() { return scene; }, get camera() { return camera; } };
} catch (error) {
  showError(`三维渲染初始化失败：${error.message}\n请更新 WebView2 Runtime 和显卡驱动。`);
}
