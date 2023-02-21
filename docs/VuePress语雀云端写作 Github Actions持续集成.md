---
title: VuePress语雀云端写作 Github Actions持续集成
urlname: svueta
date: '2021-04-14 23:48:54 +0800'
tags:
  - vuepress
  - serverless
  - ci/cd
categories:
  - 技术笔记
---

> 参考 [Hexo：语雀云端写作 Github Actions 持续集成](https://www.zhwei.cn/hexo-github-actions-yuque/)
> 本文只作为自己使用的记录， 原文内容更为详尽
> 本文主要记录部署流程， vuepress 配置不详细列出

- [Github Actions](https://docs.github.com/en/actions/learn-github-actions)是 Github 推出的一款持续集成工具,每月有免费时长
- [语雀](https://www.yuque.com/dashboard)\*\* \*\*支持 markdown 的在线文档知识库， 支持 webhook
- [yuque-hexo](https://github.com/x-cold/yuque-hexo) 同步语雀知识库的云端工具
- serverless faas 云函数，腾讯云和阿里云均有免费额度， 阿里云需要自备域名， 或者可以选择 netlify 或在 codesandbox 创建项目

## 配置 Github Actions 脚本

1. 在项目 github 仓库中， 进入 Actions， 选择自定义配置， 以下为配置文件(更多配置请阅读 Actions 的文档)

```yaml
# This is a basic workflow to help you get started with Actions
name: CI

# Controls when the action will run.
# push 和外部触发
on: [push, repository_dispatch]
# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

        # from: https://github.com/actions/setup-node
      - name: Setup Node.js 12.x
        uses: actions/setup-node@master
        with:
          node-version: "12.x"

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          npm install yuque-hexo -g
          npm install
          npm run yuque
          npm run build
      # from https://github.com/peaceiris/actions-gh-pages
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          # 此处 VUEPRESS_TOKEN为ssh私钥， 在 项目Setting Secrets中配置， 可自行取名
          deploy_key: ${{ secrets.VUEPRESS_TOKEN }}
          # 部署gh-pages的用户及仓库名， 必须为公开库
          external_repository: htwm623/htwm623.github.io
          publish_branch: master
          publish_dir: ./dist
          commit_message: ${{ github.event.head_commit.message }}
```

可提交测试 Actions 是否通畅

## 配置腾讯云函数

```python
import requests

def main_handler(event, context):
    headers = {
        "User-Agent":'curl/7.52.1',
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.everest-preview+json',
        'Authorization': 'token YOUR_PERSONAL_TOKEN' # 注意小写token不要省略
    }
    # https://api.github.com/repos/:owner/repo/dispatches
    r = requests.post("https://api.github.com/repos/htwm623/htwm-vue-blog/dispatches", json={"event_type": "start"}, headers=headers)
    if r.status_code == 204:
        return "This's OK!"
    else:
        return r.status_code

```

测试触发函数, 如果 github actions 正常触发, 再设置云函数触发

- 触发方式：API 网关触发器
- API 服务类型：新建 API 服务
- API 服务：SCF_API_SERVICE
- 请求方法：ANY
- 发布环境：发布
- 鉴权方法：免鉴权
- 启动集成响应：未启用

复制云函数访问链接, 在语雀知识库设置 -> 开发者 设置 web hook

## 附: GitHub Actions push commit 示例

```bash
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the action will run.
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  repository_dispatch:
    branches: [ master ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      # Runs a single command using the runners shell
      - name: Setup Node.js 14.x
        uses: actions/setup-node@master
        with:
          node-version: "14.x"

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          npm i
          npm run yuque
      - name: Deploy
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          time=$(date "+%Y-%m-%d %H:%M:%S")
          git commit -m "commit at $time"
          git push
```

## 附: Actions 中同时拉取多个仓库示例

```yaml
name: CI
on:
  repository_dispatch:
    branches: [master]
  workflow_dispatch:
# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
        with:
          path: main

      # Runs a single command using the runners shell
      - name: Setup Node.js 14.x
        uses: actions/setup-node@master
        with:
          node-version: "14.x"

      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          pwd
          cd main
          npm i
          npm run yuque
          cd ..
      - name: checkout libary
        uses: actions/checkout@v2
        with:
          repository: htwm623/yuque-notes-library
          token: ${{ secrets.YUQUE_NOTES_LIBARY_TOKEN }}
          path: yuque-notes
      - name: Run a multi-line script
        run: |
          rm -rf yuque-notes/yuque-interview
          mkdir yuque-notes/yuque-interview
          cp -rf main/yuque-interview/* yuque-notes/yuque-interview
          cd yuque-notes

          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          time=$(date "+%Y-%m-%d %H:%M:%S")
          git commit -m "commit at $time"
          git push
```
