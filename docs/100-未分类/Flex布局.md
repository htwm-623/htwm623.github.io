---
title: Flex布局
urlname: hsbymr
date: '2021-06-16 07:42:18 +0800'
tags:
  - css
categories:
  - 技术笔记
---

## 一、概述

1. flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性
1. 任何容器都可以指定为 flex 布局 `display: flex;`
1. 行内元素也可以使用 flex 布局 `display: inline-flex;`
1. `webkit`内核的浏览器, 必须加上 `-webkit` 前缀 `display: -webkit-flex;`
1. 设置 flex 布局之后, 子元素`float`, `clear`, `vertical-align` 属性将会失效

![](https://cdn.nlark.com/yuque/0/2021/png/754067/1623858341366-11cb749e-9f21-4520-aa71-c3d5915d52c2.png#clientId=ubc70f549-7a9f-4&from=paste&id=u7a5ded6c&margin=%5Bobject%20Object%5D&originHeight=333&originWidth=563&originalType=url∶=1&status=done&style=none&taskId=uc1ddd584-0234-42d4-8e5a-0ab9fcd854a)
图片来自 [flex 布局教程 | 阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

## 二、容器属性

### 1. flex-direction

决定主轴方向

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。

### 2. flex-warp

决定是否换行

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

### 3. flex-flow

`flex-flow`属性 是`flex-direction` 和 `flew-warp` 的简写形式, 默认值为 `row nowarp`
​

### 4. justify-content

决定元素在主轴上的对齐方式

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### 5. align-items

决定子元素在交叉轴如何对齐

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

### 6. align-content

定义多根轴线的对齐方式, 如果子元素只有一根轴线,该属性不起作用

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

### 三、子元素属性

### 1. order

属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0

```css
.item {
  order: <integer>;
}
```

### 2. flex-grow

定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

### 3. flex-shrink

属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

### 4. flex-basis

定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

可以设置为和 `width` `height`属性一样的值
​

### 5. flex

`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写

```css
.item {
  flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

### 6. align-self

允许单个元素与其他元素不一样的对齐方式, 可以覆盖`align-items`,默认为`auto`,标识继承父元素`align-items`, 如果没有父元素, 则等同于`stretch`​

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

​

## 参考资料

1. [flex 布局教程 | 阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
1. [CSS 弹性盒子 | fcc ](https://chinese.freecodecamp.org/learn/responsive-web-design/#responsive-web-design-principles)​
