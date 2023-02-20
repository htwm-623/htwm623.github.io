---
title: difference-between-JS-for-loop
urlname: zkhgxs
date: '2021-06-05 00:46:29 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## for in

> for in 顺序遍历一个对象的除了 Symbol 之外的所有键， 不适用 Map Set， 不推荐使用在数组上, 数组推荐使用 for of, 和 Array.prototype.forEach()

```javascript
for (let prop in ["a", "b", "c"]) console.log(prop); // 0, 1, 2 (array indexes)

for (let prop in "str") console.log(prop); // 0, 1, 2 (string indexes)

for (let prop in { a: 1, b: 2, c: 3 }) console.log(prop); // a, b, c (object property names)

for (let prop in new Set(["a", "b", "a", "d"])) console.log(prop); // undefined (no enumerable properties)
```

## for of

> for of 顺序遍历可迭代对象的值，而不是键

```javascript
for (let val of ["a", "b", "c"]) console.log(val); // a, b, c (array values)

for (let val of "str") console.log(val); // s, t, r (string characters)

for (let val of { a: 1, b: 2, c: 3 }) console.log(prop); // TypeError (not iterable)

for (let val of new Set(["a", "b", "a", "d"])) console.log(val); // a, b, d (Set values)
```

## forEach

> 数组原型链方法，仅仅适用数组

```javascript
["a", "b", "c"].forEach(
  (val) => console.log(val) // a, b, c (array values)
);

["a", "b", "c"].forEach(
  (val, i) => console.log(i) // 0, 1, 2 (array indexes)
);
```
