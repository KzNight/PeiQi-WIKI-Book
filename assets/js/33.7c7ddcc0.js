(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1029:function(a,t,s){a.exports=s.p+"assets/img/image-20220419194933306.1c47d5e7.png"},1030:function(a,t,s){a.exports=s.p+"assets/img/image-20220419195635050.79c3bcd6.png"},1031:function(a,t,s){a.exports=s.p+"assets/img/image-20220419200828079.ee0edcac.png"},1032:function(a,t,s){a.exports=s.p+"assets/img/image-20220419201924602.1044b60e.png"},1033:function(a,t,s){a.exports=s.p+"assets/img/image-20220419202019194.36f62e36.png"},1034:function(a,t,s){a.exports=s.p+"assets/img/image-20220419211706158.18c4cd8a.png"},1035:function(a,t,s){a.exports=s.p+"assets/img/image-20220419211857588.0574b225.png"},1036:function(a,t,s){a.exports=s.p+"assets/img/image-20220419213530625.1ee51956.png"},1037:function(a,t,s){a.exports=s.p+"assets/img/image-20220419213630109.038a3713.png"},2995:function(a,t,s){"use strict";s.r(t);var n=s(68),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"命令行模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行模式"}},[a._v("#")]),a._v(" 命令行模式")]),a._v(" "),t("p",[a._v("在PHP的配置文件 php.ini 中，有一个与PHP执行相关的参数配置 "),t("code",[a._v("register_argc_argv")]),a._v(", 其中主要存在两种模式来进行参数传递，一种是CLI模式，另一种为Web模式")]),a._v(" "),t("p",[t("img",{attrs:{src:s(1029),alt:"image-20220419194933306"}})]),a._v(" "),t("p",[a._v("首先我们先使用代码了解CLI模式下的参数传递, 根据文档我们看到变量传递主要是参数 "),t("code",[a._v("$argc")]),a._v(" 与 "),t("code",[a._v("$argv")])]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$argc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$argv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:s(1030),alt:"image-20220419195635050"}})]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("函数")]),a._v(" "),t("th",[a._v("类型/值")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("register_argc_argv")]),a._v(" "),t("td",[a._v("boolean")]),a._v(" "),t("td",[a._v("Tells PHP whether to declare the argv & argc variables (that would contain the GET information). See also command line.")])]),a._v(" "),t("tr",[t("td",[a._v("register_argc_argv")]),a._v(" "),t("td",[a._v("TRUE")]),a._v(" "),t("td",[a._v('Setting this to TRUE means that scripts executed via the CLI SAPI always have access to argc (number of arguments passed to the application) and argv (array of the actual arguments).The PHP variables $argc and $argv are automatically set to the appropriate values when using the CLI SAPI. These values can also be found in the $_SERVER array, for example: $_SERVER["argv"].')])])])]),a._v(" "),t("p",[a._v("这里是对 "),t("code",[a._v("register_argc_argv")]),a._v(" 配置开启与不开启的一个描述，当我们想要从 Url中赋值给参数 "),t("code",[a._v("$_SERVER['argv']")]),a._v("时，就需要在配置文件中打开选项")]),a._v(" "),t("p",[t("img",{attrs:{src:s(1031),alt:"image-20220419200828079"}})]),a._v(" "),t("p",[a._v("我们对比下配置打开与不打开参数传入的变化")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"argv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:s(1032),alt:"image-20220419201924602"}})]),a._v(" "),t("p",[t("img",{attrs:{src:s(1033),alt:"image-20220419202019194"}})]),a._v(" "),t("p",[a._v("这里可以发现只有当该配置打开时，"),t("code",[a._v("$_SERVER")]),a._v(" 才会通过Web中的请求进行 "),t("code",[a._v("argv 参数")]),a._v("的赋值，我们在源码中看一下 "),t("code",[a._v("argv参数")]),a._v("的处理方法")]),a._v(" "),t("p",[t("img",{attrs:{src:s(1034),alt:"image-20220419211706158"}})]),a._v(" "),t("p",[a._v("我们可以注意到实际参数传递过程为 "),t("code",[a._v("+号")]),a._v(" 分割，测试参数传递 "),t("code",[a._v("argv[0]=a, argv[1]=b, argv[2]=c")])]),a._v(" "),t("p",[t("img",{attrs:{src:s(1035),alt:"image-20220419211857588"}})]),a._v(" "),t("p",[a._v("例如如下的代码，当"),t("code",[a._v("$_SERVER['argv']")]),a._v("可控时，我们就可以通过参数传递来达到变量的控制")]),a._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'argv'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("switch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"echo"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"abc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"ping"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$b")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"argv"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shell_exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"/sbin/ping -c 1 '),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$b")])]),a._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("p",[a._v("正常使用逻辑应为PHP文件调用执行 ping 命令")]),a._v(" "),t("p",[t("img",{attrs:{src:s(1036),alt:"image-20220419213530625"}})]),a._v(" "),t("p",[t("code",[a._v("register_argc_argv")]),a._v(" 配置为 On，可从Web请求控制 "),t("code",[a._v("argv参数")]),a._v(" 时")]),a._v(" "),t("p",[t("img",{attrs:{src:s(1037),alt:"image-20220419213630109"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);