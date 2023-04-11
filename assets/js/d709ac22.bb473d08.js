"use strict";(self.webpackChunkhtwm_623_website=self.webpackChunkhtwm_623_website||[]).push([[1417],{9613:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(1163),a=(r(9496),r(9613));const o={title:"Django REST framework\u793a\u4f8b",urlname:"ru8m7m",date:"2021-07-29 22:16:34 +0800",tags:["django"],categories:["\u6280\u672f\u7b14\u8bb0"]},l=void 0,p={unversionedId:"Django REST framework\u793a\u4f8b",id:"Django REST framework\u793a\u4f8b",title:"Django REST framework\u793a\u4f8b",description:"\u521b\u5efa\u9879\u76ee",source:"@site/docs/Django REST framework\u793a\u4f8b.md",sourceDirName:".",slug:"/Django REST framework\u793a\u4f8b",permalink:"/docs/Django REST framework\u793a\u4f8b",draft:!1,tags:[{label:"django",permalink:"/docs/tags/django"}],version:"current",frontMatter:{title:"Django REST framework\u793a\u4f8b",urlname:"ru8m7m",date:"2021-07-29 22:16:34 +0800",tags:["django"],categories:["\u6280\u672f\u7b14\u8bb0"]},sidebar:"tutorialSidebar",previous:{title:"CommonJS module syntax",permalink:"/docs/CommonJS module syntax"},next:{title:"GraphQl\u5b66\u4e60",permalink:"/docs/GraphQl\u5b66\u4e60"}},i={},s=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"Hello World",id:"hello-world",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u73af\u5883")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. \u5b89\u88c5django\npip install django\n\n\n# 2.\u5b89\u88c5 drf\npip install djangorestframework\npip install markdown       # Markdown support for the browsable API.\npip install django-filter  # Filtering support\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa django")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. \u521b\u5efadjango\u9879\u76ee\ndjango-admin startproject drf_backend\n\n# 2. \u521b\u5efaapp\npython manage.py startapp fileserver\n")),(0,a.kt)("h2",{id:"hello-world"},"Hello World"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"./project/urls.py"),", \u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"helloapp"),"\u9700\u8981\u5728 setting \u4e2d\u6ce8\u518c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('file/', include('helloapp.urls')),\n]\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"./project/setting.py"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"INSTALLED_APPS = [\n    ...\n    'helloapp',\n    ...\n]\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"./helloapp/urls.py"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('hello/', views.Hello.as_view())\n]\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"./helloapp/views.py"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from rest_framework.views import APIView\nfrom rest_framework.response import Response\n\n# Create your views here.\nclass Hello(APIView):\n    def get(self, request, format=None):\n        data = {\n            'hello': 'world'\n        }\n        return Response(data)\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.django-rest-framework.org/"},"drf \u5b98\u7f51"))))}u.isMDXComponent=!0}}]);