---
title: ffmpeg.wasm实现前端视频转码
urlname: xq93r1
date: '2021-12-04 20:54:07 +0800'
tags:
  - ffmpeg
categories:
  - 技术笔记
---

## Vue2 部分代码

1. package.json

```json
{
  "dependencies": {
    "@ffmpeg/core": "^0.10.0",
    "@ffmpeg/ffmpeg": "^0.10.1",
    "core-js": "^3.6.5",
    "express": "^4.17.1",
    "vue": "^2.6.11"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "vue-template-compiler": "^2.6.11"
  }
}
```

2. vue.config.js

```javascript
const path = require("path");
const express = require("express");
module.exports = {
  configureWebpack: {
    devServer: {
      before: (app) => {
        app.use(
          "/node_modules/",
          express.static(path.join(__dirname, "./node_modules/"))
        );
      },
      headers: {
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    },
  },
};
```

3. Home.vue

```vue
<template>
  <div>
    <video :src="video" controls />
    <div>
      <input type="file" ref="upload" @change="transcode" />
    </div>
  </div>
</template>

<script>
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
export default {
  data() {
    return {
      video: "",
    };
  },
  methods: {
    async transcode(e) {
      const ffmpeg = createFFmpeg();
      const file = e.target.files[0];
      await ffmpeg.load();
      ffmpeg.FS("writeFile", "test.avi", await fetchFile(file));
      await ffmpeg.run("-i", "test.avi", "test.mp4");
      const data = ffmpeg.FS("readFile", "test.mp4");
      this.video = URL.createObjectURL(
        new Blob([data.buffer], { type: "video/mp4" })
      );
    },
  },
};
</script>
```

## Vue3 部分代码

1. package.json

```json
{
  "dependencies": {
    "@ffmpeg/core": "^0.10.0",
    "@ffmpeg/ffmpeg": "^0.10.1",
    "core-js": "^3.6.5",
    "express": "^4.17.1",
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/compiler-sfc": "^3.0.0"
  }
}
```

2. vue.config.js

```javascript
const path = require("path");
const express = require("express");
module.exports = {
  configureWebpack: {
    devServer: {
      before: (app) => {
        app.use(
          "/node_modules/",
          express.static(path.join(__dirname, "./node_modules/"))
        );
      },
      headers: {
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    },
  },
};
```

3. Home.vue

```vue
<template>
  <div>
    <video :src="video" controls></video>
    <br />
    <br />
    <input type="file" @change="transcode" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

export default defineComponent({
  name: "App",
  setup() {
    const ffmpeg = createFFmpeg({ log: true });
    let video = ref(null);
    const transcode = async (e) => {
      const file = e.target.files[0];
      await ffmpeg.load();
      ffmpeg.FS("writeFile", file.name, await fetchFile(file));
      await ffmpeg.run("-i", file.name, "test.mp4");
      const data = await ffmpeg.FS("readFile", "test.mp4");
      video.value = URL.createObjectURL(
        new Blob([data], { type: "video/mp4" })
      );
    };
    return {
      video,
      transcode,
    };
  },
});
</script>
```

## 问题记录

开发环境下会出现如下情况
![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1638622735517-fbe1d797-706a-4501-b12b-c6857b65a092.png#clientId=u68d16fc7-4ba5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=311&id=u80c0c37e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=311&originWidth=918&originalType=binary∶=1&rotation=0&showTitle=false&size=35434&status=done&style=none&taskId=ua203d274-0d3c-4f93-8935-52b6e0b2d38&title=&width=918)

1. 解决方案 1 浏览器启动时添加如下参数

```bash
--enable-features=SharedArrayBuffer
--disable-web-security
--user-data-dir
```

```bash
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --profile-directory=Default --enable-features=SharedArrayBuffer --disable-web-security --user-data-dir
```

2. 解决方案 2 添加`headers`
   1. `Cross-Origin-Embedder-Policy: require-corp`
   1. `Cross-Origin-Opener-Policy: same-origin`

- 未验证添加如上两个 headers 对其他资源的影响

## 参考资料

1. [ffmpegwasm/ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
1. [官方 demo](https://ffmpegwasm.netlify.app/#demo)
