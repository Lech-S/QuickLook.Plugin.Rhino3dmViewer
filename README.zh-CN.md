# QuickLook Rhino 3DM 预览插件 v1.0.2（测试版）

在 Windows 资源管理器中选中 `.3dm` 文件，按空格打开三维预览。参考 StepViewer 的 QuickLook + WebView2 集成思路，采用独立实现的 C# 宿主和界面，使用 McNeel 官方 rhino3dm 与 Three.js Rhino3dmLoader 读取模型。

## 包内文件

- `QuickLook.Plugin.Rhino3dmViewer_v1.0.2.qlplugin`：已经编译、可直接安装的插件。
- 仓库根目录：完整的插件和查看器源代码、离线资源、构建说明、第三方许可。
- `Samples/Rhino-Preview-Demo.3dm`：带中文对象名称、嵌套图层、隐藏图层、曲线的 Rhino 8 格式测试模型。
- `VALIDATION.md`：已完成的验证和未验证的部分。

## v1.0.2 新增彩色模式

- 工具栏新增“彩色”，自动按对象分配不同的颜色；快捷键 `C` 在彩色/原始间切换。
- 网格、可读取的曲面/实体、曲线、点云都参与分色。对象列表的色块与彩色模式保持一致。
- 根据模型对象的稳定标识分配配色，同一文件每次打开配色一致；隐藏、独显不会改变配色。编辑模型后对象增删可能使配色变化。
- 彩色模式使用预览材质，不写回 3DM；切回“原始”恢复原材质/显示色。
- 彩色模式可以与剖切、选择和显隐配合使用。大量对象的颜色可能较为接近，可配合对象名称、选择框及独显辨认。

## v1.0.1 修复内容

- 修复 `Failed to fetch`：上一版将模型响应放在静态资源映射的同一虚拟主机下，但 WebView2 不会为已映射的虚拟主机触发 `WebResourceRequested`，导致模型响应没有送达。
- 模型改为由 QuickLook 宿主通过 WebMessage 分块传输；每块 384 KB，并由查看器确认后再传下一块。模型不再通过虚拟网址读取，也不暴露任意本地路径。
- 关闭/切换模型时取消未完成的传输；增加分块顺序、大小、完成标记和超时检查。
- 细化模型传输与解码资源的错误提示，并在界面副标题显示 v1.0.1。
- 版本化页面及脚本地址，避免升级后继续使用旧版页面资源。

升级方法：解压本包，保持 QuickLook 运行，在资源管理器中选中新的 `.qlplugin` 按空格，点击安装/更新，然后**完全退出并重新启动 QuickLook**。预览窗口左上角副标题应含 **v1.0.2**。

微软对虚拟主机映射与资源请求事件的说明：
https://learn.microsoft.com/en-us/microsoft-edge/webview2/how-to/webresourcerequested

## 安装

运行环境：Windows 10/11、QuickLook、.NET Framework 4.8 或更高版本、Microsoft Edge WebView2 Evergreen Runtime、支持 WebGL 2 的显卡/驱动。不要求安装 Rhino，也不要求安装 Node.js、.NET SDK 或其他开发工具。

1. 将本压缩包完整解压。
2. 启动 QuickLook，确认系统托盘有它的图标。
3. 在**资源管理器**中选中 `.qlplugin` 文件，按空格。
4. 在弹出的插件安装窗口中点 `Install / 安装`。
5. 退出并重新启动 QuickLook。
6. 先选中 `Samples/Rhino-Preview-Demo.3dm` 按空格，再试自己的模型。

如果提示缺少 WebView2 Runtime，请使用微软官方下载页面安装 **Evergreen Runtime**：
https://developer.microsoft.com/microsoft-edge/webview2/

如果选中 `.qlplugin` 后只显示压缩包内容，请确认扩展名仍为 `.qlplugin`，并使用支持第三方插件的 QuickLook 发行版。不要把包内的 DLL 单独复制出来；Assets 和 runtimes 目录也是必需的。

腾讯桌面整理与 QuickLook 的桌面触发兼容问题是独立问题。本插件扩展的是 3DM 读取和显示能力，不改变 QuickLook 如何取得桌面选中文件。安装和首次测试请在资源管理器中进行。

## 功能

- 本地、只读、离线读取 3DM，运行时不从 CDN 下载脚本和 WASM，也不上传模型。
- 网格、曲线、点/点云，以及具有已保存显示网格的 Brep 曲面/多重曲面/实体、Extrusion。
- 读取组件包含 SubD 和基础块实例处理；SubD、复杂嵌套块、链接块尚未用用户样本验证。
- 原始基础材质/对象显示色、统一灰模、线框、自动按对象分色模式。
- 鼠标旋转、平移、缩放、双击聚焦；等轴、前、右、顶视图；正交/透视切换。
- 图层与对象列表、搜索、显隐、父子图层显隐继承、对象选择、独显、恢复原始显隐。
- 模型单位、已显示网格三角面数量、可预览对象数量、初始可见模型及选中对象包围盒尺寸。
- X/Y/Z 轴动态剖切。**切面不封口**，不属于精确的实体截面分析。
- 深浅背景、地面网格开关、错误和缺少显示网格提示。
- 用户关闭预览时释放查看器、工作线程、模型和渲染资源。

## 操作

