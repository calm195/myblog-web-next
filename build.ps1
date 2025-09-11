# 检查 pnpm 是否安装
Write-Host "正在检查 pnpm 是否安装..."
if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
    Write-Error "pnpm 未安装，请先安装 pnpm。"
    exit 1
} else {
    Write-Host "pnpm 已安装。"
}

# 构建项目
Write-Host "正在构建项目..."
pnpm build
if ($LASTEXITCODE -ne 0) {
    Write-Error "构建失败，请检查错误信息。"
    exit 1
} else {
    Write-Host "构建成功。"
}

# 检查 out 目录是否存在
if (-not (Test-Path "./out")) {
    Write-Error "构建输出目录 ./out 不存在。"
    exit 1
} else {
    Write-Host "构建输出目录 ./out 存在。"
}
scp -r ./out/*  root@kurous.cn:/var/www/blog