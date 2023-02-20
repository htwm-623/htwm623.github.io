---
title: el-tree修改子节点为单选
urlname: frhlcn
date: '2021-04-21 02:16:09 +0800'
tags:
  - element
  - vue
categories:
  - 技术笔记
---

# el-tree 修改子节点为单选

> 前提， 此处只修改了目录层级为二级的节点， 如需适配其他层级需修改使用

效果如下：
![Video_2021-04-21_021915.gif](https://cdn.nlark.com/yuque/0/2021/gif/754067/1618942815840-3101786d-8c7d-4633-8f69-2f3f11e9e8cc.gif#clientId=ub982c61a-2ab4-4&from=drop&id=ubc1379ca&margin=%5Bobject%20Object%5D&name=Video_2021-04-21_021915.gif&originHeight=196&originWidth=252&originalType=binary∶=1&size=390636&status=done&style=none&taskId=u7ce29d1f-9638-4751-8e20-e8f35f7c56c)
代码如下：

```vue
<template>
  <div>
    <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      ref="tree"
      check-strictly
      :highlight-current="true"
      :check-on-click-node="true"
      :props="defaultProps"
      :default-expand-all="true"
      @check="handleCheckChange"
    >
    </el-tree>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      treeData: [
        {
          id: "ocr",
          label: "ocr手写",
          disabled: true,
          children: [
            {
              id: "ocr-v1",
              label: "v1",
            },
            {
              id: "ocr-v2",
              label: "v2",
            },
          ],
        },
        {
          id: "farming",
          label: "构图",
          disabled: true,
          children: [
            {
              id: "farming-v1",
              label: "v1",
            },
            {
              id: "farming-v2",
              label: "v2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
        id: "id",
      },
    };
  },
  methods: {
    handleCheckChange(data, checkedObj) {
      const currentNode = this.$refs.tree.getNode(data);
      const currentNodeId = data.id;
      let checkedKeys = this.$refs.tree.getCheckedKeys();
      const parentNode = currentNode.parent;
      const parentId = parentNode.data.id;
      const isCheck = checkedKeys.indexOf(currentNodeId) === -1 ? false : true;
      if (isCheck) {
        checkedKeys.indexOf(parentId) === -1 ? checkedKeys.push(parentId) : "";
        // remove sibling node
        for (const sameLevelNode of parentNode.data.children) {
          const index = checkedKeys.indexOf(sameLevelNode.id);
          if (index !== -1 && sameLevelNode.id !== currentNodeId) {
            checkedKeys.splice(index, 1);
          }
        }
      } else {
        let parentIndex = checkedKeys.indexOf(parentId);
        console.log(parentIndex);
        parentIndex !== -1 ? checkedKeys.splice(parentIndex, 1) : "";
      }
      console.log(checkedKeys);
      this.$refs.tree.setCheckedKeys(checkedKeys);
    },
  },
};
</script>
```

本次调试时间为 2021 年 4 月 21 日
环境

```javascript
  "dependencies": {
    "core-js": "^3.6.5",
    "element-ui": "^2.15.1",
    "vue": "^2.6.11",
    "vue-router": "^3.2.0",
    "vuex": "^3.4.0"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-plugin-router": "~4.5.0",
    "@vue/cli-plugin-vuex": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "@vue/eslint-config-standard": "^5.1.2",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.0",
    "eslint-plugin-vue": "^6.2.2",
    "vue-template-compiler": "^2.6.11"
  }
```
