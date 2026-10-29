param([switch]$RebuildWeb)
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
if ($RebuildWeb) {
    npm ci
    if ($LASTEXITCODE -ne 0) { throw 'npm ci failed' }
    npm run build:web
    if ($LASTEXITCODE -ne 0) { throw 'Web build failed' }
}
dotnet build .\QuickLook.Plugin.Rhino3dmViewer.csproj -c Release
if ($LASTEXITCODE -ne 0) { throw 'Plugin build failed' }
$output = Join-Path $PSScriptRoot 'bin\Release\net48'
$stage = Join-Path $PSScriptRoot 'dist\Rhino3dmViewer'
if (Test-Path $stage) { Remove-Item -LiteralPath $stage -Recurse -Force }
New-Item -ItemType Directory -Path $stage -Force | Out-Null
foreach ($name in @('QuickLook.Plugin.Rhino3dmViewer.dll','Microsoft.Web.WebView2.Core.dll','Microsoft.Web.WebView2.Wpf.dll','QuickLook.Plugin.Metadata.config','Assets','runtimes','LICENSES')) {
    Copy-Item -LiteralPath (Join-Path $output $name) -Destination $stage -Recurse
}
$version = ([xml](Get-Content -LiteralPath (Join-Path $PSScriptRoot 'QuickLook.Plugin.Metadata.config') -Raw)).Metadata.Version
$zip = Join-Path $PSScriptRoot ('dist\QuickLook.Plugin.Rhino3dmViewer_v' + $version + '.zip')
Compress-Archive -Path "$stage\*" -DestinationPath $zip -Force
$plugin = [IO.Path]::ChangeExtension($zip, '.qlplugin')
Move-Item -LiteralPath $zip -Destination $plugin -Force
Write-Host "Created $plugin"
