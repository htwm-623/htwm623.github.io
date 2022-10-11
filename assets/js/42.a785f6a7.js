(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{566:function(t,e,a){"use strict";a.r(e);var i=a(8),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http1-1-的性能瓶颈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http1-1-的性能瓶颈"}},[t._v("#")]),t._v(" HTTP1.1 的性能瓶颈")]),t._v(" "),a("p",[t._v("早期版本的 HTTP 协议的设计初衷主要是实现要简单")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/1.x 客户端需要使用多个连接才能实现并发和缩短延迟")]),t._v(" "),a("li",[t._v("HTTP/1.x 不会压缩请求和响应标头，从而导致不必要的网络流量")]),t._v(" "),a("li",[t._v("HTTP/1.0 每一个 http 请求都需要三次握手，所以性能瓶颈在于 tcp 协议本身， 连接单次使用和网络拥塞状况")]),t._v(" "),a("li",[t._v("HTTP/1.1 连接复用，和已了解网络拥塞状况，但一条 tcp 连接下是串行的")]),t._v(" "),a("li",[t._v("HTTP/1.1 提出 pipelining 并发模型, 但存在首行阻塞的问题, 所以浏览器并没有开启这个功能")])]),t._v(" "),a("p",[a("strong",[t._v("HTTP/2 仍是对之前 HTTP 标准的扩展，而非替代")])]),t._v(" "),a("h2",{attrs:{id:"http-2-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-2-特点"}},[t._v("#")]),t._v(" HTTP/2 特点")]),t._v(" "),a("h3",{attrs:{id:"改善并发限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改善并发限制"}},[t._v("#")]),t._v(" 改善并发限制")]),t._v(" "),a("ul",[a("li",[t._v("改善一个 tab 页一个域下并发连接上限(http/1.1 chrome 下并发连接为 6 条)")])]),t._v(" "),a("h3",{attrs:{id:"二进制分帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[t._v("#")]),t._v(" 二进制分帧")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/754067/1626706533852-672d70d4-f01e-43a8-b560-5591702fb2cd.png#clientId=u68d6b510-8f77-4&from=paste&height=436&id=u4aa1cc1e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=436&originWidth=854&originalType=binary%E2%88%B6=1&size=42159&status=done&style=none&taskId=u445a370e-e730-4176-807d-36e61755e22&width=854",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"数据流、消息和帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据流、消息和帧"}},[t._v("#")]),t._v(" 数据流、消息和帧")]),t._v(" "),a("ul",[a("li",[t._v("数据流(Stream): 已建立的连接内的双向字节流，可以承载一条或多条消息。")]),t._v(" "),a("li",[t._v("消息(message): 与逻辑请求或响应消息对应的完整的一系列帧。")]),t._v(" "),a("li",[t._v("帧(frame): HTTP/2 通信的最小单位，每个帧都包含帧头，至少也会标识出当前帧所属的数据流。")])]),t._v(" "),a("p",[t._v("这些概念的关系总结如下:")]),t._v(" "),a("ul",[a("li",[t._v("所有通信都在一个 TCP 连接上完成，此连接可以承载任意数量的双向数据流。")]),t._v(" "),a("li",[t._v("每个数据流都有一个唯一的标识符和可选的优先级信息，用于承载双向消息。")]),t._v(" "),a("li",[t._v("每条消息都是一条逻辑 HTTP 消息（例如请求或响应），包含一个或多个帧。")]),t._v(" "),a("li",[t._v("帧是最小的通信单位，承载着特定类型的数据，例如 HTTP 标头、消息负载等等。 来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/754067/1626706720590-e40c80b7-2110-48d7-acd8-188ef8bda902.png#clientId=u68d6b510-8f77-4&from=paste&height=707&id=u2a802637&margin=%5Bobject%20Object%5D&name=image.png&originHeight=707&originWidth=896&originalType=binary%E2%88%B6=1&size=64490&status=done&style=none&taskId=u6e4d9b11-f6a9-478b-95d6-946a917141f&width=896",alt:"image.png"}})])]),t._v(" "),a("p",[a("strong",[t._v("一个连接可以跑多个 Stream")])]),t._v(" "),a("h3",{attrs:{id:"请求与响应复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求与响应复用"}},[t._v("#")]),t._v(" 请求与响应复用")]),t._v(" "),a("ul",[a("li",[t._v("HTTP/1.1 并发模型 pipelining 存在首行阻塞问题，浏览器默认不启用")]),t._v(" "),a("li",[t._v("HTTP/2 二进制分帧层，客户端和服务器可以将 HTTP 消息分解为互不依赖的帧，然后交错发送，最后再在另一端把它们重新组装起来")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/754067/1626706894098-f3c9f0d3-e88e-4a9f-b255-927feb6ee19a.png#clientId=u68d6b510-8f77-4&from=paste&height=249&id=u39ee310f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=249&originWidth=876&originalType=binary%E2%88%B6=1&size=31671&status=done&style=none&taskId=ucf501a29-5875-482b-8c5a-78e92ecb660&width=876",alt:"image.png"}}),t._v("\n将 HTTP 消息分解为独立的帧，交错发送，然后在另一端重新组装是 HTTP 2 最重要的一项增强。事实上，这个机制会在整个网络技术栈中引发一系列连锁反应，从而带来巨大的性能提升，让我们可以:")]),t._v(" "),a("ul",[a("li",[t._v("并行交错地发送多个请求，请求之间互不影响。")]),t._v(" "),a("li",[t._v("并行交错地发送多个响应，响应之间互不干扰。")]),t._v(" "),a("li",[t._v("使用一个连接并行发送多个请求和响应。")]),t._v(" "),a("li",[t._v("不必再为绕过 HTTP/1.x 限制而做很多工作（请参阅"),a("a",{attrs:{href:"https://hpbn.co/optimizing-application-delivery/#optimizing-for-http1x",target:"_blank",rel:"noopener noreferrer"}},[t._v("针对 HTTP/1.x 进行优化"),a("OutboundLink")],1),t._v("，例如级联文件、image sprites 和域名分片。")]),t._v(" "),a("li",[t._v("消除不必要的延迟和提高现有网络容量的利用率，从而减少页面加载时间。")])]),t._v(" "),a("h3",{attrs:{id:"服务器推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器推送"}},[t._v("#")]),t._v(" 服务器推送")]),t._v(" "),a("p",[t._v("HTTP/2 服务器可以对一个客户端发送多个响应，服务器可以推送额外资源， 无需客户端明确请求\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/754067/1626707364245-4b7af8bb-169c-485a-9ad7-b5b8aeec2082.png#clientId=u68d6b510-8f77-4&from=paste&height=354&id=ue407d099&margin=%5Bobject%20Object%5D&name=image.png&originHeight=354&originWidth=884&originalType=binary%E2%88%B6=1&size=45118&status=done&style=none&taskId=u223a2a4f-c2cd-4c96-835c-2580d561d52&width=884",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"头部压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头部压缩"}},[t._v("#")]),t._v(" 头部压缩")]),t._v(" "),a("ul",[a("li",[t._v("静态霍夫曼代码对传输的标头字段进行编码，从而减小了各个传输的大小")]),t._v(" "),a("li",[t._v("建立了一个共享的上下文，下一条的响应只传输不同的部分")]),t._v(" "),a("li",[t._v("静态表在规范中定义，并提供了一个包含所有连接都可能使用的常用 HTTP 标头字段")]),t._v(" "),a("li",[t._v("动态表最初为空，将根据在特定连接内交换的值进行更新")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/754067/1626707642878-fc67b924-1d5c-4a44-b465-bd8e313927ee.png#clientId=u68d6b510-8f77-4&from=paste&height=751&id=uc138b956&margin=%5Bobject%20Object%5D&name=image.png&originHeight=751&originWidth=866&originalType=binary%E2%88%B6=1&size=97169&status=done&style=none&taskId=ud67ac49f-c872-446d-ab36-3f6dadecdfd&width=866",alt:"image.png"}})])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/performance/http2",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP/2 简介"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);