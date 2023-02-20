---
title: 使用marp制作ppt
urlname: qbxmrk
date: '2021-03-07 23:47:21 +0800'
tags:
  - other
categories:
  - 技术笔记
---

最后导出的格式实际上为图片, 不利于二次编辑请注意

# 官网

[https://marp.app/](https://marp.app/)

# 插件

vscode 搜索 marp for vs code 安装

# 使用流程

插入对应代码即可(点击右上角双三角可以快速插入快捷标识)

1. 头部标识及配置

```
---
marp: true  // 标识
size: 16:9  // 页面比例
theme: uncover // 主题
paginate: true  // 显示页码
header: "marp示例"  // 页眉
footer: "by Paradox"  // 页脚
---
```

2. 新建页面 输入三个 -

# 修改 CSS

css 前面有下划线的为修改当前页面, 没有下划线的为修改全局页面
在单页中输入以下内容

```
<!--
_backgroundColor: black
_color: white
-->
```

# 插入代码

插入代码和正常 markdown 一致

# 插入图片

插入图片和正常 markdown 一致
图片展示语法参考 [https://marpit.marp.app/image-syntax](https://marpit.marp.app/image-syntax)

# 导出方式

f1 搜索执行 marp 的命令

# 完整示例

````
---
marp: true
size: 16:9
theme: uncover
paginate: true
header: "marp示例"
footer: "by Paradox"
---

Marp入门示例
===


---

# 官网
https://marp.app/

---
<!--
_backgroundColor: black
_color: white
-->

# 知识点
- 项目1
- 项目2
- 项目3


---
# 代码展示

```javascript
 <script type="text/babel">
    function Person (props) {
      return (
        <ul>
          <li>name: {props.name}</li>
          <li>age: {props.age}</li>
          <li>sex: {props.sex}</li>
        </ul>
      )
    }
    const p = {name: 'xiaoming', age: 13, sex: 'female'}
    ReactDOM.render(<Person {...p}/>, document.getElementById('test'))
    console.log('http://www.baidu.com')
  </script>
````

---

# 图片展示

![bg](https://htwm623.github.io/bg/bg3.jpg)

```

```
