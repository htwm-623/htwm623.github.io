---
title: CommonJS module syntax
urlname: rtncea
date: '2021-05-16 17:55:36 +0800'
tags:
  - node
categories:
  - 技术笔记
---

## Node 模块化机制

- 在 ES6 标准以前， Javascript 语言定义本身没有模块化的机制，通常直接使用 sciprt 标签现有模块

```javascript
<script src="http://xxx.js"></script>
```

- 目前，node 采用 CommonJS 规范。主流浏览器都支持 ES6 模块规范，Vue，React 等框架也采用 ES6 模块机制

## Node 模块导入导出示例

- node 模块中， 使用 module.exports 和 exports 进行对象导出

```javascript
// moduls.js
exports.a = 1;
// or
module.exports.b = 2;
```

```javascript
// main.js
const obj = require("./module");
```

- exports 实质为 module.exports 的引用

## exports 与 module.exports 的使用差异

- exports 无法导出 不具名数据

  module.exports 导出不具名数据时

```javascript
// module.js
module.exports = function () {};

// main.js
const func = require("./module");
```

- 而在 exports 中一定要知道名称才能使用

```javascript
// module.js
exports.func = function () {};

// main.js
const { func } = require("./module");
```

- 错误示范

```javascript
// 错误示范
exports = function () {};
```

exports 的实质还是 module.exports 的一个引用对象赋值，真正控制模块导出的还是 module。对 exports 直接进行赋值，那么就会失去原来的引用
