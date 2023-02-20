---
title: Promise记录
urlname: zbh2oa
date: '2021-05-21 23:56:25 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## util.promisity

- util.promisify 是在 node.js 8.x 版本中新增的一个工具，用于将老式的 Error first callback 转换为 Promise 对象

```javascript
const util = require("util");
const fs = require("fs");
let mineReadFile = util.promisify(fs.readFile);

mineReadFile("data/1.txt").then((res) => console.log(res.toString()));
```

## Promise.all

- 只有当所有 priomise 都成功时成功，返回一个 Promise 对象，返回值依次为数组中的值

```javascript
const f1 = Promise.resolve("1");
const f2 = Promise.resolve("2");
const f3 = Promise.resolve("3");

const result = Promise.all([f1, f2, f3]);
result.then((value) => console.log(value));
// output: [ '1', '2', '3' ]
```

- 如果其中有一个失败, 会直接抛出错误，错误值为队列中第一次 reject 的对象

```javascript
const f1 = Promise.resolve("1");
const f2 = Promise.reject("2");
const f3 = Promise.reject("3");

const result = Promise.all([f1, f2, f3]);
result
  .then((value) => console.log(value))
  .catch((err) => {
    console.log(err);
  });
// output: 2
```

## Promise.race

- 包含 n 个 promise 的数组， 返回值是队列中第一个改变状态的 promise 的值

```javascript
const f1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ok");
  }, 1000);
});
const f2 = Promise.reject("2");
const f3 = Promise.reject("3");

const result = Promise.race([f1, f2, f3]);
result.then((value) => console.log(value)).catch((err) => console.log(err)); //output error中的 2
```
