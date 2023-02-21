---
title: VSCode 插件
urlname: lbcea8
date: '2021-05-04 01:02:04 +0800'
tags:
  - vscode
categories:
  - 技术笔记
---

# VS Code 插件

## Windows opacity 透明度插件

- 改变 vscode 透明度，可以在后面放置正在调试的网页界面
- ![screen-1[1].png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620061555579-254d5a2f-9ca9-41af-91bc-592275a6d3ff.png#clientId=ueaa5f38e-7e0a-4&from=ui&id=dIMw8&margin=%5Bobject%20Object%5D&name=screen-1%5B1%5D.png&originHeight=772&originWidth=1024&originalType=binary∶=1&size=356038&status=done&style=none&taskId=u650e1589-42ab-417d-8f27-d9c730a067f)

## Settings Sync 同步配置插件

- 参考博文 [https://juejin.cn/post/6844903843046801416](https://juejin.cn/post/6844903843046801416)
- 常用快捷键， `Alt` + `Shift` + `U` 上传配置， `Alt` + `Shift` + `D` 下载配置

## Auto Rename Tag, Auto Close Tag

- 自动重命名, 自动闭合标签插件
- ![st3.gif](https://cdn.nlark.com/yuque/0/2021/gif/754067/1620397829726-a743d1aa-7e48-4bbe-8837-17cf66088dc0.gif#clientId=u8bb873db-302c-4&from=ui&id=nHiVC&margin=%5Bobject%20Object%5D&name=st3.gif&originHeight=1220&originWidth=1860&originalType=binary∶=1&size=157014&status=done&style=none&taskId=uc9a9106c-1e64-4244-9a2b-240b04c20dc)
- ![usage.gif](https://cdn.nlark.com/yuque/0/2021/gif/754067/1620397855394-fdaa3478-ccb0-4a96-8755-41a376b5c087.gif#clientId=u8bb873db-302c-4&from=ui&height=450&id=sL6dr&margin=%5Bobject%20Object%5D&name=usage.gif&originHeight=938&originWidth=1440&originalType=binary∶=1&size=158502&status=done&style=none&taskId=u691a6a27-7610-40f4-b748-4791786d59d&width=691)

## Prettier 代码格式化

- 默认快捷键 为 `Ctrl` + `Shift` + `E` 可在快捷键设置中修改
- 配置保存文件时自动格式化文件
- ![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620400439114-93161c05-cb32-410e-9df3-c30238f7b8ba.png#clientId=u4c45287b-e2c6-4&from=paste&height=500&id=u572f4fe2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=500&originWidth=1046&originalType=binary∶=1&size=254633&status=done&style=none&taskId=u201b49c8-2567-446f-9a3f-49866ec2134&width=1046)
- 配置代码格式化规则
- ![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620400512433-9cd9e3d2-de09-4a72-9663-d2427f39bf53.png#clientId=u4c45287b-e2c6-4&from=paste&height=544&id=ua7fa6ebb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=544&originWidth=1041&originalType=binary∶=1&size=271475&status=done&style=none&taskId=uaf3935b3-a179-4b0f-854b-b05a3264216&width=1041)
- 注意事项
  - prettier 目前无法格式化 `space-before-function-paren`,
  - 建议在与.eslintrc.js 起冲突时配置 `"space-before-function-paren: 0";`或者设置 eslint 只检查语法,不再次进行格式检查
  - 保存文件时,prettier 没有自动触发的可能是没有选择格式化文件的方式, 可以手动格式化一次,选择默认格式化方式.

## Draw.io Integration 绘图插件

- draw.io 的 vscode 插件
- 优点： 保存源文件可以比较方便储存
- ![draw.io.demo.gif](https://cdn.nlark.com/yuque/0/2021/gif/754067/1620921692018-7cf96eaf-7772-4154-8a79-5d485e95bb8c.gif#clientId=u0dae0131-4b8c-4&from=drop&height=407&id=B7CE9&margin=%5Bobject%20Object%5D&name=draw.io.demo.gif&originHeight=1093&originWidth=1895&originalType=binary∶=1&size=1282804&status=done&style=none&taskId=u5e766c5b-ff9d-49e9-9032-817b1499d01&width=705)

## REST Client

- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- 在编辑器中运行 HTTP 请求
- 代码示例 文件名为 test.http， markdown 没有合适格式高亮

```json
### GET ALL ITEMS
GET http://localhost:5000/items HTTP/1.1

### GET SINGLE ITEM
GET http://localhost:5000/items/1 HTTP/1.1

### ADD ITEM
POST http://localhost:5000/items HTTP/1.1
Content-Type: application/json

{
  "name": "New Item"
}


### DELETE ITEM
DELETE http://localhost:5000/items/3 HTTP/1.1

### UPDATE ITEM
PUT http://localhost:5000/items/1 HTTP/1.1
Content-Type: application/json

{
  "name": "New Name"
}
```

- ![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1624710769219-bd3a496c-b754-47c7-8c3d-31bcf8c3615d.png#clientId=u6e0376f7-448b-4&from=paste&height=687&id=uccdca746&margin=%5Bobject%20Object%5D&name=image.png&originHeight=687&originWidth=1133&originalType=binary∶=1&size=96569&status=done&style=none&taskId=u0ce87b85-b097-4ecb-b801-e675377d20b&width=1133)

## File Utils 用于文件创建移动等功能

- ![](https://github.com/sleistner/vscode-fileutils/raw/master/images/demo.gif#from=url&id=vCShQ&margin=%5Bobject%20Object%5D&originHeight=375&originWidth=640&originalType=binary∶=1&status=done&style=none)
