---
title: 如何批量导入阿里icon
urlname: dg3bg7
date: '2020-10-13 00:46:27 +0800'
categories:
  - 技术笔记
tags:
  - ui
---

# 如何批量导出阿里 icon

原文章来源  [https://www.jianshu.com/p/59dd28f0b9c9](https://www.jianshu.com/p/59dd28f0b9c9)

阿里 icon 素材网站  [https://www.iconfont.cn/](https://www.iconfont.cn/)

## 下载图标

- 如何批量将素材导入购物车 比如在以下页面

![](https://htwm623.github.io/htwm_open_sesame/images/2019-10-28_220857.png#height=748&id=EbFue&originHeight=748&originWidth=1280&originalType=binary∶=1&status=done&style=none&width=1280)
在该页面下调出控制台   在控制台执行如下代码 (亲测:2019 年 10 月 28 日)

```javascript
var icons = document.querySelectorAll(".icon-gouwuche1");

var auto_click = function (i) {
  if (i < icons.length) {
    setTimeout(function () {
      icons.item(i).click();
      auto_click(i + 1);
    }, 600);
  }
};

auto_click(0);
```

则会自动添加代码至购物车 -> 添加至项目 -> 选择 fontclass 然后下载至本地

## 调用图标

1. 将下载的文件全部放入项目的 assert 文件下
2. 在 main.js 中将 iconfont.css 文件引入(个人使用,略过 原文章中修改 iconfont.css )
3. 查看 incofont.css 文件中 font-family 的值,如:

![](https://htwm623.github.io/htwm_open_sesame/images/2019-10-28_233757.png#height=160&id=Yndad&originHeight=160&originWidth=790&originalType=binary∶=1&status=done&style=none&width=790)

红框即为 fontfamily

4. 调用
   class 空格前部分为 fontfamliy 的值 后面一部分可在阿里 icon 项目页面进行复制
   以上

```html
<i class="iconfont icon-bad-fill"></i>
```
