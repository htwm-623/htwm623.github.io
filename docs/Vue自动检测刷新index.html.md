---
title: Vue自动检测刷新index.html
urlname: iak4ko
date: '2021-07-08 00:15:06 +0800'
tags:
  - vue
categories:
  - 技术笔记
---

## Vue 常用缓存策略

1. 非 `index.html`文件使用 hash 命名
1. `index.html`文件设置 `cache-control` 为 `no-cahce`, `no-store`等

如用户未刷新页面或未退出页面时， 后台文件更新了，该策略不触发，用户仍可能拿到老数据

## 检测更新 index.html

- 原理 对比浏览器中`document.lastModified`和 远程`index.html`的`lastModified`
- 触发函数设置如下两处：
  1.  `router.afterEach`
  1.  `document`的 `visibilitychange`事件

## 部分 Vue 实现代码如下

```javascript
// ./src/api/api.js
import axios from "axios";

export const isDomFresh = async () => {
  const domLastModifiedTimeStr = new Date(document.lastModified).getTime();

  const remoteLastModified = await axios
    .get("http://127.0.0.1:8080/#/index.html")
    .then((res) => {
      return res.headers["last-modified"];
    });
  const remoteLastModifiedTimeStr = new Date(remoteLastModified).getTime();
  console.log(domLastModifiedTimeStr, remoteLastModifiedTimeStr);
  return domLastModifiedTimeStr === remoteLastModifiedTimeStr;
};

// ./src/router/index.js
import { isDomFresh } from "@/api/api";
router.afterEach(async (to, from) => {
  const isFresh = await isDomFresh();
  if (!isFresh) {
    router.go(0);
  }
});

// ./src/App.vue
import { isDomFresh } from "@/api/api";
export default {
  methods: {
    async handleDomVisible() {
      const isFresh = await isDomFresh();
      if (!isFresh) {
        this.$router.go(0);
      }
    },
  },
  mounted() {
    document.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState == "visible") {
        this.handleDomVisible();
      } else {
        console.log("tab is inactive");
      }
    });
  },
};
```

## 参考资料

1. [Javascript to detect if user changes tab (stackoverflow)](https://stackoverflow.com/questions/10338704/javascript-to-detect-if-user-changes-tab)
1. [router afterEach](https://router.vuejs.org/zh/api/#router-aftereach)
