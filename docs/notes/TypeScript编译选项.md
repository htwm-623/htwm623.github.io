---
title: TypeScript编译选项
urlname: yq4dsn
date: '2021-06-17 23:56:43 +0800'
tags:
  - typescript
categories:
  - 技术笔记
---

## 自动编译文件

```bash
tsc xxx.ts -w
```

## 自动编译整个项目

1. 项目中必须包含 `tsconfig.json` 文件, 然后执行 `tsc` 或者 `tsc -w`
1. 配置选项

```json
{
  // 指定需要编译的目录
  "include": ["./src/**/*"],
  // 指定不需要编译的目录
  "exclude": ["./src/hello/*"],
  // 指定被继承的配置文件
  "extends": "",
  // 指定被编译文件列表, 只有需要的编译文件较少时才会用到
  "files": [],

  // 编译器选项
  "compilerOptions": {
    // 指定ts编译为js的版本 es3 es5 es6 es2015 ... esnext
    "target": "ES6",
    // 指定模块化规划  commonjs amd umd ... esnext
    "module": "ES6",
    // 指定项目中要使用的库、 一般不改
    "lib": [],
    // 编译后文件所在目录， 默认和ts文件同目录
    "outDir": "",
    // 将全局作用域的代码编译为一个js文件,只能为amd 和system模块化才能支持
    "outFile": "",
    // 是否对js文件编译, 默认false
    "allowJs": false,
    // 是否检查js代码是否符合ts规范, 默认false
    "checkJs": false,
    // 是否移除注释, 默认false
    "removeComments": false,
    // 不生成编译后的文件,默认false
    "noEmit": false,
    // 当错误时不生成编译后的文件
    "noEmitOnError": false,

    // 所有严格模式检查的总开关, 写了这个 后续四项可以不写
    "strict": false,
    // 用来设置编译后的文件是否使用严格模式, 默认false
    "alwaysStrict": false,
    // 设置不允许隐式any类型
    "noImplicitAny": false,
    // 设置不允许不明确类型的this
    "noImplicitThis": false,
    // 严格检查空值
    "strictNullChecks": false
  }
}
```
