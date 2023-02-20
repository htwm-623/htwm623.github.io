---
title: cypress简单上手
urlname: zl6xh3
date: '2021-05-23 21:04:24 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

## cypress

1. 可以测试 UI UI--对象识别--DOM--定位对象
1. 可以直接测试接口,而非点击按钮

## cypress 安装

- 在 node 项目中 执行 `npm i cypress`
- 安装完成之后 执行 `npx cypress open`,会打开 cypress 的一个窗口,同时在项目中生成 cypress 文件夹
- 测试用例示例在 cypress/integration 中, 如图所示(建议大致读一遍,大部分该怎么写基本都有)
- ![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621777801642-d01f7325-4f7f-4234-a591-1dcc619fc583.png#clientId=u22045363-ed84-4&from=paste&height=524&id=u3bab9ff9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=524&originWidth=409&originalType=binary∶=1&size=261205&status=done&style=none&taskId=u2795a692-630d-4685-9132-66d3ecf38ce&width=409)

## cypress hello world

1. 在 integration 文件夹下创建 js 文件 testSearch.js

```javascript
context("搜索测试测试", () => {
  it("输入搜索", () => {
    cy.visit("https://htwm623.github.io/");
    cy.get(
      "#app > div.theme-container.no-sidebar.custom-page-class > div > div:nth-child(3) > header > div.links > div.search-box > input"
    ).type(`vue{enter}`);
  });
});
```

2. 在 cypress 图形界面里(最终执行可以不使用图形界面 m'mii),可以看到这个脚本,点击脚本便可以执行

   ![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1621779970256-03c14b32-307e-46b7-bd05-18f96e8f4e8e.png#clientId=u22045363-ed84-4&from=paste&height=293&id=ud96cea19&margin=%5Bobject%20Object%5D&name=image.png&originHeight=293&originWidth=563&originalType=binary∶=1&size=20512&status=done&style=none&taskId=u78754926-8cae-4f0c-a49d-a7076baf6ce&width=563)

## 命令行启动

1. 执行所有测试, 会默认启动 electron 无头浏览器运行用例，运行完会在控制台生成报告

```javascript
npx cypress run
```

2. 指定浏览器 `npx cypress run --browser chrome`
3. 执行指定的 js 脚本 `npx cypress run --spec "cypress/integration/web/testSearch.js"`
4. 通过 cypress.json 文件指定查找规则，例如只执行 web 文件下所有 js 文件

```javascript
{
  "viewportWidth": 1280,
  "viewportHeight": 600,
  "integrationFolder": "cypress/integration/web",
  "testFiles": "**/*.js",
  "chromeWebSecurity": false
}
```

- 其余代码已上传[https://github.com/htwm623/cypress-demo](https://github.com/htwm623/cypress-demo)

## 参考资料

1. [bilibili-惠测-Cypress 框架](https://www.bilibili.com/video/BV1DQ4y1o7GY)
1. [cypress 官方文档](https://docs.cypress.io/guides/getting-started/installing-cypress)
1. [cnblogs-yoyoketang-Cypress web 自动化 22-命令行运行用例](https://www.cnblogs.com/yoyoketang/p/12974805.html)
