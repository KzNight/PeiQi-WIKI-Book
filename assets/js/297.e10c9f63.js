(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{2810:function(t,a,s){t.exports=s.p+"assets/img/image-20220308101141481.5b658a46.png"},2811:function(t,a,s){t.exports=s.p+"assets/img/792b1dd1-a89f-497a-b43b-bae73a7ceff0.c2d87424.png"},2812:function(t,a,s){t.exports=s.p+"assets/img/8ff51702-0cc0-4d56-bcef-80d838e102cf.a36d9d08.png"},3588:function(t,a,s){"use strict";s.r(a);var e=s(68),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apache-mod-jk-访问控制权限绕过-cve-2018-11759"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-mod-jk-访问控制权限绕过-cve-2018-11759"}},[t._v("#")]),t._v(" Apache Mod_jk 访问控制权限绕过 CVE-2018-11759")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("Apache Tomcat JK（mod_jk）Connector是美国阿帕奇（Apache）软件基金会的一款为Apache或IIS提供连接后台Tomcat的模块，用以为Apache或IIS服务器提供处理JSP/Servlet的能力。")]),t._v(" "),a("p",[t._v("由于httpd和Tomcat在路径处理规范上存在差异，因此可以绕过Apache mod_jk Connector 1.2.0版本到1.2.44版本上由JkMount httpd指令所定义端点的访问控制限制。\n如果一个只有只读权限的jkstatus的接口可以访问的话，那么就有可能能够公开由mod_jk模块给AJP提供服务的内部路由。\n如果一个具有读写权限的jkstatus接口可供访问，我们就能通过修改AJP的配置文件中相关配置来劫持或者截断所有经过mod_jk的流量，又或者进行内部的端口扫描。")]),t._v(" "),a("h2",{attrs:{id:"影响版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[t._v("#")]),t._v(" 影响版本")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("Apache Mod_jk Connector 1.2.0 ~ 1.2.44")]),a("br"),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/immunIT/CVE-2018-11759.git\ndocker-conpose up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:s(2810),alt:"image-20220308101141481"}})]),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("访问 "),a("code",[t._v("http://xxx.xxx.xxx.xxx/jkstatus")]),t._v(" 显示无权限访问")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("You don't have permission to access /jkstatus on this server.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(2811),alt:"792b1dd1-a89f-497a-b43b-bae73a7ceff0"}})]),t._v(" "),a("p",[t._v("访问  "),a("code",[t._v("http://xxx.xxx.xxx.xxx/jkstatus;")]),t._v(" 即可绕过")]),t._v(" "),a("p",[a("img",{attrs:{src:s(2812),alt:"8ff51702-0cc0-4d56-bcef-80d838e102cf"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);