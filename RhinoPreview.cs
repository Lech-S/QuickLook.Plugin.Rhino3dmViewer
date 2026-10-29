// SPDX-License-Identifier: GPL-3.0-or-later
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Pipes;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using Microsoft.Web.WebView2.Core;
using Microsoft.Web.WebView2.Wpf;

namespace QuickLook.Plugin.Rhino3dmViewer
{
    internal sealed class RhinoPreview : Grid, IDisposable
    {
        private const string Host = "ql-rhino3dm.local";
        private const string Origin = "https://" + Host;
        private const long MaxFileBytes = 512L * 1024 * 1024;
        private static readonly object EnvironmentLock = new object();
        private static Task<CoreWebView2Environment> sharedEnvironment;
        private static IntPtr loaderHandle;
        private readonly string path;
        private readonly string token = Guid.NewGuid().ToString("N");
        private readonly JavaScriptSerializer json = new JavaScriptSerializer();
        private ModelTransfer modelTransfer;
        private WebView2 web;
        private TextBlock status;
        private bool started;
        private bool disposed;
        private readonly System.Windows.Threading.DispatcherTimer startupWatchdog = new System.Windows.Threading.DispatcherTimer();

        public RhinoPreview(string modelPath)
        {
            path = Path.GetFullPath(modelPath);
            Background = new SolidColorBrush(Color.FromRgb(22, 27, 35));
            status = new TextBlock {
                Text = "正在启动 3DM 预览…", Foreground = Brushes.White,
                FontSize = 16, TextWrapping = TextWrapping.Wrap, Margin = new Thickness(32),
                HorizontalAlignment = HorizontalAlignment.Center,
                VerticalAlignment = VerticalAlignment.Center
            };
            Children.Add(status);
            startupWatchdog.Interval = TimeSpan.FromSeconds(40);
            startupWatchdog.Tick += (s, e) => {
                startupWatchdog.Stop();
                ShowError("预览组件启动超时。请关闭窗口后重试，并确认 WebView2 Runtime 可正常运行。\n若安装了其他使用 WebView2 的插件，也请尝试更新它们。");
            };
            Loaded += OnLoaded;
        }

        private static Task<CoreWebView2Environment> GetEnvironment()
        {
            lock (EnvironmentLock)
            {
                if (sharedEnvironment == null || sharedEnvironment.IsFaulted || sharedEnvironment.IsCanceled)
                {
                    string profile = Path.Combine(Environment.GetFolderPath(
                        Environment.SpecialFolder.LocalApplicationData), "QuickLook", "Rhino3dmViewer", "WebView2");
                    sharedEnvironment = CoreWebView2Environment.CreateAsync(null, profile, null);
                }
                return sharedEnvironment;
            }
        }

        private static void PreloadNativeLoader(string directory)
        {
            if (loaderHandle != IntPtr.Zero) return;
            string architecture = Environment.GetEnvironmentVariable("PROCESSOR_ARCHITECTURE") ?? "";
            string rid = !Environment.Is64BitProcess ? "win-x86" :
                architecture.Equals("ARM64", StringComparison.OrdinalIgnoreCase) ? "win-arm64" : "win-x64";
            string loader = Path.Combine(directory, "runtimes", rid, "native", "WebView2Loader.dll");
            if (!File.Exists(loader)) throw new FileNotFoundException("插件缺少 WebView2Loader.dll，请重新安装完整插件包。", loader);
            loaderHandle = LoadLibraryEx(loader, IntPtr.Zero, 0x00000008);
            if (loaderHandle == IntPtr.Zero)
                throw new System.ComponentModel.Win32Exception(Marshal.GetLastWin32Error(), "无法载入 WebView2 组件（" + rid + "）。");
        }

