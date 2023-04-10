---
title: Vue2 配置Tailwind CSS
urlname: tdd6m4
date: '2021-05-09 16:57:23 +0800'
tags:
  - vue
  - tailwind
categories:
  - 技术笔记
---

## 操作流程

1. 使用 vue create 创建项目

```bash
vue create myweb
```

2. 安装 tailwind css
   1. 最新的 tailwind css 使用 postcss 8， 很多框架暂时不支持， 所以 vue2 需要指定安装 postcss7 的版本

```bash
npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

3. 创建配置文件

```bash
# 创建一个空的tainwind css配置文件
npx tailwindcss init

# 或者列举所有配置项
npx tailwindcss init -fill

```

创建 postcss 配置文件(vue 必须)

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

4. 在 main.js 中引入

```javascript
import "tailwindcss/tailwind.css";
```

至此为 vue2 引入 tailwind 全流程

