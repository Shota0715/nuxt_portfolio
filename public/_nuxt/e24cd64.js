(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{129:function(e,t,n){"use strict";var o=n(2),m=n(179),r=n.n(m);o.a.use(r.a,{duration:700,easing:[0,0,.1,1],offset:-100})},170:function(e,t,n){var content=n(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("c5e9f800",content,!0,{sourceMap:!1})},171:function(e,t,n){var content=n(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("5213c7e9",content,!0,{sourceMap:!1})},172:function(e,t,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("b0dea01c",content,!0,{sourceMap:!1})},173:function(e,t,n){var content=n(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("485a9138",content,!0,{sourceMap:!1})},182:function(e,t,n){"use strict";n.r(t);var o=n(2).a.extend({name:"Loading",data:function(){return{loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}}),m=(n(231),n(23)),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",{staticClass:"loader-background"},[e._m(0)]):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"circle-border"},[t("div",{staticClass:"circle-core"})])}],!1,null,"6e5264c2",null);t.default=component.exports},183:function(e,t,n){"use strict";n(239);var o=n(23),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("TheHeader",{staticClass:"header"}),e._v(" "),n("main",{staticClass:"main"},[n("Nuxt")],1),e._v(" "),n("TheFooter")],1)}),[],!1,null,"635ab097",null);t.a=component.exports;installComponents(component,{TheHeader:n(247).default,TheFooter:n(248).default})},185:function(e,t,n){n(186),e.exports=n(187)},231:function(e,t,n){"use strict";n(170)},232:function(e,t,n){var o=n(33)(!1);o.push([e.i,"\n.loader-background[data-v-6e5264c2] {\n  z-index: 99;\n  position: fixed;\n  background:#0a0a0a;\n  opacity: 0.4;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/* .loader {\n  color: #ffffff;\n  font-size: 20px;\n  margin: 100px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n} */\n.circle-border[data-v-6e5264c2] {\n  width: 150px;\n  height: 150px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  position: relative;\n  background: rgb(245, 246, 101);\n  background: linear-gradient(0deg, rgba(245, 246, 101,0.1) 33%, rgb(245, 246, 101) 100%);\n  -webkit-animation: spin-data-v-6e5264c2 .8s infinite;\n  animation: spin-data-v-6e5264c2 .8s infinite;\n}\n@-webkit-keyframes spin-data-v-6e5264c2 {\nfrom {\n    transform: rotate(0);\n}\nto{\n    transform: rotate(359deg);\n}\n}\n@keyframes spin-data-v-6e5264c2 {\nfrom {\n    transform: rotate(0);\n}\nto{\n    transform: rotate(359deg);\n}\n}\n.circle-core[data-v-6e5264c2] {\n  width: 100%;\n  height: 100%;\n  background-color: #0a0a0a;\n  border-radius: 50%;\n}\n",""]),e.exports=o},235:function(e,t,n){var content=n(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("df88d454",content,!0,{sourceMap:!1})},236:function(e,t,n){var o=n(33)(!1);o.push([e.i,'html{box-sizing:border-box;height:100%}*,*::before,*::after{box-sizing:inherit}body{height:100%;font-family:"ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro","Osaka","メイリオ","Meiryo","ＭＳ Ｐゴシック","MS P Gothic",sans-serif;font-size:1rem;line-height:1.5;color:#010101;letter-spacing:.05em;background-color:#fff}img{max-width:100%;height:auto;vertical-align:bottom}a{color:inherit;text-decoration:none}h1,h2,h3,h4,h5,strong{font-weight:bold}input,textarea{max-width:100%;font-family:inherit;font-size:100%}',""]),e.exports=o},237:function(e,t,n){var content=n(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("b13bd09c",content,!0,{sourceMap:!1})},238:function(e,t,n){var o=n(33)(!1);o.push([e.i,'.visuallyHidden{position:absolute;top:0;left:0;white-space:nowrap;width:1px;height:1px;overflow:hidden;border:0;padding:0;clip:rect(0 0 0 0);clip-path:inset(50%);margin:-1px}.container{max-width:780px;width:90%;margin-left:auto;margin-right:auto}.container--lg{max-width:960px}.row{display:flex;justify-content:space-between;flex-wrap:wrap}.child{padding-bottom:5em}.background--gray{background-color:#fafafa}.sectionPrimary{padding:5em 0}@media screen and (min-width: 768px){.sectionPrimary{padding:7.5em 0}}.headingPrimary{font-family:"Ubuntu",sans-serif;font-size:2.5rem;font-weight:bold;text-transform:capitalize;text-align:center;margin-bottom:1em}.button-area{text-align:center;margin-top:2em}@media screen and (min-width: 768px){.button-area{margin-top:2.5em}}.buttonPrimary{color:#010101;display:inline-block;font-family:"Ubuntu",sans-serif;font-size:1.125rem;font-weight:bold;text-transform:capitalize;text-align:center;text-indent:-1em;line-height:56px;padding:0 1em;border:2px solid;border-radius:4px;min-width:230px;position:relative}.buttonPrimary::after{content:"";display:inline-block;width:24px;height:24px;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuNzUgNy41MDI0NEwxNSAxMi4wMDAyTDkuNzUgMTYuNTAyNCIgc3Ryb2tlPSIjMDEwMTAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=) center no-repeat;background-size:contain;position:absolute;top:50%;right:1em;transform:translateY(-50%);transition:all .3s ease-in-out}.buttonPrimary:hover::after{transform:translate(5px, -50%)}.buttonPrimary--leftArrow{text-indent:1em}.buttonPrimary--leftArrow::after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjI1IDcuNTAyNDRMOSAxMi4wMDAyTDE0LjI1IDE2LjUwMjQiIHN0cm9rZT0iIzAxMDEwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);background-size:contain;right:inherit;left:1em}.buttonPrimary--leftArrow:hover::after{transform:translate(-5px, -50%)}',""]),e.exports=o},239:function(e,t,n){"use strict";n(171)},240:function(e,t,n){var o=n(33)(!1);o.push([e.i,".wrapper[data-v-635ab097]{display:flex;flex-direction:column;min-height:100vh}.header[data-v-635ab097]{position:fixed;z-index:100}.main[data-v-635ab097]{flex:1;overflow-x:hidden;padding-top:4em}",""]),e.exports=o},241:function(e,t,n){"use strict";n(172)},242:function(e,t,n){var o=n(33)(!1);o.push([e.i,'.header[data-v-23714be9]{width:100%;box-shadow:0 1px 2px rgba(0,0,0,.1);background-color:#fff}.headerContainer[data-v-23714be9]{padding:0 1.5em;display:flex;justify-content:space-between;align-items:center}@media screen and (min-width: 768px){.headerContainer[data-v-23714be9]{padding:0 4em}}.logo[data-v-23714be9]{color:#010101;font-family:"Ubuntu",sans-serif;font-size:1.125rem;font-weight:bold;letter-spacing:0}@media screen and (min-width: 768px){.logo[data-v-23714be9]{font-size:1.5rem}}.menu[data-v-23714be9]{list-style:none;display:flex;margin-right:-0.75em}.menu__link[data-v-23714be9]{font-family:"Ubuntu",sans-serif;font-weight:bold;text-transform:capitalize;line-height:64px;display:inline-block;padding:0 .25em;position:relative}@media screen and (min-width: 768px){.menu__link[data-v-23714be9]{padding:0 .75em}}.menu__link[data-v-23714be9]::after{content:"";display:block;width:0;height:2px;background-color:#010101;transition:all .3s ease-in-out;position:absolute;left:0;bottom:0}.menu__link[data-v-23714be9]:hover::after{width:100%}.nav-list[data-v-23714be9]{list-style:none;padding:0;margin:0}.nav-item[data-v-23714be9]{margin:20px 0}.nav-item a[data-v-23714be9]{text-decoration:none;color:#fff;font-size:1.5rem}.menu-link[data-v-23714be9]{font-family:"Ubuntu",sans-serif;font-weight:bold;text-transform:capitalize;line-height:64px;display:inline-block;padding:0 .25em;position:relative}@media screen and (min-width: 768px){.menu-link[data-v-23714be9]{padding:0 .75em}}.menu-link[data-v-23714be9]::after{content:"";display:block;width:0;height:2px;background-color:#fff;transition:all .3s ease-in-out;position:absolute;left:0;bottom:0}.menu-link[data-v-23714be9]:hover::after{width:100%}.nav-item a[data-v-23714be9]:hover,.nav-item a[data-v-23714be9]:active,.nav-item a.nuxt-link-active[data-v-23714be9]{color:#16a085}#g-nav.panelactive[data-v-23714be9]{position:fixed;z-index:999;width:100%;height:100vh;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%)}.circle-bg[data-v-23714be9]{position:fixed;z-index:3;width:100px;height:100px;border-radius:50%;background:#000;transform:scale(0);right:-50px;top:-50px;transition:all .6s}.circle-bg.circleactive[data-v-23714be9]{transform:scale(50)}#g-nav-list[data-v-23714be9]{display:none;position:fixed;z-index:999;width:100%;height:100vh;overflow:auto;-webkit-overflow-scrolling:touch}#g-nav.panelactive #g-nav-list[data-v-23714be9]{display:block}#g-nav ul[data-v-23714be9]{opacity:0;position:absolute;z-index:999;top:50%;left:50%;transform:translate(-50%, -50%)}#g-nav.panelactive ul[data-v-23714be9]{opacity:1}#g-nav.panelactive ul li[data-v-23714be9]{animation-name:gnaviAnime-data-v-23714be9;animation-duration:1s;animation-delay:.2s;animation-fill-mode:forwards;opacity:0}@keyframes gnaviAnime-data-v-23714be9{0%{opacity:0}100%{opacity:1}}#g-nav li[data-v-23714be9]{text-align:center;list-style:none}.openbtn[data-v-23714be9]{position:relative;z-index:9999;cursor:pointer;width:50px;height:50px}.openbtn span[data-v-23714be9]{display:inline-block;transition:all .4s;position:absolute;left:14px;height:3px;border-radius:2px;background:#666}.openbtn span[data-v-23714be9]:nth-of-type(1){top:15px;width:45%}.openbtn span[data-v-23714be9]:nth-of-type(2){top:23px;width:35%}.openbtn span[data-v-23714be9]:nth-of-type(3){top:31px;width:20%}.openbtn.active span[data-v-23714be9]:nth-of-type(1){top:18px;left:18px;transform:translateY(6px) rotate(-135deg);width:30%}.openbtn.active span[data-v-23714be9]:nth-of-type(2){opacity:0}.openbtn.active span[data-v-23714be9]:nth-of-type(3){top:30px;left:18px;transform:translateY(-6px) rotate(135deg);width:30%}',""]),e.exports=o},243:function(e,t,n){"use strict";n(173)},244:function(e,t,n){var o=n(33)(!1);o.push([e.i,'.footer[data-v-4b970c2b]{padding:1em 0;background-color:#fafafa}.copyright[data-v-4b970c2b]{font-size:.875rem;font-family:"Ubuntu",sans-serif;text-align:center}',""]),e.exports=o},245:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return o})),n.d(t,"mutations",(function(){return m})),n.d(t,"getters",(function(){return r}));n(62);var o=function(){return{runningIds:[],terminateIds:[],shouldBeStopped:!1}},m={addRunningIds:function(e,t){e.runningIds.push(t)},moveRunningIdsToTerminateIds:function(e){e.terminateIds=e.terminateIds.concat(e.runningIds),e.runningIds=[]},start:function(e){e.shouldBeStopped=!1},stop:function(e){e.shouldBeStopped=!0}},r={isRunning:function(e){return e.runningIds.length>0},shouldBeStopped:function(e){return e.shouldBeStopped},shouldProcessBeTerminated:function(e){return function(t){return e.terminateIds.indexOf(t)>=0}}}},246:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=246},247:function(e,t,n){"use strict";n.r(t);n(22);var o={data:function(){return{windowWidth:900,isActiveMenu:!1}},computed:{isTopPage:function(){return"index"===this.$route.name},isMobile:function(){return this.windowWidth<1200}},mounted:function(){var e=this;this.windowWidth=window.innerWidth,this.$nextTick((function(){window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))}))}},m=(n(241),n(23)),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"headerContainer"},[n(e.isTopPage?"h1":"p",{tag:"component",staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[e._v("Miguel's Portfolio")])],1),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"openbtn",class:{active:e.isActiveMenu},attrs:{type:"button"},on:{click:function(t){e.isActiveMenu=!e.isActiveMenu}}},[n("span"),n("span"),n("span")]),e._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:e.isMobile&&e.isActiveMenu,expression:"isMobile && isActiveMenu"}],class:{panelactive:e.isActiveMenu},attrs:{id:"g-nav"}},[n("ul",{staticClass:"nav-list"},[n("li",{staticClass:"nav-item",on:{click:function(t){e.isActiveMenu=!e.isActiveMenu}}},[n("nuxt-link",{staticClass:"menu-link",attrs:{to:"/#about"}},[e._v("\n            about\n          ")])],1),e._v(" "),n("li",{staticClass:"nav-item",on:{click:function(t){e.isActiveMenu=!e.isActiveMenu}}},[n("nuxt-link",{staticClass:"menu-link",attrs:{to:"/works"}},[e._v("\n            works\n          ")])],1),e._v(" "),n("li",{staticClass:"nav-item",on:{click:function(t){e.isActiveMenu=!e.isActiveMenu}}},[n("a",{staticClass:"menu-link",attrs:{href:"https://next-nft-marketplace.vercel.app/tutorial",target:"_blank"}},[e._v("\n            NFTStore(demo)\n          ")])]),e._v(" "),n("li",{staticClass:"nav-item",on:{click:function(t){e.isActiveMenu=!e.isActiveMenu}}},[n("nuxt-link",{staticClass:"menu-link",attrs:{to:"/contact"}},[e._v("\n            contact\n          ")])],1)])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"circle-bg",class:{circleactive:e.isActiveMenu}}),e._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}]},[n("ul",{staticClass:"menu"},[n("li",[n("nuxt-link",{staticClass:"menu__link",attrs:{to:"/#about"}},[e._v("about")])],1),e._v(" "),n("li",[n("nuxt-link",{staticClass:"menu__link",attrs:{to:"/works"}},[e._v("works")])],1),e._v(" "),e._m(0),e._v(" "),n("li",[n("nuxt-link",{staticClass:"menu__link",attrs:{to:"/contact"}},[e._v("contact")])],1)])])],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{staticClass:"menu__link",attrs:{href:"https://next-nft-marketplace.vercel.app/tutorial",target:"_blank"}},[e._v("NFTStore(demo)")])])}],!1,null,"23714be9",null);t.default=component.exports},248:function(e,t,n){"use strict";n.r(t);n(243);var o=n(23),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("p",{staticClass:"copyright"},[n("small",[e._v("©️2022 Miguel All Rights Reserved.")])])])}],!1,null,"4b970c2b",null);t.default=component.exports}},[[185,13,2,14]]]);