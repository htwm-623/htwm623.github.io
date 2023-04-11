"use strict";(self.webpackChunkhtwm_623_website=self.webpackChunkhtwm_623_website||[]).push([[6735],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,k=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(1163),o=(r(9496),r(9613));const a={title:"docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20",urlname:"xzrciy",date:"2021-05-12 00:05:56 +0800",tags:["docker"],categories:["\u6280\u672f\u7b14\u8bb0"]},l=void 0,c={unversionedId:"\u672a\u5206\u7c7b/docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20",id:"\u672a\u5206\u7c7b/docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20",title:"docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20",description:"1.\u7f16\u5199\u7b80\u5355 node.js \u4ee3\u7801",source:"@site/docs/100-\u672a\u5206\u7c7b/docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20.md",sourceDirName:"100-\u672a\u5206\u7c7b",slug:"/\u672a\u5206\u7c7b/docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20",permalink:"/docs/\u672a\u5206\u7c7b/docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20",draft:!1,tags:[{label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{title:"docker\u7f16\u5199\u955c\u50cf\u5e76\u4e0a\u4f20",urlname:"xzrciy",date:"2021-05-12 00:05:56 +0800",tags:["docker"],categories:["\u6280\u672f\u7b14\u8bb0"]},sidebar:"tutorialSidebar",previous:{title:"docker\u7b80\u5355\u4f7f\u7528",permalink:"/docs/\u672a\u5206\u7c7b/docker\u7b80\u5355\u4f7f\u7528"},next:{title:"git\u7684\u7b80\u5355\u4f7f\u7528",permalink:"/docs/\u672a\u5206\u7c7b/git\u7684\u7b80\u5355\u4f7f\u7528"}},i={},d=[{value:"1.\u7f16\u5199\u7b80\u5355 node.js \u4ee3\u7801",id:"1\u7f16\u5199\u7b80\u5355-nodejs-\u4ee3\u7801",level:2},{value:"2. \u7f16\u5199 DockerFile \u548c\u7f16\u8bd1\u955c\u50cf",id:"2-\u7f16\u5199-dockerfile-\u548c\u7f16\u8bd1\u955c\u50cf",level:2},{value:"3. docker hub \u4e91\u7f16\u8bd1",id:"3-docker-hub-\u4e91\u7f16\u8bd1",level:2}],s={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1\u7f16\u5199\u7b80\u5355-nodejs-\u4ee3\u7801"},"1.\u7f16\u5199\u7b80\u5355 node.js \u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// hello.js\nconsole.log("hello");\n')),(0,o.kt)("h2",{id:"2-\u7f16\u5199-dockerfile-\u548c\u7f16\u8bd1\u955c\u50cf"},"2. \u7f16\u5199 DockerFile \u548c\u7f16\u8bd1\u955c\u50cf"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7f16\u5199 DockerFile")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:latest\n\nRUN mkdir /src\n\nCOPY hello.js /src\n\nCMD ["node", "/src/hello.js"]\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u955c\u50cf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# htwm623/hello-node\u4e3arepository, v01\u4e3atag\uff0c \u4e0d\u8981\u5fd8\u8bb0\u6700\u540e . \u8868\u793a\u7684\u76f8\u5bf9\u8def\u5f84\nsudo docker image build -t htwm623/hello-node:v01 .\n")),(0,o.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\uff0c \u4f7f\u7528 docker images \u67e5\u770b\u955c\u50cf\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2021/png/754067/1620750720956-49af2193-b528-4143-a9a0-5fddc9187dad.png#clientId=u7b4fe897-0ae9-4&from=paste&height=52&id=u4520c260&margin=%5Bobject%20Object%5D&name=image.png&originHeight=52&originWidth=670&originalType=binary%E2%88%B6=1&size=8109&status=done&style=none&taskId=u560e0a85-77d1-4536-895f-5cc86f3174f&width=670",alt:"image.png"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u955c\u50cf")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run htwm623/hello-node:v01\n# output: hello world\n")),(0,o.kt)("h2",{id:"3-docker-hub-\u4e91\u7f16\u8bd1"},"3. docker hub \u4e91\u7f16\u8bd1"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e0a\u4f20 Dockerfile \u53ca\u9879\u76ee\u6587\u4ef6\u5230 GitHub"),(0,o.kt)("li",{parentName:"ol"},"\u5728 docker hub \u901a\u8fc7 github \u4ed3\u5e93\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1"),(0,o.kt)("li",{parentName:"ol"},"\u8be6\u7ec6\u6d41\u7a0b\u7528\u5230\u65f6\u518d\u8bf4")))}u.isMDXComponent=!0}}]);