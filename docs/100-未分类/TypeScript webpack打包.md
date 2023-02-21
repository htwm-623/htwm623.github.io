---
title: TypeScript webpack打包
urlname: kvblzy
date: '2021-06-19 00:10:29 +0800'
tags:
  - typescript
categories:
  - 技术笔记
---

## 初始化

1. 初始化项目 `npm init -y`
1. 下载依赖 `npm i webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`
1. 创建 webpack 配置文件 `webpack.config.js`

```javascript
const path = require("path");
const HTMLWebpackPlugin = require("clean-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定输出目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // 指定webpack打包时要使用的模块
  module: {
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 指定使用的loader
        use: "ts-loader",
        // 要排除的文件
        exclude: /node-modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "TS测试",
    }),
  ],
};
```

4. 创建 tsconfig 配置文件 `tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "es6",
    "target": "es6",
    "strict": true
  },
  "exclude": ["node_modules"]
}
```

5. 执行 bash `webpack` 即可进行编译

​
