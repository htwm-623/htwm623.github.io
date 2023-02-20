---
title: Slidev 使用记录
urlname: kam9sk
date: '2021-06-06 23:42:44 +0800'
tags:
  - other
categories:
  - 技术笔记
---

## 安装

1. slidev 近期更新比较频繁, 使用 npm 安装可能会安装以前版本, 先使用如下清除缓存

```javascript
npm cache clear -f
```

2. 初始化项目

```bash
 npm init slidev@latest
```

## vite 打包问题

1. slidev 项目打包命令

```bash
npm run build
```

2. 默认打包的项目只能挂载在根目录下, 如需挂载在子目录,在项目中创建`vite.config.js`

```javascript
// vite.config.js
export default {
  // 配置项目挂载base目录
  base: "/htwm-open-sesame/slides/HTTP-Caching/",
};
```