        private async void OnLoaded(object sender, RoutedEventArgs e)
        {
            if (started || disposed) return;
            started = true;
            startupWatchdog.Start();
            try
            {
                var file = new FileInfo(path);
                if (!file.Exists) throw new FileNotFoundException("模型不存在或已被移动。");
                if (file.Length > MaxFileBytes) throw new IOException("本版支持最大 512 MB 的 3DM 文件，请先在 Rhino 中拆分或精简模型。");
                using (var f = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite | FileShare.Delete))
                {
                    byte[] bytes = new byte[32];
                    int count = f.Read(bytes, 0, bytes.Length);
                    if (count < 24 || !Encoding.ASCII.GetString(bytes, 0, count).StartsWith("3D Geometry File Format", StringComparison.Ordinal))
                        throw new InvalidDataException("文件没有有效的 Rhino 3DM 文件头，可能已损坏或只是改了扩展名。");
                }
                string directory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
                string assets = Path.Combine(directory, "Assets");
                if (!File.Exists(Path.Combine(assets, "viewer.html")))
                    throw new FileNotFoundException("插件资源不完整，请重新安装 .qlplugin 文件。");
                PreloadNativeLoader(directory);
                var environment = await GetEnvironment();
                if (disposed) return;
                web = new WebView2 { DefaultBackgroundColor = System.Drawing.Color.FromArgb(22, 27, 35) };
                Children.Insert(0, web);
                await web.EnsureCoreWebView2Async(environment);
                if (disposed) return;
                var core = web.CoreWebView2;
                core.Settings.AreDefaultContextMenusEnabled = false;
                core.Settings.AreDevToolsEnabled = false;
                core.Settings.IsStatusBarEnabled = false;
                core.Settings.IsZoomControlEnabled = false;
                core.Settings.AreBrowserAcceleratorKeysEnabled = false;
                core.SetVirtualHostNameToFolderMapping(Host, assets, CoreWebView2HostResourceAccessKind.DenyCors);
                core.AddWebResourceRequestedFilter("*", CoreWebView2WebResourceContext.All);
                core.WebResourceRequested += OnResourceRequested;
                core.WebMessageReceived += OnMessage;
                core.NavigationStarting += OnNavigationStarting;
                core.NewWindowRequested += OnNewWindow;
                core.PermissionRequested += OnPermission;
                core.DownloadStarting += OnDownload;
                core.ProcessFailed += OnProcessFailed;
                core.NavigationCompleted += OnNavigationCompleted;
                core.Navigate(Origin + "/viewer.html?v=1.0.2");
            }
            catch (Exception ex)
            {
                if (!disposed) ShowError(ex is WebView2RuntimeNotFoundException
                    ? "未检测到 Microsoft Edge WebView2 Runtime。\n请安装微软官方的 Evergreen WebView2 Runtime，重启 QuickLook 后再试。\n下载地址：https://developer.microsoft.com/microsoft-edge/webview2/"
                    : "3DM 预览未能启动：\n" + ex.Message);
                Log(ex);
            }
        }

        private void OnResourceRequested(object sender, CoreWebView2WebResourceRequestedEventArgs e)
        {
            if (disposed) return;
            Uri uri;
            if (!Uri.TryCreate(e.Request.Uri, UriKind.Absolute, out uri)) return;
            var core = web.CoreWebView2;
            if (uri.Scheme == "https" && uri.Host == Host)
            {
                // Static assets only. Requests to a mapped virtual host do not raise this
                // event; model bytes therefore travel through the WebMessage channel.
                return;
            }
            if (uri.Scheme == "data" || uri.Scheme == "blob") return;
            e.Response = core.Environment.CreateWebResourceResponse(null, 403, "External requests disabled", "");
        }

        private async void OnMessage(object sender, CoreWebView2WebMessageReceivedEventArgs e)
        {
            if (disposed || !e.Source.StartsWith(Origin + "/viewer.html", StringComparison.Ordinal)) return;
            try
            {
                var message = json.Deserialize<Dictionary<string, object>>(e.WebMessageAsJson);
                object type;
                if (message == null || !message.TryGetValue("type", out type)) return;
                switch (Convert.ToString(type))
                {
                    case "ready":
                        startupWatchdog.Stop();
                        status.Visibility = Visibility.Collapsed;
                        web.CoreWebView2.PostWebMessageAsJson(json.Serialize(new {
                            type = "load", transport = "host-chunks", modelToken = token,
                            filename = Path.GetFileName(path), bytes = new FileInfo(path).Length
                        }));
                        break;
                    case "modelChunkRequest":
                        object requestedToken, requestedId, requestedOffset;
                        if (!message.TryGetValue("modelToken", out requestedToken) || Convert.ToString(requestedToken) != token
                            || !message.TryGetValue("transferId", out requestedId)
                            || !message.TryGetValue("offset", out requestedOffset)) return;
                        string transferId = Convert.ToString(requestedId);
                        if (String.IsNullOrEmpty(transferId) || transferId.Length > 128) return;
                        long offset = Convert.ToInt64(requestedOffset);
                        await SendModelChunkAsync(transferId, offset);
                        break;
                    case "cancelModelTransfer":
                        object cancelledId;
                        if (message.TryGetValue("transferId", out cancelledId) && modelTransfer != null
                            && modelTransfer.Id == Convert.ToString(cancelledId)) CancelModelTransfer();
                        break;
                    case "error":
                        object error;
                        if (message.TryGetValue("message", out error))
                            Log(new IOException("Viewer: " + Convert.ToString(error)));
                        break;
                    case "modelLoaded": status.Visibility = Visibility.Collapsed; break;
                    case "close": SendQuickLookCommand("Close"); break;
                    case "fullscreen": SendQuickLookCommand("Fullscreen"); break;
                }
            }
            catch (Exception ex) { Log(ex); }
        }

