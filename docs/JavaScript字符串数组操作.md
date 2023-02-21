---
title: JavaScript字符串数组操作
urlname: ff1s8b
date: '2022-03-24 23:48:47 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## 字符串 substring substr slice 区别

- substring(start,end)返回指定下标间的字符，下标必须为正整数
- substr(start,length)返回从指定下标开始的长度为 length 的字符，可以为负数
- slice(start,end)返回指定下标间的字符，可以为负数

```javascript
var stringValue = "hello world";

console.log(stringValue.slice(3)); //”lo world”
console.log(stringValue.substring(3)); //”lo world”
console.log(stringValue.substr(3)); //”lo world”

console.log(stringValue.slice(3, 7)); //”lo w”
console.log(stringValue.substring(3, 7)); //”lo w”
console.log(stringValue.substr(3, 7)); //”lo worl”

console.log(stringValue.slice(-3)); //"rld"　从后往前数3个开始
console.log(stringValue.substring(-3)); //"hello world" 为负，默认从0开始
console.log(stringValue.substr(-3)); //"rld"

console.log(stringValue.slice(3, -4)); //”lo w”　下标从3开始到-4(从后往前数4个)
console.log(stringValue.substring(3, -4)); //”hel”
console.log(stringValue.substr(3, -4)); //””　长度为负，默认不显示
```

## 数组 slice 和 splice 区别

### slice()

返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。返回选定的元素，`该方法不会修改原数组`。

```javascript
// arr.slice()
// arr.slice(begin)
// arr.slice(begin, end)
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var fruit1 = fruits.slice(1);
var fruit2 = fruits.slice(1, 3);
var fruit3 = fruits.slice(-3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// fruit1 contains ['Orange', 'Lemon', 'Apple', 'Mango']
// fruit2 contains ['Orange', 'Lemon']
// fruit3 contains ["Lemon", "Apple", "Mango"]
```

### splice()

splice() 方法可删除从 index 处开始的零个或多个元素
并且用参数列表中声明的一个或多个值来替换那些被删除的元素。
如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。splice() 方法会直接对数组进行修改。

```javascript
array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)

var myFish1 = ['angel', 'clown', 'drum', 'sturgeon'];
var removed1 = myFish1.splice(2, 1, 'trumpet');

// myFish1 is ["angel", "clown", "trumpet", "sturgeon"]
// removed1 is ["drum"]

var myFish2 = ['angel', 'clown', 'drum', 'sturgeon'];
var removed2 = myFish2.splice(-2, 2, 'trumpet');

// myFish2 is ["angel", "clown", "trumpet"]
// removed2 is ["drum", "sturgeon"]
```
