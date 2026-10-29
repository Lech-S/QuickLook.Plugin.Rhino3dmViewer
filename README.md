# QuickLook.Plugin.Rhino3dmViewer

An independent, offline Rhino `.3dm` preview plugin for [QuickLook for Windows](https://github.com/QL-Win/QuickLook).

[简体中文](README.zh-CN.md)

[Download the latest preview](https://github.com/Lech-S/QuickLook.Plugin.Rhino3dmViewer/releases) · [Release notes](docs/RELEASE-NOTES.md)

**Current package: v1.0.2, preview/beta.** The plugin compiles and its browser renderer and binary transfer logic have automated coverage. End-to-end testing inside Windows QuickLook has not yet been completed by the authoring environment. Please report the QuickLook version, plugin version, Windows version and the visible error when reporting a problem. Do not post confidential production models publicly.

## Features

- Local, read-only previews without a Rhino installation. JavaScript and WASM resources are bundled; models are not uploaded.
- Meshes, curves, points/point clouds, and Breps/extrusions with saved display meshes.
- Original materials/display colors, clay, wireframe and automatic object colors. The same document receives the same automatic colors when reopened.
- Orbit, pan, zoom, fit, standard views and perspective/orthographic projection.
- Layers/objects, search, visibility, inherited layer visibility, selection and isolation.
- Uncapped X/Y/Z clipping planes and display-geometry bounding-box dimensions.
- Acknowledged host-to-viewer binary chunks. Model loading does not depend on intercepting requests to a WebView2 virtual host.

The current UI is in Simplified Chinese. This is a community plugin and is not an official product of McNeel, Microsoft or QuickLook.

## Install

Requirements: Windows 10/11, QuickLook, .NET Framework 4.8+, WebView2 Evergreen Runtime and a WebGL 2-capable graphics driver.

1. Download `QuickLook.Plugin.Rhino3dmViewer_v1.0.2.qlplugin` from this repository's Releases.
2. Keep QuickLook running. Select the `.qlplugin` file in File Explorer and press **Space**.
3. Install the plugin, then fully restart QuickLook.
4. Select a `.3dm` file and press **Space**. Start with [the generated demo](Samples/Rhino-Preview-Demo.3dm).

This plugin extends format support. It does not fix QuickLook's selection integration with Tencent desktop organization software. Use File Explorer for installation and initial testing.

## Display-mesh limitation

rhino3dm/openNURBS is a geometry/file-reading library, not the full Rhino meshing kernel. Breps and extrusions require display meshes saved in the document. If they are missing, open the model in Rhino, switch to a shaded/rendered viewport, wait for it to finish and save without `Save small`/geometry-only options.

Other limits:

- Maximum file size: 512 MiB. Dense SubD and large assemblies can consume substantial memory.
- Rhino 5–8-format samples have been exercised. Rhino 9, linked blocks, complex nested blocks and all SubD variants are not verified.
- Materials are approximated by the viewer. External texture references and external linked files are not read. Renderer-specific materials/lighting are not reproduced.
- Section planes do not cap the cut. Bounding boxes use converted display geometry and are not precision CAD measurements.
- Model objects may be expanded during conversion; the object list is not a full Rhino assembly tree.
- x86/x64/ARM64 WebView2 loaders are included, but all Windows architectures, Store deployment and plugin coexistence still need testing.

## Shortcuts

| Input | Action |
|---|---|
| Left drag / right drag / wheel | Orbit / pan / zoom |
| Double-click geometry | Focus that geometry |
| F | Fit visible geometry |
| 1 / 2 / 3 / 4 | Isometric / front / right / top |
| O | Orthographic/perspective |
| W / C | Wireframe/original; automatic colors/original |
| T / I / S | Structure panel / isolate / section |
| Space / Esc / F11 | Close preview / close preview / QuickLook fullscreen |

## Build

Use Windows and the .NET 8 SDK. The browser assets are already built:

```powershell
powershell -NoProfile -File .\build-plugin.ps1
```

To rebuild browser code too, install Node.js 20+:

```powershell
powershell -NoProfile -File .\build-plugin.ps1 -RebuildWeb
```

The package is written to `dist/`. The build-time `lib/QuickLook.Common.dll` is not shipped into the user's QuickLook installation.

The supplied GitHub Actions workflow builds the plugin on Windows and runs the host transfer tests. Windows build and host-transfer checks run in GitHub Actions; interactive desktop validation is a separate check.

## Validation and contribution

See [VALIDATION.md](VALIDATION.md) and [recorded results](docs/validation-results/). These results distinguish browser/transport tests from Windows integration testing.

For bugs, include reproduction steps and error text. If needed, provide a minimal, non-confidential model. Improvements to English localization, Windows compatibility and large-model handling are welcome.

## License and acknowledgments

Original plugin code is GPL-3.0-or-later; see [LICENSE](LICENSE). Third-party components retain their own licenses in [LICENSES](LICENSES).

- QuickLook plugin interface: [QL-Win/QuickLook](https://github.com/QL-Win/QuickLook).
- Integration approach reference: [Mostafa214/QuickLook.Plugin.StepViewer](https://github.com/Mostafa214/QuickLook.Plugin.StepViewer).
- Geometry reader: [mcneel/rhino3dm](https://github.com/mcneel/rhino3dm), 8.35.0.
- Renderer and 3DM loader: [Three.js](https://github.com/mrdoob/three.js), 0.186.1.
- WebView2 SDK: 1.0.2592.51.

The checked-in QuickLook.Common reference was obtained from the referenced StepViewer repository and is used only for compilation. Its source is available through QuickLook; it is covered by the bundled QuickLook GPL license. `Samples/Rhino-Preview-Demo.3dm` is a generated demonstration, not a user production model.
