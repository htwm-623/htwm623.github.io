---
title: HTML5语义元素
urlname: pg0uw1
date: '2021-06-12 16:30:33 +0800'
tags:
  - html
categories:
  - 技术笔记
---

## 一、什么是语义元素

- 在 HTML 书写过程中，更具不同内容使用合适的标签进行开发，即为语义化
- 能向浏览器和开发者描述其意义的元素为语义元素， 如`form`，`table`等

## 二、语义化的优点

- 易修改、易维护
- 无障碍阅读支持
- 搜索引擎良好，利于 SEO
- 面向未来的 HTML，浏览器在未来可能提供更丰富的支持
​

## 三、HTML5 新增语义元素

- [article](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article)
- [aside](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside)
- [details](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details)
- [figcaption](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption)
- [figure](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure)
- [footer](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer)
- [header](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header)
- [main](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main)
- [mark](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/mark)
- [nav](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav)
- [section](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section)
- [summary](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/summary)
- [time](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time)

​

## 四、如何进行语义化

1. 根据网站不同部位， 使用`header nav article section footer aside`等标签
1. 表现元素的的作用或意义的标签: `a abbr address audio blockquote caption code datalist del detail ol ul figure figuration img input mark p`等

在编写代码时:

1. 尽可能少的使用无语义的标签 div 和 span
1. 在语义不明显时，既可以使用 div 或者 p 时，尽量用 p, 因为 p 在默认情况下有上下间距，对兼容特殊终端有利
1. 不要使用纯样式标签，如：b、font、u 等，改用 css 设置
1. 需要强调的文本，可以包含在 strong 或者 em 标签中(浏览器预设样式，能用 CSS 指定就不用他们)，strong 默认样式是加粗(不要用 b)，em 是斜体(不用 i)
1. 使用表格时，标题要用 caption，表头用 thead，主体部分用 tbody 包围，尾部用 tfoot 包围。表头和一般单元格要区分开，表头用 th，单元格用 td
1. 表单域要用 fieldset 标签包起来，并用 legend 标签说明表单的用途
1. 每个 input 标签对应的说明文本都需要使用 label 标签，并且通过为 input 设置 id 属性，在 lable 标签中设置 for=someld 来让说明文本和相对应的 input 关联起来

​

## 参考资料

1. [菜鸟教程-语义元素](https://www.runoob.com/html/html5-semantic-elements.html)
1. [维基百科-搜索引擎最佳化](https://zh.wikipedia.org/wiki/%E6%90%9C%E5%B0%8B%E5%BC%95%E6%93%8E%E6%9C%80%E4%BD%B3%E5%8C%96)​
