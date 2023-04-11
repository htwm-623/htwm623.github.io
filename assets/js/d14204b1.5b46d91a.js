"use strict";(self.webpackChunkhtwm_623_website=self.webpackChunkhtwm_623_website||[]).push([[5789],{9613:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||c;return t?o.createElement(k,a(a({ref:n},i),{},{components:t})):o.createElement(k,a({ref:n},i))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<c;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5412:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var o=t(1163),r=(t(9496),t(9613));const c={title:"docer-compose\u591a\u5bb9\u5668\u9879\u76ee",urlname:"lus3o6",date:"2021-04-22 23:50:14 +0800",tags:["docker","docker-compose"],categories:["\u6280\u672f\u7b14\u8bb0"]},a=void 0,l={unversionedId:"\u672a\u5206\u7c7b/docer-compose\u591a\u5bb9\u5668\u9879\u76ee",id:"\u672a\u5206\u7c7b/docer-compose\u591a\u5bb9\u5668\u9879\u76ee",title:"docer-compose\u591a\u5bb9\u5668\u9879\u76ee",description:"1. \u4f7f\u7528 docker --link \u6620\u5c04\u9879\u76ee",source:"@site/docs/100-\u672a\u5206\u7c7b/docer-compose\u591a\u5bb9\u5668\u9879\u76ee.md",sourceDirName:"100-\u672a\u5206\u7c7b",slug:"/\u672a\u5206\u7c7b/docer-compose\u591a\u5bb9\u5668\u9879\u76ee",permalink:"/docs/\u672a\u5206\u7c7b/docer-compose\u591a\u5bb9\u5668\u9879\u76ee",draft:!1,tags:[{label:"docker",permalink:"/docs/tags/docker"},{label:"docker-compose",permalink:"/docs/tags/docker-compose"}],version:"current",frontMatter:{title:"docer-compose\u591a\u5bb9\u5668\u9879\u76ee",urlname:"lus3o6",date:"2021-04-22 23:50:14 +0800",tags:["docker","docker-compose"],categories:["\u6280\u672f\u7b14\u8bb0"]},sidebar:"tutorialSidebar",previous:{title:"TypeScript\u7f16\u8bd1\u9009\u9879",permalink:"/docs/\u672a\u5206\u7c7b/TypeScript\u7f16\u8bd1\u9009\u9879"},next:{title:"docker\u7b80\u5355\u4f7f\u7528",permalink:"/docs/\u672a\u5206\u7c7b/docker\u7b80\u5355\u4f7f\u7528"}},p={},s=[{value:"1. \u4f7f\u7528 docker --link \u6620\u5c04\u9879\u76ee",id:"1-\u4f7f\u7528-docker---link-\u6620\u5c04\u9879\u76ee",level:2},{value:"2. \u4f7f\u7528 docker-compose",id:"2-\u4f7f\u7528-docker-compose",level:2},{value:"3. docker-compose \u5e38\u7528\u547d\u4ee4",id:"3-docker-compose-\u5e38\u7528\u547d\u4ee4",level:2}],i={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u4f7f\u7528-docker---link-\u6620\u5c04\u9879\u76ee"},"1. \u4f7f\u7528 docker --link \u6620\u5c04\u9879\u76ee"),(0,r.kt)("p",null,"\u4f7f\u7528 --link \u53c2\u6570\u6620\u5c04\u5bb9\u5668\u548c\u57df\u540d\uff0c \u5c06\u4e24\u4e2a\u5bb9\u5668\u8fdb\u884c\u901a\u4fe1\uff0c\u539f\u7406\u662f\u4fee\u6539 host \u6587\u4ef6\uff0c \u53ef\u67e5\u770b /etc/hosts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u524d\u4e00\u4e2amyng \u4e3a\u53e6\u5916\u4e00\u4e2a\u5bb9\u5668\u7684\u540d\u79f0\uff0c \u540e\u4e00\u4e2a\u4e3a\u6620\u5c04\u57df\u540d\ndocker run -dit --link myng:myng alpine\n")),(0,r.kt)("h2",{id:"2-\u4f7f\u7528-docker-compose"},"2. \u4f7f\u7528 docker-compose"),(0,r.kt)("p",null,"\u5b8c\u6574 demo \u5df2\u4e0a\u4f20 github\n\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u2514\u2500\u2500 nginx.conf\n\u251c\u2500\u2500 docker-compose.yml\n\u2514\u2500\u2500 html\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 mysql.php\n    \u2514\u2500\u2500 test.php\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"docker-compose.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n    # \u670d\u52a1\u5373\u4e3a\u6620\u5c04\u7684\u57df\u540d\n  nginx:\n    image: nginx:alpine\n    ports:\n    - 81:80\n    # volumes\u5373\u4e3a\u672c\u5730\u6587\u4ef6\u4e0e\u5bb9\u5668\u5185\u90e8\u6587\u4ef6\u6620\u5c04\n    volumes:\n    - ./html:/usr/share/nginx/html\n    - ./conf/nginx.conf:/etc/nginx/nginx.conf\n  php:\n    image: devilbox/php-fpm:5.5-work-0.123\n    volumes:\n    - ./html:/var/www/html\n  mysql:\n    image: mysql:5.6\n    environment:\n      - MYSQL_ROOT_PASSWORD=123456\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"conf/nginx.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n    server {\n        listen       80;\n        server_name  localhost;\n\n        location / {\n            root   /usr/share/nginx/html;\n            index  index.html index.htm;\n        }\n\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   /usr/share/nginx/html;\n        }\n\n        location ~ \\.php$ {\n            fastcgi_pass    php:9000;\n            fastcgi_index   index.php;\n            fastcgi_param   SCRIPT_FILENAME     /var/www/html/$fastcgi_script_name;\n            include         fastcgi_params;\n        }\n    }\n}\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"html/index.html")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"index.html\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"html/test.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nphpinfo();\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"html/mysql.php")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$dbhost = 'mysql';\n$dbuser = 'root';\n$dbpass = '123456';\n$conn = mysqli_connect($dbhost, $dbuser, $dbpass);\nif (!$conn) {\n    die('could not connect! ' . mysqi_error());\n}\necho 'connect success! ';\nmysqli_close($conn);\n\n?>\n\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8 docker-compose (docker-compose.yml \u6240\u5728\u76ee\u5f55)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u5206\u522b\u8bbf\u95ee \u5982\u4e0b\u94fe\u63a5\u8fdb\u884c\u9a8c\u8bc1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http://ip:port\nhttp://ip:port/test.php\nhttp://ip:port/mysql.php\n")),(0,r.kt)("h2",{id:"3-docker-compose-\u5e38\u7528\u547d\u4ee4"},"3. docker-compose \u5e38\u7528\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5bb9\u5668\u542f\u52a8\ndocker-compose up\n\n# \u5bb9\u5668\u91cd\u65b0\u7f16\u8bd1\u540e\u542f\u52a8\nsudo docker-compose up --build\n\n# \u5bb9\u5668\u542f\u52a8 \u540e\u53f0\u542f\u52a8\nsudo docker-compose up -d --build\n\n# \u67e5\u8be2\u5bb9\u5668\u72b6\u6001\nsudo docker-compose ps\n\n# \u6267\u884c\u5bb9\u5668\u5185\u7684\u547d\u4ee4\nsudo docker-compose run \u5bb9\u5668\u540d top\n\n# \u67e5\u770b\u5bb9\u5668\u8f93\u51fa\u65e5\u5fd7\nsudo docker-compose logs -f \u5bb9\u5668\u540d\nsudo docker logs -f \u6807\u5377\n\n# \u5bb9\u5668\u505c\u6b62\nsudo docker-compose stop\n# \u5bb9\u5668\u505c\u6b62+\u6d88\u9664(\u5bb9\u5668+\u7f51\u7edc)\nsudo docker-compose down\n# \u5bb9\u5668\u505c\u6b62+\u6d88\u9664(\u5bb9\u5668+\u7f51\u7edc+\u955c\u50cf)\nsudo docker-compose down --rmi all\n")))}d.isMDXComponent=!0}}]);