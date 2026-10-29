# Draft: Plugin listing request — Rhino3dmViewer (.3dm)

**Prepare only. Do not post until the repository and release links below have been resolved and verified.**

Suggested issue/discussion title:

`Plugin listing request: Rhino3dmViewer for Rhino .3dm files`

Suggested body:

Hello QuickLook maintainers,

I would like to propose Rhino3dmViewer for the Available Plugins list.

- Repository: `https://github.com/Lech-S/QuickLook.Plugin.Rhino3dmViewer`
- Release: `https://github.com/Lech-S/QuickLook.Plugin.Rhino3dmViewer/releases/tag/v1.0.2`
- Package: `QuickLook.Plugin.Rhino3dmViewer_v1.0.2.qlplugin`
- License: GPL-3.0-or-later for the plugin; third-party components retain their own licenses.

The plugin adds offline, read-only Rhino `.3dm` previews using rhino3dm, Three.js and WebView2. It supports original/clay/wireframe/automatic object colors, layer and object visibility, isolation, orbit/pan/zoom, standard views and uncapped section planes. The integration approach was informed by StepViewer.

This is a preview/beta. Browser rendering and host binary-transfer tests pass; the Windows QuickLook integration and all architectures have not been fully validated. Breps/extrusions require display meshes saved in the 3DM file, and the current UI is Simplified Chinese. These limitations are documented prominently.

Would you be willing to list it as a third-party preview plugin, or advise if more Windows validation is required first? This request is for the external plugin list; it does not ask for immediate inclusion in the built-in viewers.

Thank you.

## Proposed Wiki table row

```markdown
| [Rhino3dmViewer](https://github.com/Lech-S/QuickLook.Plugin.Rhino3dmViewer) v1.0.2 (preview) | 2026-10-29 | [Link](https://github.com/Lech-S/QuickLook.Plugin.Rhino3dmViewer/releases/download/v1.0.2/QuickLook.Plugin.Rhino3dmViewer_v1.0.2.qlplugin) | Offline interactive Rhino `.3dm` previews with layers, object visibility, automatic colors and section planes. Saved display meshes required for Breps/extrusions. |
```

The date should be replaced with the actual release date when publishing. Replace Lech-S with the authenticated repository owner's login before posting. Use a public repository and public release so the maintainers can review the source and download the package.
