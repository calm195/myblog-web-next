# my blog web

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 主要依赖

| 技术栈 | 版本 |
| --- | --- |
| Nodejs | 22.17.1 |
| Next.js | 14.2.30 |
| React | 18.2.0 |
| React-DOM | 18.2.0 |
| tailwindcss | 3.4.1 |
| typed.js | 2.1.0 |

## 快速开始

```bash
npm install
npm run dev
```

迁移到`pnpm`：

```bash
npm install -g pnpm
brew install pnpm # 或者是
rm -rf node_modules
rm -rf package-lock.json
pnpm install
pnpm run dev
```

## TODO

- [ ] svg处理 - footer图标只能设为8，其他样式异常
- [ ] 项目未使用依赖清除办法
- [ ] 规范个人数据格式、常用常量储存位置
- [ ] 主题切换
- [ ] 文章页面等
- [ ] typed.js 转 typed.ts

## 已实现

- header
- footer
- about
