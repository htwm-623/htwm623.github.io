---
title: CSS基础
urlname: mbzbwc
date: '2021-06-06 17:14:54 +0800'
tags:
  - css
categories:
  - 技术笔记
---

## 引入谷歌字体

- [google 字体库](https://fonts.google.com/)
- 使用`link`标签引入 google 字体

```html
<link
  href="https://fonts.googleapis.com/css?family=Lobster"
  rel="stylesheet"
  type="text/css"
/>
```

- 在`font-family`使用字体

```css
body {
  font-family: Lobster;
}
```

## CSS 自定义变量

1.  自建变量

```css

```

--pengui-skin: gray;

```

```

2.  调用变量

```css
background: var(--penguin-skin);
```

3.  css 变量备用值

```css
background: var(--penguin-skin, black);
```

## 使用媒体查询更改变量

```css
<style > :root {
  --penguin-size: 300px;
  --penguin-skin: gray;
  --penguin-belly: white;
  --penguin-beak: orange;
}

@media (max-width: 350px) {
  :root {
    --penguin-size: 200px;
    --penguin-skin: black;
  }
}
```

## box-shadow

1. box-shadow 属性用来给元素添加阴影，该属性值是由逗号分隔的一个或多个阴影列表。
1. box-shadow 属性的阴影依次由下面这些值描述：
   1. offset-x 阴影的水平偏移量；
   1. offset-y 阴影的垂直偏移量；
   1. blur-radius 模糊半径；
   1. spread-radius 阴影扩展半径；
   1. color

​

## CSS 线性渐变

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

## CSS 动画

```css
.heart {
  animation-iteration-count: infinite;
  animation-name: beat;
  animation-duration: 1s;
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(0.6) rotate(-45deg);
  }
}
```
