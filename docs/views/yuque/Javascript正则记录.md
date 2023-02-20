---
title: Javascript正则记录
urlname: iz3z59
date: '2021-09-06 23:14:51 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## **restrict-possible-usernames**

限制

1. 用户名只能是数字字母字符。
1. 用户名中的数字必须在最后。 数字可以有零个或多个。 用户名不能以数字开头。
1. 用户名字母可以是小写字母和大写字母。
1. 用户名长度必须至少为两个字符。 两位用户名只能使用字母。

--seed--

```javascript
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

--solution--

```javascript
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
