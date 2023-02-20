---
title: HTML基础
urlname: silpme
date: '2021-06-12 16:17:44 +0800'
tags:
  - html
categories:
  - 技术笔记
---

## HTML 布局元素分类

> 内联元素 如`sapn`, `a`, `b`, `strong`, `i`, `em`, `input`, `textarea`,

1. `display: inline`
1. 和其他行内元素从左到右在一行显示，不可以直接控制宽度，高度和相关的 css 属性
1. 可以直接设置内外边距的左右值
1. 宽高有本身内容的大小决定(文字图片等)
1. 只能容纳文本或其他行内元素，不能嵌套块级元素

​

> 块级元素 如`div`, `h1`, `hr`,`menu`,`ol`, `ul`, `dl`, `table`, `p`, `form`

1. `display:block`
1. 独占一行，每一个块级元素都会从新的一行重新开始，从上到下排布， 可以直接控制宽高
1. 不设宽度的情况下，块级元素的宽度是父元素的宽度
1. 不设高度的情况下，块级元素的高度是自身的高度

​

> 内联块元素

1. `dispaly:inline-block`
1. 不自动换行
1. 能够识别宽高，内外边距

​

## 替换元素和不可替换元素

1. HTML 大多数元素都是不可替换的，即其内容直接展现给浏览器。
1. **替换元素** 就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

例如：

- <img> 根据 src 属性来读取图片信息并显示出来
- <input> 根据标签的 type 属性来决定是显示输入框，还是单选按钮。

替换元素有：`img`、`input`、 `textarea`、`select`、`object`

## HTML 页面渲染流程

1. 浏览器收到响应后将其内容解码成 HTML， 然后将 HTML 渲染成 DOM
1. js 代码加载及渲染都会阻塞页面
1. 从加载时间上看，js 文件放置`head`还是`body`尾部都影响不大，因为加载是并行的(HTTP/1.1 有并行上限)
1. 但 dom 树解析，js 执行和首屏渲染是串行的，js 会阻塞 dom 树解析，最好将 js 文件放置 body 尾部
   > defer 和 async

```javascript
<script async></script>
<script defer></script>
```

`script` 使用这两个属性， js 文件将不会阻塞后续 HTML 文件的解析
不同点:

1. defer 为 html4 定义， async 为 html5 定义
1. defer 为页面加载完成之后， 按照原本的顺序执行，会在 document 的 DOMContentLoaded 之前执行
1. async 在脚本下载完成之后立即执行，同时会在 window 的 load 事件之前执行，可能出现脚本执行顺序问题
1. 两个属性同时出现时 async 优先级高于 defer

`DOMContentLoaded`： HTML 文档被解析完成
`load`: 当所有资源加载完成，包括文档、图片、样式、脚本等资源
相同点:

1. 加载文件时不阻塞页面渲染
1. 对 inline 的 script 无效， 只对外联的 script 有效
1. 使用这两个属性的脚本中不能调用`document.write`方法
1. 有脚本的 onload 事件回调

​

​

## 参考资料

1. [菜鸟教程-HTML 参考手册](https://www.runoob.com/tags/html-reference.html)​
