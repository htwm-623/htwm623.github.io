---
title: el-upload上传参数及解析
urlname: hsnrrl
date: '2021-05-10 22:45:09 +0800'
tags:
  - javascript
  - element
categories:
  - 技术笔记
---

## 环境描述

- element-ui 2.15.1

## el-upload

- el-upload 附带 data 参数类型 为 form-data forform-datam-data

```javascript
<el-upload
  class="avatar-uploader"
  action="http://127.0.0.1:8000/api/upload/"
  :show-file-list="false"
  :data='uploadData'>
  <i class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<script>
export default {
  data () {
    return {
      uploadData: {
        title: '测试'
      }
    }
  }
}
</script>
```

## django 解析

```javascript
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile


def upload_file(request):
		file_obj = request.FILES.get('file')
    print(dir(file_obj))
    default_storage.save('123.txt', ContentFile(file_obj.read()))
    print(request.POST.get('title'))
```

## 记一次 el-upload bug

- before-upload 中修改 data 参数，并未生效
- 完整代码如下

```javascript
<template>
  <div class="home p-2">
    <el-upload
      class="avatar-uploader"
      action="http://127.0.0.1:8000/api/upload/"
      :show-file-list="false"
      :data='uploadData'
      :before-upload="beforeUpload">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      uploadData: {
        title: '测试'
      }
    }
  },
  methods: {
    beforeUpload () {
      this.uploadData = {
        title: '测试01',
        message: '测试02'
      }
    }
  }
}
</script>

```

- 但在初次提交时， 上传表单如下
- ![image.png](https://cdn.nlark.com/yuque/0/2021/png/754067/1620658663279-ca9cd094-2d08-4d9e-ac8c-16dba9e30d71.png#clientId=u957b7270-316e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=106&id=ud6ef0080&margin=%5Bobject%20Object%5D&name=image.png&originHeight=106&originWidth=401&originalType=binary∶=1&rotation=0&showTitle=false&size=5671&status=done&style=none&taskId=uc4b4dbfe-bfc6-486b-a01b-d83ffc6d6de&title=&width=401)
- 说明在 beforeUpload 中队 uploadData 的修改，并未在表单提交前生效

## 文件伴随表单一起上传

1. 使用`http-request` 属性覆盖默认上传动作

```html
<el-upload
  class="upload-demo"
  drag
  action
  :limit="1"
  :http-request="httpRequest"
  multiple
>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">
    只能上传jpg/png文件，且不超过500kb
  </div>
</el-upload>
```

2. 在 js 中将文件保存至列表
3. 提交表单时使用`FormData`格式将文件传入

```javascript
export default {
  data() {
    return {
      formData: {
        name: "xiaoming",
        age: 16,
      },
      fileList: [],
    };
  },
  methods: {
    httpRequest(option) {
      console.log("upload file");
      this.fileList.push(option);
    },
    onSubmit() {
      const { name, age } = this.formData;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("age", age);
      formData.append("file", this.fileList[0].file);
      this.axios
        .post("http://localhost:8080/local/file/server/", formData)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
```
