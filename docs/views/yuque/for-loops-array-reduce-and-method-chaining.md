---
title: for-loops-array-reduce-and-method-chaining
urlname: gvsxon
date: '2021-06-06 23:10:58 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## For loops

```javascript
const files = ["foo.txt ", ".bar", "   ", "baz.foo"];
let filePaths = [];

for (let file of files) {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    filePaths.push(filePath);
  }
}

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

### Array reduce

```javascript
const files = ["foo.txt ", ".bar", "   ", "baz.foo"];
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `~/cool_app/${fileName}`;
    acc.push(filePath);
  }
  return acc;
}, []);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```

### Method chaining

```javascript
const files = ["foo.txt ", ".bar", "   ", "baz.foo"];
const filePaths = files
  .map((file) => file.trim())
  .filter(Boolean)
  .map((fileName) => `~/cool_app/${fileName}`);

// filePaths = [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']
```