| 操作 | 功能 |
|---|---|
| 鼠标左键拖动 | 旋转模型 |
| 鼠标右键拖动 | 平移模型 |
| 滚轮 | 缩放 |
| 单击模型或对象列表 | 选择对象 |
| 双击模型 | 聚焦点击的几何对象 |
| F | 适应当前可见模型 |
| 1 / 2 / 3 / 4 | 等轴 / 前 / 右 / 顶视图 |
| O | 切换正交/透视 |
| W | 切换线框/原始模式 |
| C | 切换彩色/原始模式 |
| T | 显示/收起结构列表 |
| I | 切换选中对象独显 |
| S | 切换剖切 |
| 空格 / Esc | 关闭 QuickLook 预览 |
| F11 | 切换 QuickLook 全屏 |

输入搜索文字时空格仍用于输入。搜索框内按 Esc 先结束输入焦点，再按一次可关闭预览。对象列表展示转换后的可预览几何对象；块会展开显示，列表不等同于 Rhino 原始装配树。

## 为什么某些曲面/实体没有显示

rhino3dm/openNURBS 是文件和几何读取库，不包含完整 Rhino 建模内核。当前插件依赖 3DM 中保存的显示网格来显示 Brep 和 Extrusion，不能替代 Rhino 对任意 NURBS 实时网格化。

在 Rhino 中打开模型，切换到**着色**或**渲染**视图，等待模型显示完整，再保存。保存选项中不要启用 **Save small / 仅保存几何体 / 不保存渲染网格** 一类选项（具体名称随 Rhino 版本和语言变化）。然后关闭 QuickLook 预览并重新按空格。

若模型只有曲线和点，正常预览时不会自动生成曲面。空文件、损坏文件和不受支持的几何对象会给出说明。

## 边界与限制

- 已验证的文件版本为 Rhino 5、6、7、8 格式样例；Rhino 9 和其他版本未验证。
- 默认最大文件 512 MB。复杂块、高密度 SubD 和大网格可能仍占用较多内存并导致延迟。
- 基础材质、嵌入贴图和对象色的转换由官方读取组件完成；不保证还原 Rhino 各渲染插件的专有材质、外部贴图、灯光和环境。本插件使用独立的预览照明。
- 不读取磁盘上的外部贴图或外部链接文件；缺失资源会提示或忽略。
- 不提供建模、修改文件、真实物性计算、Brep 精确测量、尺寸标注/布局打印或 Grasshopper 执行。
- 包围盒尺寸根据读取出的显示几何计算，不作为制造检验或曲面精度依据。
- 锁定对象可以预览和显隐；本插件不编辑源文件，显隐设置也不会写回 3DM。
- 本版包含 x64/x86/ARM64 的 WebView2 原生加载器，但 Windows 不同架构、QuickLook 商店版、插件共存尚未进行实机验证。

## 排查与卸载

如果一直显示文件信息而没有打开插件，先确认安装完成后重启了 QuickLook，并用随包样例测试；若有其他 3DM 预览插件，暂时退出 QuickLook 并停用其他同格式插件再试。

宿主启动错误日志位于：
`%LOCALAPPDATA%\QuickLook\Rhino3dmViewer\viewer.log`

若渲染进程崩溃，先更新 WebView2 Runtime 和显卡驱动，再关闭预览重试。

卸载：退出 QuickLook，在其用户插件目录中删除 **QuickLook.Plugin.Rhino3dmViewer** 文件夹，然后重启 QuickLook。安装版的常见目录是 `%APPDATA%\pooi.moe\QuickLook\QuickLook.Plugin\`；便携版和商店版目录以 QuickLook 的数据位置为准。不要删除其他插件目录。

## 开发与重新构建

仓库根目录 已带构建后的网页资源；只改 C# 时不需要 Node.js。

在 Windows 上安装 .NET 8 SDK 或兼容 SDK，进入 仓库根目录，运行：

```powershell
powershell -NoProfile -File .\build-plugin.ps1
```

若修改了网页代码，再安装 Node.js 20+ 并运行：

```powershell
powershell -NoProfile -File .\build-plugin.ps1 -RebuildWeb
```

脚本会从 NuGet/npm 恢复固定版本的构建依赖，需要联网。**这仅是开发时的要求，安装和使用已打包插件不需要这些开发工具。**

输出在 `dist/`。`lib/QuickLook.Common.dll` 仅供编译，打包时不覆盖用户 QuickLook 自带的 Common DLL。

## 来源与许可

- 集成架构参考：https://github.com/Mostafa214/QuickLook.Plugin.StepViewer （MIT）
- QuickLook 插件接口：https://github.com/QL-Win/QuickLook （GPL-3.0-or-later）
- 官方几何读取组件：https://github.com/mcneel/rhino3dm （MIT），版本 8.35.0
- Three.js：https://github.com/mrdoob/three.js （MIT），版本 0.186.1
- Microsoft.Web.WebView2：版本 1.0.2592.51，许可随包附带

本插件原创代码采用 GPL-3.0-or-later。第三方组件保持各自许可，详见 `LICENSES/`。这是独立社区插件，不是 McNeel、QuickLook 或微软官方产品。


GitHub 发布页：https://github.com/Lech-S/QuickLook.Plugin.Rhino3dmViewer/releases
