const fs = require('fs')
const path = require('path')
const moment = require('moment')

const fileName = process.argv.slice(2)[0]
if (!fileName) {
  console.log('请输入文件名')
  process.exit(0)
}
const baseDir = './docs/notes'

const filePath = path.join(baseDir, `${fileName}.md`)

const currentTimeStr = moment().format('YYYY-MM-DD HH:mm:ss')

if (fs.existsSync(filePath)) {
  console.log(`文件： ${filePath}已经存在`)
  process.exit(0)
}

const template = `---
title: ${fileName}
urlname: qt2t3w
date: '${currentTimeStr} +0800'
tags:
categories:
sidebar: true
publish: false
---
`
try {
  fs.writeFileSync(filePath, template)
  console.log(`文件创建成功 ${filePath}`)
} catch (err) {
  console.log(err)
}

