---
title: JavaScript事件循环
urlname: ylwkzy
date: '2021-04-13 01:01:11 +0800'
tags:
  - javascript
categories:
  - 技术笔记
---

# Marp 代码

```markdown
---
marp: true
size: 16:9
theme: uncover
paginate: true
_paginate: false
#header: Javascript事件循环
#https://www.youtube.com/watch?v=8aGhZQkoFbQ
---

<style>
section {
  color: #135;
  background-color: #cfe;
  background-image: url('https://cdn.jsdelivr.net/gh/htwm623/static//image/gradient.jpg')
}
</style>

# Javascript 事件循环

---

### 浏览器的多进程

每打开一个 Tab 页, 就相当于创建了一个独立的浏览器进程
简单的理解为渲染进程(Render);Render 进程包括

1. GUI 渲染进程
2. JS 引擎线程
3. 事件触发线程
4. 定时器触发线程(setTimeOut set)
5. 异步 http 请求线程

---

### Javascript 的单线程

- Javascript 引擎中负责解释和执行 Javascript 代码的线程唯一,同一时间只能执行一件任务
- Javascript 的单线程设计是为了避免 DOM 渲染的冲突
- (为了利用多核 CPU 的计算能力, HTML5 提出 Web Worker 标准, 允许 JavaScript 脚本创建多个线程,但是子线程完全受主线程控制,且不得操作 DOM,所以,认为这个新标准并没有改变 Javascript 单线程的本质)

---

### 下文中所谓的单线程均指主线程的单线程

---

### Javascript 的事件循环

- 事件循环 是让 JavaScript 做到既是单线程，又绝对不会阻塞的核心机制，也是 JavaScript 并发模的基础，是用来协调各种事件、用户交互、脚本执行、UI 渲染、网络请求等的一种机制。

- 简单说， 事件循环是实现异步的一种机制

---

### 事件循环

![70%](https://cdn.jsdelivr.net/gh/htwm623/static//image/16ef93a7ffa5b4d2.jpg)

---

### 宏任务和微任务

1. Task(宏任务) (除了微任务的两个, 基本都是宏任务)
   a. DOM manipulation(DOM 操作)
   b. User interaction(用户交互)
   c. Networking(网络请求)
   d. History traversal(History API 操作)。

2. MicroTask(微任务)
   a. Promise
   b. MutationObserver

---

### 任务队列

1. Task Queue
   一个 Event Loop 会有一个或多个 Task Queue
   同源 task 只能放在同一个队列(比如键盘事件，都会存放在同一队列)
   不同源的 task 可以不放在同一个队列(比如同时按下键盘鼠标,http 请求等, 浏览器调度)
2. Microtask Queue
   一个 Event Loop 只有一个 Microtask Queue

---

![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/task.gif)

---

![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/microtasks.gif)

---

![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/event_loop1.gif)

---

![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/2021-04-12_004444.png)

---

#### Tasks

- 每次执行一个，增加的排在队列后面

#### Microtasks

- 一直执行， 直到队列清空

---

### 参考资料

<style scoped>a { color: #000; }</style>

- https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=1592s

- https://juejin.cn/post/6844904198195118093

- https://www.jianshu.com/p/593fe41365e1

- https://codesandbox.io/s/event-loop-demo-3026x

---

# 谢谢！

---

#### GUI 渲染线程:

- 负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。

- 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
- 注意，GUI 渲染线程与 JS 引擎线程是互斥的，当 JS 引擎执行时 GUI 线程会被挂起（相当于被冻结了），GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行。

---

#### JS 引擎线程

- 也称为 JS 内核，负责处理 Javascript 脚本程序。（例如 V8 引擎）
- JS 引擎线程负责解析 Javascript 脚本，运行代码。
- JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序
- 同样注意，GUI 渲染线程与 JS 引擎线程是互斥的，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。

---

#### 事件触发线程

- 归属于浏览器而不是 JS 引擎，用来控制事件循环（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）
- 当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中
- 当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理
- 注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）

---

#### 定时触发器线程

- setInterval 与 setTimeout 所在线程
- 浏览器定时计数器并不是由 JavaScript 引擎计数的,（因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）
- 因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待 JS 引擎空闲后执行）
- 注意，W3C 在 HTML 标准中规定，规定要求:
  ** setTimeOut 中低于 4ms 认为 4ms **

---

#### 异步 http 请求线程

- 在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求
- 将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。

---

![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/animation.gif)

---

JavaScript Runtime 的运行机制

1. 主线程不断循环；

2. 对于同步任务，创建执行上下文 ，按顺序进入执行栈 ；

3. 对于异步任务：
   与步骤 2 相同，同步执行这段代码；
   将相应的 Task（或 Microtask）添加到 Event Loop 的任务队列；
   由其他线程来执行具体的异步操作。

---

![](https://cdn.jsdelivr.net/gh/htwm623/static//image/2021-04-12_004444.png)

---

### 计划使用示例

1. 事件循环 阻塞主线程

- https://codesandbox.io/s/event-loop-demo-3026x?file=/while-true-test.html

2. 执行栈讲解

- https://codesandbox.io/s/event-loop-demo-3026x?file=/throw-error.html

3. 任务队列执行顺序

- https://codesandbox.io/s/event-loop-demo-3026x?file=/set-timeout-zero.html

4. 手动触发和 js 触发的区别

- https://codesandbox.io/s/event-loop-demo-3026x?file=/click-and-auto-click.html
```

- 示例 slide 链接 [https://htwm623.github.io/htwm-open-sesame/slides/JavaScript-Event-Loop/](https://htwm623.github.io/htwm-open-sesame/slides/JavaScript-Event-Loop/)
