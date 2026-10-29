// SPDX-License-Identifier: GPL-3.0-or-later
using System;
using System.IO;
using System.Windows;
using QuickLook.Common.Plugin;

namespace QuickLook.Plugin.Rhino3dmViewer
{
    public sealed class Plugin : IViewer
    {
        private RhinoPreview preview;
        public int Priority { get { return 30; } }
        public void Init() { }
        public bool CanHandle(string path)
        {
            // Keep probing cheap; do not read cloud placeholders during plugin discovery.
            return !String.IsNullOrEmpty(path) && !Directory.Exists(path)
                && String.Equals(Path.GetExtension(path), ".3dm", StringComparison.OrdinalIgnoreCase);
        }
        public void Prepare(string path, ContextObject context)
        {
            context.SetPreferredSizeFit(new Size(1120, 760), 0.88);
        }
        public void View(string path, ContextObject context)
        {
            Cleanup();
            context.Title = Path.GetFileName(path) + " · Rhino 3DM";
            preview = new RhinoPreview(path);
            context.ViewerContent = preview;
            // The viewer has its own visible progress/error UI, including runtime failures.
            context.IsBusy = false;
        }
        public void Cleanup()
        {
            if (preview != null) { preview.Dispose(); preview = null; }
        }
    }
}
