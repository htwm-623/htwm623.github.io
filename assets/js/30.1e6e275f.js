(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{557:function(t,r,e){"use strict";e.r(r);var a=e(8),n=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"浏览器渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[t._v("#")]),t._v(" 浏览器渲染过程")]),t._v(" "),e("ol",[e("li",[t._v("解析 html 文件， 创建 dom 树")]),t._v(" "),e("li",[t._v("解析 css 文件， 创建 cssdom 树")]),t._v(" "),e("li",[t._v("结合 DOM 树和 CSSOM 树，生成一棵渲染树(Render Tree)")]),t._v(" "),e("li",[t._v("生成布局（flow），即将所有渲染树的所有节点进行平面合成")]),t._v(" "),e("li",[t._v("将布局绘制（paint）在屏幕上")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/754067/1626186720619-388cd1a5-70ff-4c94-938b-08f0d94734fe.png#clientId=u4a1fcfd9-af03-4&from=paste&id=u0a20f57b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=314&originWidth=651&originalType=url%E2%88%B6=1&size=143182&status=done&style=none&taskId=u04ed7fac-966e-40af-8538-9ac0b4f88d3",alt:"image.png"}})]),t._v(" "),e("p",[t._v("(整段话 来源"),e("a",{attrs:{href:"https://juejin.cn/post/6844903745914929165",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.cn/post/6844903745914929165"),e("OutboundLink")],1),t._v(")\n​")]),t._v(" "),e("h2",{attrs:{id:"回流-reflow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow"}},[t._v("#")]),t._v(" 回流(reflow)")]),t._v(" "),e("p",[t._v("当"),e("code",[t._v("Render Tree")]),t._v("中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。\n会导致回流的操作：")]),t._v(" "),e("ul",[e("li",[t._v("添加或删除可见的 DOM 元素")]),t._v(" "),e("li",[t._v("元素的位置发生变化")]),t._v(" "),e("li",[t._v("元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）")]),t._v(" "),e("li",[t._v("内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。")]),t._v(" "),e("li",[t._v("页面一开始渲染的时候（这肯定避免不了）")]),t._v(" "),e("li",[t._v("浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）")])]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("h2",{attrs:{id:"重绘-repaint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重绘-repaint"}},[t._v("#")]),t._v(" 重绘 (Repaint)")]),t._v(" "),e("p",[t._v("当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。\n"),e("strong",[t._v("回流必将引起重绘，重绘不一定会引起回流。")]),t._v(" "),e("strong",[t._v("​")])]),t._v(" "),e("h2",{attrs:{id:"优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),e("ol",[e("li",[t._v("减少 dom 修改次数 (参考 JavaScript 事件循环)")]),t._v(" "),e("li",[t._v("使需要经常重绘重排的元素脱离文档流 如绝对定位，固定定位")]),t._v(" "),e("li",[t._v("css3 硬件加速，使用 css3 硬件加速，可以让 transform、opacity、filters 这些动画不会引起回流重绘 。但是对于动画的其它属性，比如 background-color 这些，还是会引起回流重绘的，不过它还是可以提升这些动画的性能。")])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844903569087266823",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器的回流与重绘 (Reflow & Repaint)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000017329980",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的了解回流和重绘吗"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6844903745914929165",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器重绘(repaint)重排(reflow)与优化"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2010/01/%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98%EF%BC%9Acss%E6%80%A7%E8%83%BD%E8%AE%A9javascript%E5%8F%98%E6%85%A2%EF%BC%9F/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 性能让 JavaScript 变慢？"),e("OutboundLink")],1),t._v("​")])])])}),[],!1,null,null,null);r.default=n.exports}}]);