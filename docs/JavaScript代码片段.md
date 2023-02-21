---
title: JavaScript代码片段
urlname: dpd8v8
date: '2021-12-03 00:33:16 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## Vuex 数据持久化

```javascript
import Vue from "vue";
import Vuex from "vuex";
import user from "./module/user";
import Cookies from "js-cookie";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
  },
  plugins: [
    createPersistedState(
      (storage) => {
        return {
          getItem: (key) => Cookies.get(key),
          setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
          removeItem: (key) => Cookies.remove(key),
        };
      },
      (reducer) => {
        return (state, key) => {
          if (key === "user") {
            return {
              user: {
                id: "",
                name: "",
              },
            };
          }
          return state;
        };
      }
    ),
  ],
});

export default store;
```

## JavaScript 文件下载

```javascript
const download = (url) => {
  const a = document.createElement("a");
  a.setAttribute("href", href);
  a.setAttribute("download", title);
  a.click();
  a.remove();
};
```

多个文件下， 直接在循环中调用上述函数，只会下载一个文件，其余的会被浏览器主动取消，所以多文件下载要利用 iframe 属性下载

```javascript
const iframe_download = (url) => {
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.style.height = 0;
  iframe.src = url;
  document.body.append(iframe);
  setTimeOut(() => {
    iframe.remove();
  }, 1 * 60 * 1000);
};
```

## JavaScript 粘贴板

```javascript
const copyToClipboard  (string1) => {
  const textarea = document.createElement('textarea')
  textarea.value= string1
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
}
```

## 读取 markdown 头部信息

```javascript
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const fm = require("front-matter");

const fileList = glob.sync("data/**/*.md");

fileList.forEach((file) => {
  const filePath = path.resolve(file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const result = fm(fileContent);
  console.log(result.attributes);

  // output
  // {
  //   title: 'docker编写镜像并上传',
  //   urlname: 'xzrciy',
  //   date: '2021-05-12 00:05:56 +0800',
  //   tags: [ 'docker' ],
  //   categories: [ '技术笔记' ]
  // }
});
```

## 使用 spawn 执行 ffmpeg 获取进度

```javascript
const { spawn } = require("child_process");

const child = spawn("ffmpeg", [
  "-i",
  "./1.mp4",
  "./1.avi",
  "-preset",
  "pipe:1",
]);

child.stderr.on("data", (data) => {
  console.log(`message: ${data}`);
});
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1638717037988-01da2e29-75b3-48e3-b4f5-31ad0996d643.png#clientId=u099e2735-2c01-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=369&id=u45315ddd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=369&originWidth=864&originalType=binary∶=1&rotation=0&showTitle=false&size=81088&status=done&style=none&taskId=u79a6cad6-9dca-4f42-b57c-9f533b03ed5&title=&width=864)
