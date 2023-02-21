---
title: TypeScript基础
urlname: eu3367
date: '2021-06-16 23:58:25 +0800'
tags:
  - typescript
categories:
  - 技术笔记
---

> 注: 很多文本直接来源于 [typescript 官方文档](https://www.typescriptlang.org/zh/docs/)

​

​

## 变量声明

1. 类型推导, 如果变量声明和赋值同时进行, 会自动推到类型

```typescript
let a = 1;

// 等价于
let a: number = 1;
```

2. 类型断言

```typescript
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
```

or

```typescript
let someValue: unknown = "this is a string";

let strLength: number = (<string>someValue).length;
```

3. 可以使用 `|` 来连接多个类型

```typescript
let value: boolean | string = true;
value = "string1";
```

4. 声明变量但不赋值, 会自动推导为 any

```typescript
let value;
value = 10;
value = "10";
```

## 基本类型

| 类型    | 例子              | 描述                            |
| ------- | ----------------- | ------------------------------- |
| number  | 1, -33, 2.5       | 任意数字                        |
| string  | 'hi', "hi", `hi`  | 任意字符串                      |
| boolean | true、false       | 布尔值 true 或 false            |
| 字面量  | 其本身            | 限制变量的值就是该字面量的值    |
| any     | \*                | 任意类型                        |
| unknown | \*                | 类型安全的 any                  |
| void    | 空值（undefined） | 没有值（或 undefined）          |
| never   | 没有值            | 不能是任何值                    |
| object  | {name:'孙悟空'}   | 任意的 JS 对象                  |
| array   | [1,2,3]           | 任意 JS 数组                    |
| tuple   | [4,5]             | 元素，TS 新增类型，固定长度数组 |
| enum    | enum{A, B}        | 枚举，TS 中新增类型             |

## 参考资料

1. [typescript 官方文档](https://www.typescriptlang.org/zh/docs/)​
