---
title: VuePress博客搭建
urlname: be1vag
date: '2021-02-22 22:05:40 +0800'
tags:
  - vuepress
  - vue
categories:
  - 技术笔记
---

# 初始化

> 因为 reco 主题和自定义页面分类有 bug, 会造成自定义页面名称出现乱码
> 所以使用 reco-cli 进行项目初始化

##

## 1.初始化项目

1. 安装相关依赖

```bash
# 初始化空项目
npm init -y

# 安装vuepress
npm i vuepress

# 安装vuepress-theme-reco
npm i vuepress-theme-reco

```

2. 修改 package.json
   - 在 package.json 中添加执行脚本
   -

## 3. 个性化改造

1. 首页更换图片及添加向下图标(文件位置为入口 README.md 直接插入如下代码即可,全屏图片样式不在这)

```vue
<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  80% {
    transform: translateY(0);
  }
  to {
    transform: translateY(0);
  }
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted() {
    const ifJanchor = document.getElementById("JanchorDown");
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement("a");
    a.id = "JanchorDown";
    a.className = "anchor-down";
    document.getElementsByClassName("hero")[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener("click", (e) => {
      // 添加点击事件
      this.scrollFn();
    });
    let paperElement = document.querySelector(".home-blog .hero");
    let paperIndex = Math.floor(Math.random() * 10);
    const paperUrl = `https://cdn.jsdelivr.net/gh/htwm623/htwm_open_sesame@master/data/image/vuepress/bg/bg${paperIndex}.jpg`;
    paperElement.style.backgroundImage = `url(${paperUrl}`;
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName("hero")[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    },
  },
};
</script>
```

# 参考连接

- [官方文档](https://vuepress.vuejs.org/)
- [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/)
- [午后南杂](https://www.recoluan.com/)
