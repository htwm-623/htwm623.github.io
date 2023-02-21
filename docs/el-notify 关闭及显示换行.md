---
title: el-notify 关闭及显示换行
urlname: cytskp
date: '2021-10-10 22:13:01 +0800'
tags:
  - element
categories:
  - 技术笔记
---

## js 关闭 notify

- `this.$notify()` 会返回 notify 的实例， 如果需要手动关闭实例，可以调用它的`close`方法。

```vue
methods: { open () { this.tmpNotify = this.$notify({ title: '提示', message:
'这是一条不会自动关闭的消息', duration: 0 }); }, close () {
this.tmpNotify.close() } }
```

## notify 显示换行

- 修改 `el-notification` 的 `white-space`属性， 示例如下， 可以尝试其他值

```vue
<style>
.el-notification {
  white-space: pre !important;
}
</style>
```

## 参考资料

[element ui Notification 通知](https://element.eleme.io/#/zh-CN/component/notification)
