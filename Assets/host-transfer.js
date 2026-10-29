// SPDX-License-Identifier: GPL-3.0-or-later
// Acknowledged, bounded chunks avoid virtual-host fetch/CORS/COM-stream routing.
const MAX_BYTES = 512 * 1024 * 1024;
const CHUNK_BYTES = 384 * 1024;
let active = null;

function finish(pending, error) {
  if (active !== pending) return;
  active = null;
  clearTimeout(pending.timer);
  pending.signal?.removeEventListener('abort', pending.abort);
  if (error) pending.reject(error);
  else pending.resolve(pending.buffer.buffer);
}
function sendNext(pending) {
  clearTimeout(pending.timer);
  pending.timer = setTimeout(() => {
    pending.send({ type: 'cancelModelTransfer', transferId: pending.id });
    finish(pending, new Error('宿主传输模型超时。请重新载入；若仍失败，请确认文件已下载到本机。'));
  }, 20000);
  pending.send({ type: 'modelChunkRequest', modelToken: pending.token, transferId: pending.id, offset: pending.received });
}

export function readHostModel(message, { signal, progress = () => {}, send = data => window.chrome.webview.postMessage(data) } = {}) {
  if (active) active.abort();
  return new Promise((resolve, reject) => {
    const total = Number(message.bytes);
    if (!Number.isSafeInteger(total) || total <= 0 || total > MAX_BYTES || !message.modelToken) {
      reject(new Error('模型传输参数无效，或文件超过 512 MB。请安装完整的 v1.0.2 插件后再试。')); return;
    }
    if (signal?.aborted) { reject(new DOMException('Transfer cancelled', 'AbortError')); return; }
    const pending = {
      id: message.modelToken + ':' + crypto.randomUUID(), token: message.modelToken,
      received: 0, total, buffer: new Uint8Array(total), resolve, reject, send, signal, progress, timer: null, abort: null
    };
    pending.abort = () => {
      if (active !== pending) return;
      pending.send({ type: 'cancelModelTransfer', transferId: pending.id });
      finish(pending, new DOMException('Transfer cancelled', 'AbortError'));
    };
    active = pending;
    signal?.addEventListener('abort', pending.abort, { once: true });
    try { sendNext(pending); } catch (error) { finish(pending, error); }
  });
}

export function acceptHostTransfer(message) {
  const pending = active;
  if (!pending || message?.transferId !== pending.id) return;
  if (message.type === 'modelTransferError') {
    finish(pending, new Error(message.message || '宿主无法读取所选模型文件。')); return;
  }
  if (message.type !== 'modelChunk') return;
  try {
    if (message.offset !== pending.received || message.total !== pending.total)
      throw new Error('模型文件大小或传输顺序发生变化，请重新载入。');
    if (typeof message.base64 !== 'string' || message.base64.length > CHUNK_BYTES * 4 / 3 + 4)
      throw new Error('模型分块内容无效，请重新载入。');
    const binary = atob(message.base64);
    if (!binary.length || binary.length > CHUNK_BYTES || pending.received + binary.length > pending.total)
      throw new Error('模型数据长度不一致，请重新载入。');
    const destination = pending.received;
    for (let i = 0; i < binary.length; i++) pending.buffer[destination + i] = binary.charCodeAt(i);
    pending.received += binary.length;
    if (Boolean(message.done) !== (pending.received === pending.total))
      throw new Error('模型传输尚未完整结束，请重新载入。');
    pending.progress(pending.received, pending.total);
    if (message.done) finish(pending);
    else sendNext(pending);
  } catch (error) {
    pending.send({ type: 'cancelModelTransfer', transferId: pending.id });
    finish(pending, error);
  }
}