        private async Task SendModelChunkAsync(string transferId, long offset)
        {
            ModelTransfer current = null;
            try
            {
                if (offset == 0)
                {
                    CancelModelTransfer();
                    modelTransfer = new ModelTransfer(path, transferId);
                }
                current = modelTransfer;
                if (current == null || current.Id != transferId) return;
                ModelChunk chunk = await current.ReadNextAsync(offset);
                if (disposed || modelTransfer != current || web == null || web.CoreWebView2 == null) return;
                web.CoreWebView2.PostWebMessageAsJson(json.Serialize(chunk));
                if (chunk.done) CancelModelTransfer();
            }
            catch (Exception ex)
            {
                if (disposed || (current != null && modelTransfer != current)) return;
                Log(ex);
                if (web != null && web.CoreWebView2 != null)
                    web.CoreWebView2.PostWebMessageAsJson(json.Serialize(new {
                        type = "modelTransferError", transferId = transferId,
                        message = "模型文件读取失败：" + ex.Message
                    }));
                CancelModelTransfer();
            }
        }

        private void CancelModelTransfer()
        {
            var current = modelTransfer;
            modelTransfer = null;
            if (current != null) current.Dispose();
        }

        private static void SendQuickLookCommand(string command)
        {
            Task.Run(() => {
                try
                {
                    using (var pipe = new NamedPipeClientStream(".", "QuickLook.App.Pipe." + WindowsIdentity.GetCurrent().User.Value, PipeDirection.Out))
                    {
                        pipe.Connect(600);
                        using (var writer = new StreamWriter(pipe, new UTF8Encoding(false)))
                            writer.WriteLine("QuickLook.App.PipeMessages." + command + "||");
                    }
                }
                catch (Exception ex) { Log(ex); }
            });
        }

        private void OnNavigationStarting(object sender, CoreWebView2NavigationStartingEventArgs e)
        { if (!e.Uri.StartsWith(Origin + "/viewer.html", StringComparison.Ordinal)) e.Cancel = true; }
        private void OnNewWindow(object sender, CoreWebView2NewWindowRequestedEventArgs e) { e.Handled = true; }
        private void OnPermission(object sender, CoreWebView2PermissionRequestedEventArgs e) { e.State = CoreWebView2PermissionState.Deny; }
        private void OnDownload(object sender, CoreWebView2DownloadStartingEventArgs e) { e.Cancel = true; }
        private void OnProcessFailed(object sender, CoreWebView2ProcessFailedEventArgs e)
        { ShowError("WebView2 渲染进程已停止。请关闭预览后重新按空格；如果反复发生，请更新显卡驱动及 WebView2 Runtime。"); }
        private void OnNavigationCompleted(object sender, CoreWebView2NavigationCompletedEventArgs e)
        { if (!e.IsSuccess && !disposed) ShowError("预览页面加载失败：" + e.WebErrorStatus + "。请重新安装完整插件包。"); }

        private void ShowError(string text)
        {
            if (disposed) return;
            startupWatchdog.Stop();
            status.Text = text;
            status.Visibility = Visibility.Visible;
            if (web != null) web.Visibility = Visibility.Collapsed;
        }

        internal static void Log(Exception ex)
        {
            try {
                string folder = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "QuickLook", "Rhino3dmViewer");
                Directory.CreateDirectory(folder);
                string log = Path.Combine(folder, "viewer.log");
                if (File.Exists(log) && new FileInfo(log).Length > 131072) File.WriteAllText(log, "");
                File.AppendAllText(log, DateTime.Now.ToString("s") + " " + ex.GetType().Name + ": " + ex.Message + Environment.NewLine);
            } catch { }
        }

        public void Dispose()
        {
            if (disposed) return;
            disposed = true;
            startupWatchdog.Stop();
            CancelModelTransfer();
            Loaded -= OnLoaded;
            if (web != null)
            {
                try {
                    if (web.CoreWebView2 != null) {
                        web.CoreWebView2.WebResourceRequested -= OnResourceRequested;
                        web.CoreWebView2.WebMessageReceived -= OnMessage;
                        web.CoreWebView2.NavigationStarting -= OnNavigationStarting;
                        web.CoreWebView2.NewWindowRequested -= OnNewWindow;
                        web.CoreWebView2.PermissionRequested -= OnPermission;
                        web.CoreWebView2.DownloadStarting -= OnDownload;
                        web.CoreWebView2.ProcessFailed -= OnProcessFailed;
                        web.CoreWebView2.NavigationCompleted -= OnNavigationCompleted;
                    }
                    web.Dispose();
                } catch (Exception ex) { Log(ex); }
                web = null;
            }
            Children.Clear();
        }

        [DllImport("kernel32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
        private static extern IntPtr LoadLibraryEx(string fileName, IntPtr reserved, uint flags);
    }
}
