(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{249:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("0bdece54",content,!0,{sourceMap:!1})},250:function(t,e,n){t.exports=n.p+"img/octocat.b399271.png"},251:function(t,e,n){"use strict";n(249)},252:function(t,e,n){var r=n(33)(!1);r.push([t.i,".fixed_btn[data-v-15488d83]{position:fixed;bottom:15px;right:15px;border-radius:50%;width:70px;height:70px}.fixed_btn img[data-v-15488d83]{width:80%}",""]),t.exports=r},254:function(t,e,n){"use strict";n.r(e);var r={methods:{externalLink:function(){window.location.href="https://github.com/Shota0715"}}},o=(n(251),n(23)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"fixed_btn",on:{click:t.externalLink}},[r("img",{attrs:{src:n(250)}})])}),[],!1,null,"15488d83",null);e.default=component.exports},266:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("3d80c990",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";n(266)},282:function(t,e,n){var r=n(33)(!1);r.push([t.i,'.childMainVisual[data-v-0a1246c2]{text-align:center;padding:5em 0;background-color:#fafafa;margin-bottom:2.5em}@media screen and (min-width: 768px){.childMainVisual[data-v-0a1246c2]{margin-bottom:5em}}.childMainVisual__title[data-v-0a1246c2]{font-family:"Ubuntu",sans-serif;font-size:2.5rem;margin-bottom:.25em}.works[data-v-0a1246c2]{list-style:none}.works__item[data-v-0a1246c2]{width:100%}@media screen and (min-width: 768px){.works__item[data-v-0a1246c2]{width:calc((100% - 2.5em)/2)}}.works__item+.works__item[data-v-0a1246c2]{margin-top:1.5em}@media screen and (min-width: 768px){.works__item+.works__item[data-v-0a1246c2]{margin:0}}.works__inner[data-v-0a1246c2]{display:block}.works__image[data-v-0a1246c2]{margin-bottom:.5em}.works__image img[data-v-0a1246c2]{width:100%}.works__name[data-v-0a1246c2]{font-weight:bold}.works__date[data-v-0a1246c2]{font-size:.875rem}',""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(52),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$microcms,e.next=3,n.get({endpoint:"works"});case 3:return r=e.sent,e.abrupt("return",{works:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=o,l=(n(281),n(23)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"child"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("ol",{staticClass:"row works"},t._l(t.works.contents,(function(e){return n("li",{key:e.id,staticClass:"works__item"},[n("nuxt-link",{staticClass:"works__inner",attrs:{to:"/works/"+e.id+"/"}},[n("figure",{staticClass:"works__image"},[n("img",{attrs:{width:e.thumbnail.width,height:e.thumbnail.height,src:e.thumbnail.url,alt:e.title}})]),t._v(" "),n("div",{staticClass:"works__text"},[n("p",{staticClass:"works__name"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"works__date"},[n("time",{attrs:{datetime:e.date},domProps:{textContent:t._s(t.$dateFns.format(new Date(e.date),"yyyy.MM.dd"))}})])])])],1)})),0)]),t._v(" "),n("FloatingButton")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"childMainVisual"},[n("div",{staticClass:"container container--lg"},[n("h1",{staticClass:"childMainVisual__title"},[t._v("Works")]),t._v(" "),n("p",[t._v("成果物をご紹介します。")])])])}],!1,null,"0a1246c2",null);e.default=component.exports;installComponents(component,{FloatingButton:n(254).default})}}]);