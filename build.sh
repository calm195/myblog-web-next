#!/bin/bash

# 检查 pnpm 是否安装
echo "正在检查 pnpm 是否安装..."
if ! command -v pnpm &> /dev/null; then
    echo "pnpm 未安装，请先安装 pnpm。" >&2
    exit 1
else
    echo "pnpm 已安装。"
fi

# 构建项目
echo "正在构建项目..."
pnpm build
if [ $? -ne 0 ]; then
    echo "构建失败，请检查错误信息。" >&2
    exit 1
else
    echo "构建成功。"
fi

# 检查 out 目录是否存在
if [ ! -d "./out" ]; then
    echo "构建输出目录 ./out 不存在。" >&2
    exit 1
else
    echo "构建输出目录 ./out 存在。"
fi

# 使用 scp 将文件传输到远程服务器
scp -r ./out/* root@kurous.cn:/var/www/blog
