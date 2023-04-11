"use strict";(self.webpackChunkhtwm_623_website=self.webpackChunkhtwm_623_website||[]).push([[8998],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var o=2;o<p;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var r=n(1163),a=(n(9496),n(9613));const p={title:"TypeScript webpack\u6253\u5305",urlname:"kvblzy",date:"2021-06-19 00:10:29 +0800",tags:["typescript"],categories:["\u6280\u672f\u7b14\u8bb0"]},i=void 0,l={unversionedId:"\u672a\u5206\u7c7b/TypeScript webpack\u6253\u5305",id:"\u672a\u5206\u7c7b/TypeScript webpack\u6253\u5305",title:"TypeScript webpack\u6253\u5305",description:"\u521d\u59cb\u5316",source:"@site/docs/100-\u672a\u5206\u7c7b/TypeScript webpack\u6253\u5305.md",sourceDirName:"100-\u672a\u5206\u7c7b",slug:"/\u672a\u5206\u7c7b/TypeScript webpack\u6253\u5305",permalink:"/docs/\u672a\u5206\u7c7b/TypeScript webpack\u6253\u5305",draft:!1,tags:[{label:"typescript",permalink:"/docs/tags/typescript"}],version:"current",frontMatter:{title:"TypeScript webpack\u6253\u5305",urlname:"kvblzy",date:"2021-06-19 00:10:29 +0800",tags:["typescript"],categories:["\u6280\u672f\u7b14\u8bb0"]},sidebar:"tutorialSidebar",previous:{title:"HTML5\u8bed\u4e49\u5143\u7d20",permalink:"/docs/\u672a\u5206\u7c7b/HTML5\u8bed\u4e49\u5143\u7d20"},next:{title:"TypeScript\u57fa\u7840",permalink:"/docs/\u672a\u5206\u7c7b/TypeScript\u57fa\u7840"}},c={},o=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2}],s={toc:o},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u9879\u76ee ",(0,a.kt)("inlineCode",{parentName:"li"},"npm init -y")),(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u4f9d\u8d56 ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin")),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa webpack \u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"webpack.config.js"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const path = require("path");\nconst HTMLWebpackPlugin = require("clean-webpack-plugin");\nconst { CleanWebpackPlugin } = require("clean-webpack-plugin");\nmodule.exports = {\n  // \u6307\u5b9a\u5165\u53e3\u6587\u4ef6\n  entry: "./src/index.ts",\n  // \u6307\u5b9a\u8f93\u51fa\u76ee\u5f55\n  output: {\n    path: path.resolve(__dirname, "dist"),\n    filename: "bundle.js",\n  },\n  // \u6307\u5b9awebpack\u6253\u5305\u65f6\u8981\u4f7f\u7528\u7684\u6a21\u5757\n  module: {\n    rules: [\n      {\n        // test\u6307\u5b9a\u89c4\u5219\u751f\u6548\u7684\u6587\u4ef6\n        test: /\\.ts$/,\n        // \u6307\u5b9a\u4f7f\u7528\u7684loader\n        use: "ts-loader",\n        // \u8981\u6392\u9664\u7684\u6587\u4ef6\n        exclude: /node-modules/,\n      },\n    ],\n  },\n  plugins: [\n    new CleanWebpackPlugin(),\n    new HtmlWebpackPlugin({\n      title: "TS\u6d4b\u8bd5",\n    }),\n  ],\n};\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa tsconfig \u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"tsconfig.json"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "module": "es6",\n    "target": "es6",\n    "strict": true\n  },\n  "exclude": ["node_modules"]\n}\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c bash ",(0,a.kt)("inlineCode",{parentName:"li"},"webpack")," \u5373\u53ef\u8fdb\u884c\u7f16\u8bd1")),(0,a.kt)("p",null,"\u200b"))}m.isMDXComponent=!0}}]);