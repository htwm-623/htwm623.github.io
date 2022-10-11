(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{546:function(v,_,e){"use strict";e.r(_);var t=e(8),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"html-布局元素分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-布局元素分类"}},[v._v("#")]),v._v(" HTML 布局元素分类")]),v._v(" "),e("blockquote",[e("p",[v._v("内联元素 如"),e("code",[v._v("sapn")]),v._v(", "),e("code",[v._v("a")]),v._v(", "),e("code",[v._v("b")]),v._v(", "),e("code",[v._v("strong")]),v._v(", "),e("code",[v._v("i")]),v._v(", "),e("code",[v._v("em")]),v._v(", "),e("code",[v._v("input")]),v._v(", "),e("code",[v._v("textarea")]),v._v(",")])]),v._v(" "),e("ol",[e("li",[e("code",[v._v("display: inline")])]),v._v(" "),e("li",[v._v("和其他行内元素从左到右在一行显示，不可以直接控制宽度，高度和相关的 css 属性")]),v._v(" "),e("li",[v._v("可以直接设置内外边距的左右值")]),v._v(" "),e("li",[v._v("宽高有本身内容的大小决定(文字图片等)")]),v._v(" "),e("li",[v._v("只能容纳文本或其他行内元素，不能嵌套块级元素")])]),v._v(" "),e("p",[v._v("​")]),v._v(" "),e("blockquote",[e("p",[v._v("块级元素 如"),e("code",[v._v("div")]),v._v(", "),e("code",[v._v("h1")]),v._v(", "),e("code",[v._v("hr")]),v._v(","),e("code",[v._v("menu")]),v._v(","),e("code",[v._v("ol")]),v._v(", "),e("code",[v._v("ul")]),v._v(", "),e("code",[v._v("dl")]),v._v(", "),e("code",[v._v("table")]),v._v(", "),e("code",[v._v("p")]),v._v(", "),e("code",[v._v("form")])])]),v._v(" "),e("ol",[e("li",[e("code",[v._v("display:block")])]),v._v(" "),e("li",[v._v("独占一行，每一个块级元素都会从新的一行重新开始，从上到下排布， 可以直接控制宽高")]),v._v(" "),e("li",[v._v("不设宽度的情况下，块级元素的宽度是父元素的宽度")]),v._v(" "),e("li",[v._v("不设高度的情况下，块级元素的高度是自身的高度")])]),v._v(" "),e("p",[v._v("​")]),v._v(" "),e("blockquote",[e("p",[v._v("内联块元素")])]),v._v(" "),e("ol",[e("li",[e("code",[v._v("dispaly:inline-block")])]),v._v(" "),e("li",[v._v("不自动换行")]),v._v(" "),e("li",[v._v("能够识别宽高，内外边距")])]),v._v(" "),e("p",[v._v("​")]),v._v(" "),e("h2",{attrs:{id:"替换元素和不可替换元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替换元素和不可替换元素"}},[v._v("#")]),v._v(" 替换元素和不可替换元素")]),v._v(" "),e("ol",[e("li",[v._v("HTML 大多数元素都是不可替换的，即其内容直接展现给浏览器。")]),v._v(" "),e("li",[e("strong",[v._v("替换元素")]),v._v(" 就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。")])]),v._v(" "),e("p",[v._v("例如：")]),v._v(" "),e("ul",[e("li",[e("img"),v._v(" 根据 src 属性来读取图片信息并显示出来")]),v._v(" "),e("li",[e("input"),v._v(" 根据标签的 type 属性来决定是显示输入框，还是单选按钮。")])]),v._v(" "),e("p",[v._v("替换元素有："),e("code",[v._v("img")]),v._v("、"),e("code",[v._v("input")]),v._v("、 "),e("code",[v._v("textarea")]),v._v("、"),e("code",[v._v("select")]),v._v("、"),e("code",[v._v("object")])]),v._v(" "),e("h2",{attrs:{id:"html-页面渲染流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-页面渲染流程"}},[v._v("#")]),v._v(" HTML 页面渲染流程")]),v._v(" "),e("ol",[e("li",[v._v("浏览器收到响应后将其内容解码成 HTML， 然后将 HTML 渲染成 DOM")]),v._v(" "),e("li",[v._v("js 代码加载及渲染都会阻塞页面")]),v._v(" "),e("li",[v._v("从加载时间上看，js 文件放置"),e("code",[v._v("head")]),v._v("还是"),e("code",[v._v("body")]),v._v("尾部都影响不大，因为加载是并行的(HTTP/1.1 有并行上限)")]),v._v(" "),e("li",[v._v("但 dom 树解析，js 执行和首屏渲染是串行的，js 会阻塞 dom 树解析，最好将 js 文件放置 body 尾部\n"),e("blockquote",[e("p",[v._v("defer 和 async")])])])]),v._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("script async"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("script defer"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])]),e("p",[e("code",[v._v("script")]),v._v(" 使用这两个属性， js 文件将不会阻塞后续 HTML 文件的解析\n不同点:")]),v._v(" "),e("ol",[e("li",[v._v("defer 为 html4 定义， async 为 html5 定义")]),v._v(" "),e("li",[v._v("defer 为页面加载完成之后， 按照原本的顺序执行，会在 document 的 DOMContentLoaded 之前执行")]),v._v(" "),e("li",[v._v("async 在脚本下载完成之后立即执行，同时会在 window 的 load 事件之前执行，可能出现脚本执行顺序问题")]),v._v(" "),e("li",[v._v("两个属性同时出现时 async 优先级高于 defer")])]),v._v(" "),e("p",[e("code",[v._v("DOMContentLoaded")]),v._v("： HTML 文档被解析完成\n"),e("code",[v._v("load")]),v._v(": 当所有资源加载完成，包括文档、图片、样式、脚本等资源\n相同点:")]),v._v(" "),e("ol",[e("li",[v._v("加载文件时不阻塞页面渲染")]),v._v(" "),e("li",[v._v("对 inline 的 script 无效， 只对外联的 script 有效")]),v._v(" "),e("li",[v._v("使用这两个属性的脚本中不能调用"),e("code",[v._v("document.write")]),v._v("方法")]),v._v(" "),e("li",[v._v("有脚本的 onload 事件回调")])]),v._v(" "),e("p",[v._v("​")]),v._v(" "),e("p",[v._v("​")]),v._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://www.runoob.com/tags/html-reference.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("菜鸟教程-HTML 参考手册"),e("OutboundLink")],1),v._v("​")])])])}),[],!1,null,null,null);_.default=o.exports}}]);