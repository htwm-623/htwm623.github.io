"use strict";(self.webpackChunkhtwm_623_website=self.webpackChunkhtwm_623_website||[]).push([[9960],{9613:(n,t,e)=>{e.d(t,{Zo:()=>l,kt:()=>v});var r=e(9496);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var c=r.createContext({}),p=function(n){var t=r.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},l=function(n){var t=p(n.components);return r.createElement(c.Provider,{value:t},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,i=n.originalType,c=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),m=p(e),d=a,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return e?r.createElement(v,o(o({ref:t},l),{},{components:e})):r.createElement(v,o({ref:t},l))}));function v(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var i=e.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=n,s[m]="string"==typeof n?n:a,o[1]=s;for(var p=2;p<i;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},1314:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=e(1163),a=(e(9496),e(9613));const i={title:"JavaScript\u4e8b\u4ef6\u5faa\u73af",urlname:"ylwkzy",date:"2021-04-13 01:01:11 +0800",tags:["javascript"],categories:["\u6280\u672f\u7b14\u8bb0"]},o="Marp \u4ee3\u7801",s={unversionedId:"JavaScript\u4e8b\u4ef6\u5faa\u73af",id:"JavaScript\u4e8b\u4ef6\u5faa\u73af",title:"JavaScript\u4e8b\u4ef6\u5faa\u73af",description:"- \u793a\u4f8b slide \u94fe\u63a5 https://htwm623.github.io/htwm-open-sesame/slides/JavaScript-Event-Loop/",source:"@site/docs/JavaScript\u4e8b\u4ef6\u5faa\u73af.md",sourceDirName:".",slug:"/JavaScript\u4e8b\u4ef6\u5faa\u73af",permalink:"/docs/JavaScript\u4e8b\u4ef6\u5faa\u73af",draft:!1,tags:[{label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",frontMatter:{title:"JavaScript\u4e8b\u4ef6\u5faa\u73af",urlname:"ylwkzy",date:"2021-04-13 01:01:11 +0800",tags:["javascript"],categories:["\u6280\u672f\u7b14\u8bb0"]},sidebar:"tutorialSidebar",previous:{title:"JSON5\u683c\u5f0f\u53ca\u89e3\u6790",permalink:"/docs/JSON5\u683c\u5f0f\u53ca\u89e3\u6790"},next:{title:"JavaScript\u4ee3\u7801\u7247\u6bb5",permalink:"/docs/JavaScript\u4ee3\u7801\u7247\u6bb5"}},c={},p=[],l={toc:p},m="wrapper";function u(n){let{components:t,...e}=n;return(0,a.kt)(m,(0,r.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"marp-\u4ee3\u7801"},"Marp \u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nmarp: true\nsize: 16:9\ntheme: uncover\npaginate: true\n_paginate: false\n#header: Javascript\u4e8b\u4ef6\u5faa\u73af\n#https://www.youtube.com/watch?v=8aGhZQkoFbQ\n---\n\n<style>\nsection {\n  color: #135;\n  background-color: #cfe;\n  background-image: url('https://cdn.jsdelivr.net/gh/htwm623/static//image/gradient.jpg')\n}\n</style>\n\n# Javascript \u4e8b\u4ef6\u5faa\u73af\n\n---\n\n### \u6d4f\u89c8\u5668\u7684\u591a\u8fdb\u7a0b\n\n\u6bcf\u6253\u5f00\u4e00\u4e2a Tab \u9875, \u5c31\u76f8\u5f53\u4e8e\u521b\u5efa\u4e86\u4e00\u4e2a\u72ec\u7acb\u7684\u6d4f\u89c8\u5668\u8fdb\u7a0b\n\u7b80\u5355\u7684\u7406\u89e3\u4e3a\u6e32\u67d3\u8fdb\u7a0b(Render);Render \u8fdb\u7a0b\u5305\u62ec\n\n1. GUI \u6e32\u67d3\u8fdb\u7a0b\n2. JS \u5f15\u64ce\u7ebf\u7a0b\n3. \u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b\n4. \u5b9a\u65f6\u5668\u89e6\u53d1\u7ebf\u7a0b(setTimeOut set)\n5. \u5f02\u6b65 http \u8bf7\u6c42\u7ebf\u7a0b\n\n---\n\n### Javascript \u7684\u5355\u7ebf\u7a0b\n\n- Javascript \u5f15\u64ce\u4e2d\u8d1f\u8d23\u89e3\u91ca\u548c\u6267\u884c Javascript \u4ee3\u7801\u7684\u7ebf\u7a0b\u552f\u4e00,\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u6267\u884c\u4e00\u4ef6\u4efb\u52a1\n- Javascript \u7684\u5355\u7ebf\u7a0b\u8bbe\u8ba1\u662f\u4e3a\u4e86\u907f\u514d DOM \u6e32\u67d3\u7684\u51b2\u7a81\n- (\u4e3a\u4e86\u5229\u7528\u591a\u6838 CPU \u7684\u8ba1\u7b97\u80fd\u529b, HTML5 \u63d0\u51fa Web Worker \u6807\u51c6, \u5141\u8bb8 JavaScript \u811a\u672c\u521b\u5efa\u591a\u4e2a\u7ebf\u7a0b,\u4f46\u662f\u5b50\u7ebf\u7a0b\u5b8c\u5168\u53d7\u4e3b\u7ebf\u7a0b\u63a7\u5236,\u4e14\u4e0d\u5f97\u64cd\u4f5c DOM,\u6240\u4ee5,\u8ba4\u4e3a\u8fd9\u4e2a\u65b0\u6807\u51c6\u5e76\u6ca1\u6709\u6539\u53d8 Javascript \u5355\u7ebf\u7a0b\u7684\u672c\u8d28)\n\n---\n\n### \u4e0b\u6587\u4e2d\u6240\u8c13\u7684\u5355\u7ebf\u7a0b\u5747\u6307\u4e3b\u7ebf\u7a0b\u7684\u5355\u7ebf\u7a0b\n\n---\n\n### Javascript \u7684\u4e8b\u4ef6\u5faa\u73af\n\n- \u4e8b\u4ef6\u5faa\u73af \u662f\u8ba9 JavaScript \u505a\u5230\u65e2\u662f\u5355\u7ebf\u7a0b\uff0c\u53c8\u7edd\u5bf9\u4e0d\u4f1a\u963b\u585e\u7684\u6838\u5fc3\u673a\u5236\uff0c\u4e5f\u662f JavaScript \u5e76\u53d1\u6a21\u7684\u57fa\u7840\uff0c\u662f\u7528\u6765\u534f\u8c03\u5404\u79cd\u4e8b\u4ef6\u3001\u7528\u6237\u4ea4\u4e92\u3001\u811a\u672c\u6267\u884c\u3001UI \u6e32\u67d3\u3001\u7f51\u7edc\u8bf7\u6c42\u7b49\u7684\u4e00\u79cd\u673a\u5236\u3002\n\n- \u7b80\u5355\u8bf4\uff0c \u4e8b\u4ef6\u5faa\u73af\u662f\u5b9e\u73b0\u5f02\u6b65\u7684\u4e00\u79cd\u673a\u5236\n\n---\n\n### \u4e8b\u4ef6\u5faa\u73af\n\n![70%](https://cdn.jsdelivr.net/gh/htwm623/static//image/16ef93a7ffa5b4d2.jpg)\n\n---\n\n### \u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\n\n1. Task(\u5b8f\u4efb\u52a1) (\u9664\u4e86\u5fae\u4efb\u52a1\u7684\u4e24\u4e2a, \u57fa\u672c\u90fd\u662f\u5b8f\u4efb\u52a1)\n   a. DOM manipulation(DOM \u64cd\u4f5c)\n   b. User interaction(\u7528\u6237\u4ea4\u4e92)\n   c. Networking(\u7f51\u7edc\u8bf7\u6c42)\n   d. History traversal(History API \u64cd\u4f5c)\u3002\n\n2. MicroTask(\u5fae\u4efb\u52a1)\n   a. Promise\n   b. MutationObserver\n\n---\n\n### \u4efb\u52a1\u961f\u5217\n\n1. Task Queue\n   \u4e00\u4e2a Event Loop \u4f1a\u6709\u4e00\u4e2a\u6216\u591a\u4e2a Task Queue\n   \u540c\u6e90 task \u53ea\u80fd\u653e\u5728\u540c\u4e00\u4e2a\u961f\u5217(\u6bd4\u5982\u952e\u76d8\u4e8b\u4ef6\uff0c\u90fd\u4f1a\u5b58\u653e\u5728\u540c\u4e00\u961f\u5217)\n   \u4e0d\u540c\u6e90\u7684 task \u53ef\u4ee5\u4e0d\u653e\u5728\u540c\u4e00\u4e2a\u961f\u5217(\u6bd4\u5982\u540c\u65f6\u6309\u4e0b\u952e\u76d8\u9f20\u6807,http \u8bf7\u6c42\u7b49, \u6d4f\u89c8\u5668\u8c03\u5ea6)\n2. Microtask Queue\n   \u4e00\u4e2a Event Loop \u53ea\u6709\u4e00\u4e2a Microtask Queue\n\n---\n\n![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/task.gif)\n\n---\n\n![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/microtasks.gif)\n\n---\n\n![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/event_loop1.gif)\n\n---\n\n![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/2021-04-12_004444.png)\n\n---\n\n#### Tasks\n\n- \u6bcf\u6b21\u6267\u884c\u4e00\u4e2a\uff0c\u589e\u52a0\u7684\u6392\u5728\u961f\u5217\u540e\u9762\n\n#### Microtasks\n\n- \u4e00\u76f4\u6267\u884c\uff0c \u76f4\u5230\u961f\u5217\u6e05\u7a7a\n\n---\n\n### \u53c2\u8003\u8d44\u6599\n\n<style scoped>a { color: #000; }</style>\n\n- https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=1592s\n\n- https://juejin.cn/post/6844904198195118093\n\n- https://www.jianshu.com/p/593fe41365e1\n\n- https://codesandbox.io/s/event-loop-demo-3026x\n\n---\n\n# \u8c22\u8c22\uff01\n\n---\n\n#### GUI \u6e32\u67d3\u7ebf\u7a0b:\n\n- \u8d1f\u8d23\u6e32\u67d3\u6d4f\u89c8\u5668\u754c\u9762\uff0c\u89e3\u6790 HTML\uff0cCSS\uff0c\u6784\u5efa DOM \u6811\u548c RenderObject \u6811\uff0c\u5e03\u5c40\u548c\u7ed8\u5236\u7b49\u3002\n\n- \u5f53\u754c\u9762\u9700\u8981\u91cd\u7ed8\uff08Repaint\uff09\u6216\u7531\u4e8e\u67d0\u79cd\u64cd\u4f5c\u5f15\u53d1\u56de\u6d41(reflow)\u65f6\uff0c\u8be5\u7ebf\u7a0b\u5c31\u4f1a\u6267\u884c\n- \u6ce8\u610f\uff0cGUI \u6e32\u67d3\u7ebf\u7a0b\u4e0e JS \u5f15\u64ce\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\uff0c\u5f53 JS \u5f15\u64ce\u6267\u884c\u65f6 GUI \u7ebf\u7a0b\u4f1a\u88ab\u6302\u8d77\uff08\u76f8\u5f53\u4e8e\u88ab\u51bb\u7ed3\u4e86\uff09\uff0cGUI \u66f4\u65b0\u4f1a\u88ab\u4fdd\u5b58\u5728\u4e00\u4e2a\u961f\u5217\u4e2d\u7b49\u5230 JS \u5f15\u64ce\u7a7a\u95f2\u65f6\u7acb\u5373\u88ab\u6267\u884c\u3002\n\n---\n\n#### JS \u5f15\u64ce\u7ebf\u7a0b\n\n- \u4e5f\u79f0\u4e3a JS \u5185\u6838\uff0c\u8d1f\u8d23\u5904\u7406 Javascript \u811a\u672c\u7a0b\u5e8f\u3002\uff08\u4f8b\u5982 V8 \u5f15\u64ce\uff09\n- JS \u5f15\u64ce\u7ebf\u7a0b\u8d1f\u8d23\u89e3\u6790 Javascript \u811a\u672c\uff0c\u8fd0\u884c\u4ee3\u7801\u3002\n- JS \u5f15\u64ce\u4e00\u76f4\u7b49\u5f85\u7740\u4efb\u52a1\u961f\u5217\u4e2d\u4efb\u52a1\u7684\u5230\u6765\uff0c\u7136\u540e\u52a0\u4ee5\u5904\u7406\uff0c\u4e00\u4e2a Tab \u9875\uff08renderer \u8fdb\u7a0b\uff09\u4e2d\u65e0\u8bba\u4ec0\u4e48\u65f6\u5019\u90fd\u53ea\u6709\u4e00\u4e2a JS \u7ebf\u7a0b\u5728\u8fd0\u884c JS \u7a0b\u5e8f\n- \u540c\u6837\u6ce8\u610f\uff0cGUI \u6e32\u67d3\u7ebf\u7a0b\u4e0e JS \u5f15\u64ce\u7ebf\u7a0b\u662f\u4e92\u65a5\u7684\uff0c\u6240\u4ee5\u5982\u679c JS \u6267\u884c\u7684\u65f6\u95f4\u8fc7\u957f\uff0c\u8fd9\u6837\u5c31\u4f1a\u9020\u6210\u9875\u9762\u7684\u6e32\u67d3\u4e0d\u8fde\u8d2f\uff0c\u5bfc\u81f4\u9875\u9762\u6e32\u67d3\u52a0\u8f7d\u963b\u585e\u3002\n\n---\n\n#### \u4e8b\u4ef6\u89e6\u53d1\u7ebf\u7a0b\n\n- \u5f52\u5c5e\u4e8e\u6d4f\u89c8\u5668\u800c\u4e0d\u662f JS \u5f15\u64ce\uff0c\u7528\u6765\u63a7\u5236\u4e8b\u4ef6\u5faa\u73af\uff08\u53ef\u4ee5\u7406\u89e3\uff0cJS \u5f15\u64ce\u81ea\u5df1\u90fd\u5fd9\u4e0d\u8fc7\u6765\uff0c\u9700\u8981\u6d4f\u89c8\u5668\u53e6\u5f00\u7ebf\u7a0b\u534f\u52a9\uff09\n- \u5f53 JS \u5f15\u64ce\u6267\u884c\u4ee3\u7801\u5757\u5982 setTimeOut \u65f6\uff08\u4e5f\u53ef\u6765\u81ea\u6d4f\u89c8\u5668\u5185\u6838\u7684\u5176\u4ed6\u7ebf\u7a0b,\u5982\u9f20\u6807\u70b9\u51fb\u3001AJAX \u5f02\u6b65\u8bf7\u6c42\u7b49\uff09\uff0c\u4f1a\u5c06\u5bf9\u5e94\u4efb\u52a1\u6dfb\u52a0\u5230\u4e8b\u4ef6\u7ebf\u7a0b\u4e2d\n- \u5f53\u5bf9\u5e94\u7684\u4e8b\u4ef6\u7b26\u5408\u89e6\u53d1\u6761\u4ef6\u88ab\u89e6\u53d1\u65f6\uff0c\u8be5\u7ebf\u7a0b\u4f1a\u628a\u4e8b\u4ef6\u6dfb\u52a0\u5230\u5f85\u5904\u7406\u961f\u5217\u7684\u961f\u5c3e\uff0c\u7b49\u5f85 JS \u5f15\u64ce\u7684\u5904\u7406\n- \u6ce8\u610f\uff0c\u7531\u4e8e JS \u7684\u5355\u7ebf\u7a0b\u5173\u7cfb\uff0c\u6240\u4ee5\u8fd9\u4e9b\u5f85\u5904\u7406\u961f\u5217\u4e2d\u7684\u4e8b\u4ef6\u90fd\u5f97\u6392\u961f\u7b49\u5f85 JS \u5f15\u64ce\u5904\u7406\uff08\u5f53 JS \u5f15\u64ce\u7a7a\u95f2\u65f6\u624d\u4f1a\u53bb\u6267\u884c\uff09\n\n---\n\n#### \u5b9a\u65f6\u89e6\u53d1\u5668\u7ebf\u7a0b\n\n- setInterval \u4e0e setTimeout \u6240\u5728\u7ebf\u7a0b\n- \u6d4f\u89c8\u5668\u5b9a\u65f6\u8ba1\u6570\u5668\u5e76\u4e0d\u662f\u7531 JavaScript \u5f15\u64ce\u8ba1\u6570\u7684,\uff08\u56e0\u4e3a JavaScript \u5f15\u64ce\u662f\u5355\u7ebf\u7a0b\u7684, \u5982\u679c\u5904\u4e8e\u963b\u585e\u7ebf\u7a0b\u72b6\u6001\u5c31\u4f1a\u5f71\u54cd\u8bb0\u8ba1\u65f6\u7684\u51c6\u786e\uff09\n- \u56e0\u6b64\u901a\u8fc7\u5355\u72ec\u7ebf\u7a0b\u6765\u8ba1\u65f6\u5e76\u89e6\u53d1\u5b9a\u65f6\uff08\u8ba1\u65f6\u5b8c\u6bd5\u540e\uff0c\u6dfb\u52a0\u5230\u4e8b\u4ef6\u961f\u5217\u4e2d\uff0c\u7b49\u5f85 JS \u5f15\u64ce\u7a7a\u95f2\u540e\u6267\u884c\uff09\n- \u6ce8\u610f\uff0cW3C \u5728 HTML \u6807\u51c6\u4e2d\u89c4\u5b9a\uff0c\u89c4\u5b9a\u8981\u6c42:\n  ** setTimeOut \u4e2d\u4f4e\u4e8e 4ms \u8ba4\u4e3a 4ms **\n\n---\n\n#### \u5f02\u6b65 http \u8bf7\u6c42\u7ebf\u7a0b\n\n- \u5728 XMLHttpRequest \u5728\u8fde\u63a5\u540e\u662f\u901a\u8fc7\u6d4f\u89c8\u5668\u65b0\u5f00\u4e00\u4e2a\u7ebf\u7a0b\u8bf7\u6c42\n- \u5c06\u68c0\u6d4b\u5230\u72b6\u6001\u53d8\u66f4\u65f6\uff0c\u5982\u679c\u8bbe\u7f6e\u6709\u56de\u8c03\u51fd\u6570\uff0c\u5f02\u6b65\u7ebf\u7a0b\u5c31\u4ea7\u751f\u72b6\u6001\u53d8\u66f4\u4e8b\u4ef6\uff0c\u5c06\u8fd9\u4e2a\u56de\u8c03\u518d\u653e\u5165\u4e8b\u4ef6\u961f\u5217\u4e2d\u3002\u518d\u7531 JavaScript \u5f15\u64ce\u6267\u884c\u3002\n\n---\n\n![bg 80%](https://cdn.jsdelivr.net/gh/htwm623/static//image/animation.gif)\n\n---\n\nJavaScript Runtime \u7684\u8fd0\u884c\u673a\u5236\n\n1. \u4e3b\u7ebf\u7a0b\u4e0d\u65ad\u5faa\u73af\uff1b\n\n2. \u5bf9\u4e8e\u540c\u6b65\u4efb\u52a1\uff0c\u521b\u5efa\u6267\u884c\u4e0a\u4e0b\u6587 \uff0c\u6309\u987a\u5e8f\u8fdb\u5165\u6267\u884c\u6808 \uff1b\n\n3. \u5bf9\u4e8e\u5f02\u6b65\u4efb\u52a1\uff1a\n   \u4e0e\u6b65\u9aa4 2 \u76f8\u540c\uff0c\u540c\u6b65\u6267\u884c\u8fd9\u6bb5\u4ee3\u7801\uff1b\n   \u5c06\u76f8\u5e94\u7684 Task\uff08\u6216 Microtask\uff09\u6dfb\u52a0\u5230 Event Loop \u7684\u4efb\u52a1\u961f\u5217\uff1b\n   \u7531\u5176\u4ed6\u7ebf\u7a0b\u6765\u6267\u884c\u5177\u4f53\u7684\u5f02\u6b65\u64cd\u4f5c\u3002\n\n---\n\n![](https://cdn.jsdelivr.net/gh/htwm623/static//image/2021-04-12_004444.png)\n\n---\n\n### \u8ba1\u5212\u4f7f\u7528\u793a\u4f8b\n\n1. \u4e8b\u4ef6\u5faa\u73af \u963b\u585e\u4e3b\u7ebf\u7a0b\n\n- https://codesandbox.io/s/event-loop-demo-3026x?file=/while-true-test.html\n\n2. \u6267\u884c\u6808\u8bb2\u89e3\n\n- https://codesandbox.io/s/event-loop-demo-3026x?file=/throw-error.html\n\n3. \u4efb\u52a1\u961f\u5217\u6267\u884c\u987a\u5e8f\n\n- https://codesandbox.io/s/event-loop-demo-3026x?file=/set-timeout-zero.html\n\n4. \u624b\u52a8\u89e6\u53d1\u548c js \u89e6\u53d1\u7684\u533a\u522b\n\n- https://codesandbox.io/s/event-loop-demo-3026x?file=/click-and-auto-click.html\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b slide \u94fe\u63a5 ",(0,a.kt)("a",{parentName:"li",href:"https://htwm623.github.io/htwm-open-sesame/slides/JavaScript-Event-Loop/"},"https://htwm623.github.io/htwm-open-sesame/slides/JavaScript-Event-Loop/"))))}u.isMDXComponent=!0}}]);