(window.webpackJsonp=window.webpackJsonp||[]).push([[1,3,17,31,58,108,306,308],{2938:function(t,e,s){"use strict";s.r(e);s(436),s(49),s(85),s(131),s(186);var n=s(53),i=s.n(n),r=(t,e,s=null)=>{let n=i()(e,"title","");return i()(e,"frontmatter.tags")&&(n+=" "+e.frontmatter.tags.join(" ")),s&&(n+=" "+s),a(t,n)};const a=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),n=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(n.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const n=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||n?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var o={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,n=this.$localePath,i=[];for(let a=0;a<e.length&&!(i.length>=s);a++){const o=e[a];if(this.getPageLocalePath(o)===n&&this.isSearchable(o))if(r(t,o))i.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(i.length>=s);e++){const s=o.headers[e];s.title&&r(t,o,s.title)&&i.push(Object.assign({},o,{path:o.path+"#"+s.slug,header:s}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},l=(s(839),s(68)),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,n){return e("li",{key:n,staticClass:"suggestion",class:{focused:n===t.focusIndex},on:{mousedown:function(e){return t.go(n)},mouseenter:function(e){return t.focus(n)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,c=s(833),h=s(803),d=s(815),p=s(775),f={name:"Navbar",components:{NavButton:c.default,NavLinks:h.default,SearchBox:u,AlgoliaSearchBox:{},Sidebar:d.default},data:()=>({sidebar_visible:!1,sidebar_open:!1}),created(){this.$store.state.global.navStyle="horizontal"},methods:{isOpenDrawer(){this.sidebar_visible=!this.sidebar_visible,this.sidebar_open=!this.sidebar_open,document.getElementById("app").classList.toggle("toggle-sidebar")}},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(p.i)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}}},g=(s(840),Object(l.a)(f,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("a-row",[e("NavButton"),t._v(" "),e("a-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:5,xxl:4}},[e("RouterLink",{class:{"no-logo":!t.$site.themeConfig.logo,"home-link":!0},attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox",{staticClass:"mobile-search"}):t._e()],1),t._v(" "),e("a-col",{staticClass:"nav-space-between",attrs:{xs:0,sm:0,md:18,lg:18,xl:19,xxl:20}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1),t._v(" "),t.shouldShowSidebar?e("a-drawer",{attrs:{placement:"left",closable:!1,visible:t.sidebar_visible,wrapClassName:"sidebarWrap"},on:{close:t.isOpenDrawer}},[e("div",{attrs:{slot:"handle"},slot:"handle"},[e("div",{class:{"drawer-open":t.sidebar_open,"drawer-handle":!0},on:{click:t.isOpenDrawer}},[e("i",{staticClass:"drawer-handle-icon"})])]),t._v(" "),e("Sidebar",{staticClass:"mobile-sidebar",attrs:{items:t.sidebarItems}})],1):t._e()],1)}),[],!1,null,null,null));e.default=g.exports},775:function(t,e,s){"use strict";s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return r})),s.d(e,"f",(function(){return a})),s.d(e,"b",(function(){return u})),s.d(e,"e",(function(){return c})),s.d(e,"h",(function(){return h})),s.d(e,"i",(function(){return d})),s.d(e,"c",(function(){return p})),s.d(e,"g",(function(){return f}));s(436),s(49),s(85),s(132),s(131);const n=/#.*$/,i=/\.(md|html)$/,r=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return a.test(t)}function u(t){if(l(t))return t;const e=t.match(n),s=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+s}function c(t,e){const s=t.hash,i=function(t){const e=t.match(n);if(e)return e[0]}(e);if(i&&s!==i)return!1;return o(t.path)===o(e)}function h(t,e,s){if(l(e))return{type:"external",path:e};s&&(e=function(t,e,s){const n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;const i=e.split("/");s&&i[i.length-1]||i.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,s));const n=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===n)return Object.assign({},t[e],{type:"page",path:u(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,s,n){const{pages:i,themeConfig:r}=s,a=n&&r.locales&&r.locales[n]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){const e=p(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||r.sidebar;if(o){const{base:t,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===(s=t,/(\.html|\/)$/.test(s)?s:s+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var s;return{}}(e,o);return s?s.map(e=>function t(e,s,n,i=1){if("string"==typeof e)return h(s,e,n);if(Array.isArray(e))return Object.assign(h(s,e[0],n),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const r=e.children||[];return 0===r.length&&e.path?Object.assign(h(s,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map(e=>t(e,s,n,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function p(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},776:function(t,e,s){},777:function(t,e,s){},778:function(t,e,s){},779:function(t,e,s){},780:function(t,e,s){},784:function(t,e,s){"use strict";s(776)},785:function(t,e,s){"use strict";var n=s(20),i=s(133),r=s(44),a=s(31),o=s(86);n({target:"Iterator",proto:!0,real:!0},{find:function(t){a(this),r(t);var e=o(this),s=0;return i(e,(function(e,n){if(t(e,s++))return n(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},786:function(t,e,s){"use strict";s(777)},787:function(t,e,s){"use strict";s.r(e);s(49),s(186);var n=s(804),i=s(789),r=s(775);function a(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?a(t,e):"page"===e.type&&Object(r.e)(t,e.path))}var o={name:"SidebarLinks",components:{SidebarGroup:n.default,SidebarLink:i.default},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const n=e[s];if(a(t,n))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(r.e)(this.$route,t.regularPath)}}},l=s(68),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,n){return e("li",{key:n},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:n===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},788:function(t,e,s){"use strict";s.r(e);var n={name:"ThemeSwitch",data:()=>({isDarkMode:!1}),methods:{getSchemeStorage(t){if("undefined"==typeof localStorage)return;let e=localStorage.getItem(t);return"light"===e||"dark"!==e},setSchemeStorage:t=>!0===t?"dark":"light",switchScheme(){var t;if(this.isDarkMode=!this.isDarkMode,"undefined"==typeof localStorage)return;localStorage.setItem("antdocs-color-scheme",this.setSchemeStorage(this.isDarkMode));const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},mounted(){var t;this.isDarkMode=!this.getSchemeStorage("antdocs-color-scheme");const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},i=(s(784),s(68)),r=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-switch",on:{click:function(e){return t.switchScheme()}}},[e("a-tooltip",{attrs:{placement:"bottom"}},[e("template",{slot:"title"},[e("span",[t._v(t._s(t.isDarkMode?"切换亮色模式":"切换暗黑模式"))])]),t._v(" "),t.isDarkMode?e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{d:"M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linejoin":"round"}})])])]):e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 3V6.15V3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 3V6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 9.15076L36.6219 11.3781L38.8492 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 9.15076L36.6219 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M45 24H41.85H45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M45 24H41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 38.8492L36.6219 36.6219L38.8492 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 38.8492L36.6219 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 45V41.85V45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 45V41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 38.8492L11.3781 36.6219L9.15076 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 38.8492L11.3781 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 24H6.15H3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M3 24H6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 9.15076L11.3781 11.3781L9.15076 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 9.15076L11.3781 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",fill:"none",stroke:"#333","stroke-width":"4","stroke-linejoin":"round"}})])])])],2)],1)}),[],!1,null,null,null);e.default=r.exports},789:function(t,e,s){"use strict";s.r(e);s(49),s(785),s(131),s(186);var n=s(775);function i(t,e,s,n,i){const r={props:{to:e,activeClass:"",exactActiveClass:""},attrs:{title:s},class:{active:n,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,s)}function r(t,e,s,a,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(n.e)(a,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,s+"#"+e.slug,e.title,u,e.level-1),r(t,e.children,s,a,o,l+1)])}))}var a={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:a,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const h=Object(n.e)(a,u.path),d="auto"===u.type?h||u.children.some(t=>Object(n.e)(a,u.basePath+"#"+t.slug)):h,p="external"===u.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,u.path,u.title||u.path):i(t,u.path,u.title||u.path,d),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),g=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[p,r(t,u.children,u.basePath,a,f)];if((d||g)&&u.headers&&!n.d.test(u.path)){return[p,r(t,Object(n.c)(u.headers),u.path,a,f)]}return p}},o=(s(786),s(68)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);e.default=l.exports},791:function(t,e,s){"use strict";s(778)},792:function(t,e,s){},793:function(t,e,s){"use strict";s(779)},794:function(t,e,s){"use strict";s(780)},795:function(t,e,s){},803:function(t,e,s){"use strict";s.r(e);s(49),s(131),s(186);var n=s(775),i={name:"NavLinks",components:{ThemeSwitch:s(788).default},data(){return{currentStyle:this.$store.state.global.navStyle,routesPath:""}},created(){this.routesPath=JSON.stringify(this.$themeConfig.locales?this.$themeConfig.locales[this.$localePath].nav:this.$themeConfig.nav)},methods:{isBlankTarget:t=>"_blank"===t,isExternal:t=>/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t),isInternal(t,e){return!this.isExternal(t)&&!this.isBlankTarget(e)},target(t,e){return t||(this.isExternal(e)?"_blank":"")},link(t){t=void 0===t?"":t;let e=Object(n.b)(t);return e=5===e.length&&".html"===e?this.geneKey():e,e},geneKey:()=>Math.random().toString(36).substr(2,10)+(new Date).getTime(),currentPath(t){const e=this.routesPath;if(-1!=e.indexOf(t))return t;if(".html"===t.slice(-5)){let s=t.replace(".html","");if(-1!=e.indexOf(s))return t;return t.replace(/[^\/]+$/,"")}return t.replace(/[^\/]+$/,"")},activePage(t){if(-1==this.routesPath.indexOf("activeMatch"))return this.currentPath(t);for(let e=0;e<this.userLinks.length;e++)if(void 0!==this.userLinks[e].activeMatch)return new RegExp(this.userLinks[e].activeMatch).test(t)?this.userLinks[e].link:this.currentPath(t)}},computed:{currentPage(){return[this.activePage(this.$page.path)]},userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,n=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const r=t[i],a=n[i]&&n[i].label||r.lang;let o;return r.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),s.some(t=>t.path===o)||(o=i)),{text:a,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){const t=(this.nav||[]).map(t=>Object.assign(Object(n.g)(t),{items:(t.items||[]).map(n.g)}));return this.routesPath=JSON.stringify(t),t},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["github","gitlab"];for(let s=0;s<e.length;s++){const n=e[s];if(new RegExp(n,"i").test(t))return n}return"global"},isDarkMode(){return this.$themeConfig.isDarkMode||!1}}},r=(s(791),s(68)),a=Object(r.a)(i,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[e("a-menu",{attrs:{mode:t.currentStyle,id:"nav",selectable:!1,forceSubMenuRender:!0},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}},[t._l(t.userLinks,(function(s){return["links"===s.type?e("a-sub-menu",{key:t.link(s.link)},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n          "+t._s(s.text)+"\n        ")]),t._v(" "),t._l(s.items,(function(s,n){return["links"===s.type?e("a-menu-item-group",{key:t.link(s.link)||n,attrs:{title:s.text}},t._l(s.items,(function(s){return e("a-menu-item",{key:t.link(s.link)},[t.isInternal(s.link,s.target)?e("RouterLink",{attrs:{to:t.link(s.link)}},[t._v("\n                "+t._s(s.text)+"\n              ")]):e("a",{attrs:{href:s.link,target:t.target(s.target,s.link),rel:"noopener noreferrer"}},[t._v("\n                "+t._s(s.text)+"\n                "),t.isInternal(s.link,s.target)?t._e():e("a-icon",{attrs:{type:"link"}})],1)],1)})),1):e("a-menu-item",{key:t.link(s.link)},[t.isInternal(s.link,s.target)?e("RouterLink",{attrs:{to:t.link(s.link)}},[t._v("\n              "+t._s(s.text)+"\n            ")]):e("a",{attrs:{href:s.link,target:t.target(s.target,s.link),rel:"noopener noreferrer"}},[t._v("\n              "+t._s(s.text)+"\n              "),t.isInternal(s.link,s.target)?t._e():e("a-icon",{attrs:{type:"link"}})],1)],1)]}))],2):e("a-menu-item",{key:t.link(s.link)},[t.isInternal(s.link,s.target)?e("RouterLink",{attrs:{to:t.link(s.link)}},[t._v("\n          "+t._s(s.text)+"\n        ")]):e("a",{attrs:{href:t.link(s.link),target:t.target(s.target,s.link)}},[t._v("\n          "+t._s(s.text)+"\n          "),t.isInternal(s.link,s.target)?t._e():e("a-icon",{attrs:{type:"link"}})],1)],1)]}))],2),t._v(" "),e("ul",{staticClass:"extra-group"},[t.repoLink?e("li",[e("a-tooltip",{attrs:{placement:"bottom"}},[e("template",{slot:"title"},[e("span",{staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(t.repoLabel))])]),t._v(" "),e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e("a-icon",{attrs:{type:t.repoLabel}})],1)],2)],1):t._e(),t._v(" "),t.isDarkMode?e("li",[e("ThemeSwitch")],1):t._e()])],1):t._e()}),[],!1,null,null,null);e.default=a.exports},804:function(t,e,s){"use strict";s.r(e);var n={name:"SidebarGroup",props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(787).default},methods:{isActive:s(775).e}},i=(s(793),s(68)),r=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"},[e("a-icon",{attrs:{type:"down"}})],1):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"},[e("a-icon",{attrs:{type:"down"}})],1):t._e()]),t._v(" "),t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)}),[],!1,null,null,null);e.default=r.exports},805:function(t,e,s){"use strict";s.r(e);var n={name:"Promo",methods:{gotoLink(){window.open(this.data.link)},popupInfo(){this.$info({title:this.data.msgTitle||"Message Title",content:this.data.msgText||"Put your text here.",okText:this.data.msgOkText||"Ok",maskClosable:!0})}},computed:{data(){return this.$themeConfig.ads}}},i=(s(794),s(68)),r=Object(i.a)(n,(function(){var t=this,e=t._self._c;return t.data?e("div",[e("div",{staticClass:"promo"},[1===t.data.style?e("div",{attrs:{id:"promo_1"},on:{click:t.gotoLink}},[e("img",{attrs:{src:t.data.image}}),t._v(" "),e("span",{attrs:{title:t.data.text}},[t._v(t._s(t.data.text||"No text"))])]):2===t.data.style?e("div",{attrs:{id:"promo_2"}},[e("a-carousel",{attrs:{autoplay:"",autoplaySpeed:t.data.speed||3e3}},t._l(t.data.items,(function(t,s){return e("div",{key:s},[e("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:t.image,title:t.text}})])])})),0)],1):e("div",{attrs:{id:"promo_3"}},[e("div",{staticClass:"promo_title"},[t._v(t._s(t.data.title||"Sponsor"))]),t._v(" "),e("a-button",{attrs:{type:"primary",ghost:""},on:{click:t.popupInfo}},[t._v(t._s(t.data.btnText||"Become a Sponsor"))])],1)]),t._v(" "),e("a-divider",{attrs:{dashed:"",id:"reset-margin"}})],1):t._e()}),[],!1,null,null,null);e.default=r.exports},810:function(t,e,s){"use strict";s(792)},811:function(t,e,s){"use strict";s(795)},815:function(t,e,s){"use strict";s.r(e);var n=s(787),i=s(805),r={name:"Sidebar",components:{SidebarLinks:n.default,Promo:i.default},props:["items"]},a=(s(811),s(68)),o=Object(a.a)(r,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[this.$themeConfig.ads?t("Promo"):this._e(),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},818:function(t,e,s){},819:function(t,e,s){},833:function(t,e,s){"use strict";s.r(e);var n={components:{NavLinks:s(803).default},data:()=>({popover_visible:!1}),methods:{showMenu(){this.$store.state.global.navStyle="inline",this.popover_visible=!0}}},i=(s(810),s(68)),r=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-button",on:{click:t.showMenu}},[e("a-icon",{attrs:{type:"bars"}}),t._v(" "),e("a-popover",{attrs:{placement:"bottomRight",trigger:"click",overlayClassName:"reset-popover"},model:{value:t.popover_visible,callback:function(e){t.popover_visible=e},expression:"popover_visible"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("NavLinks")],1)])],1)}),[],!1,null,null,null);e.default=r.exports},839:function(t,e,s){"use strict";s(818)},840:function(t,e,s){"use strict";s(819)}}]);