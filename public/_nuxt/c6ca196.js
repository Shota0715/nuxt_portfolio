(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{243:function(t,e,r){var content=r(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("62b79211",content,!0,{sourceMap:!1})},248:function(t,e,r){"use strict";r(243)},249:function(t,e,r){var n=r(30)(!1);n.push([t.i,'.worksMainVisual[data-v-c40110a8]{padding:5em 0;background-color:#fafafa;margin-bottom:2.5em}@media screen and (min-width:768px){.worksMainVisual[data-v-c40110a8]{margin-bottom:5em}}.worksMainVisual__inner[data-v-c40110a8]{display:flex;justify-content:space-between;flex-wrap:wrap;flex-direction:column-reverse}@media screen and (min-width:768px){.worksMainVisual__inner[data-v-c40110a8]{flex-direction:row}}@media screen and (min-width:768px){.worksMainVisual__contents[data-v-c40110a8]{width:39.58%}}.worksMainVisual__thumbnail[data-v-c40110a8]{width:100%;margin-bottom:1.75em}@media screen and (min-width:768px){.worksMainVisual__thumbnail[data-v-c40110a8]{width:56.25%}}.worksMainVisual__thumbnail img[data-v-c40110a8]{width:100%}.worksMainVisual__title[data-v-c40110a8]{font-size:2rem;margin-bottom:.125em}.worksMainVisual__item[data-v-c40110a8]{margin-bottom:.5em}.worksMainVisual__itemName[data-v-c40110a8]{font-size:1.125rem;font-weight:700;margin-bottom:.222em}.worksItem__title[data-v-c40110a8]{font-size:1.5rem;font-weight:700;margin-bottom:.333em}.worksItem__contents[data-v-c40110a8]{white-space:pre-wrap}.worksItem__contents span+span[data-v-c40110a8]:before{content:"/";display:inline-block;margin:0 .5em}.worksItem+.worksItem[data-v-c40110a8]{margin-top:1.5em}',""]),t.exports=n},255:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(47),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$microcms,n=t.params,e.next=3,r.get({endpoint:"works/".concat(n.id)});case 3:return o=e.sent,e.abrupt("return",{work:o});case 5:case"end":return e.stop()}}),e)})))()}}),l=(r(248),r(26)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"child"},[r("div",{staticClass:"worksMainVisual"},[r("div",{staticClass:"container container--lg worksMainVisual__inner"},[r("div",{staticClass:"worksMainVisual__contents"},[r("h1",{staticClass:"worksMainVisual__title"},[t._v(t._s(t.work.title))]),t._v(" "),t.work.release?r("dl",{staticClass:"worksMainVisual__item"},[r("dt",{staticClass:"worksMainVisual__itemName"},[t._v("リリース日")]),t._v(" "),r("dd",[r("time",{attrs:{datetime:t.work.release},domProps:{textContent:t._s(t.$dateFns.format(new Date(t.work.release),"yyyy.MM.dd"))}})])]):t._e(),t._v(" "),t.work.term?r("dl",{staticClass:"worksMainVisual__item"},[r("dt",{staticClass:"worksMainVisual__itemName"},[t._v("制作期間")]),t._v(" "),r("dd",[t._v(t._s(t.work.term))])]):t._e(),t._v(" "),t.work.overview?r("p",[t._v(t._s(t.work.overview))]):t._e()]),t._v(" "),r("figure",{staticClass:"worksMainVisual__thumbnail"},[r("img",{attrs:{width:t.work.thumbnail.width,height:t.work.thumbnail.height,src:t.work.thumbnail.url,alt:t.work.title}})])])]),t._v(" "),r("div",{staticClass:"container"},[r("dl",{staticClass:"worksItem"},[r("dt",{staticClass:"worksItem__title"},[t._v("URL")]),t._v(" "),r("dd",{staticClass:"worksItem__contents"},[r("a",{attrs:{href:t.work.url,target:"_blank"}},[t._v(t._s(t.work.url))])])]),t._v(" "),t.work.position?r("dl",{staticClass:"worksItem"},[r("dt",{staticClass:"worksItem__title"},[t._v("ポジション")]),t._v(" "),r("dd",{staticClass:"worksItem__contents"},[t._v(t._s(t.work.position))])]):t._e(),t._v(" "),t.work.responsibility?r("dl",{staticClass:"worksItem"},[r("dt",{staticClass:"worksItem__title"},[t._v("担当")]),t._v(" "),r("dd",{staticClass:"worksItem__contents"},t._l(t.work.responsibility,(function(e,n){return r("span",{key:n,domProps:{textContent:t._s(e)}})})),0)]):t._e(),t._v(" "),r("dl",{staticClass:"worksItem"},[r("dt",{staticClass:"worksItem__title"},[t._v("技術")]),t._v(" "),r("dd",{staticClass:"worksItem__contents"},t._l(t.work.skill,(function(e,n){return r("span",{key:n,domProps:{textContent:t._s(e)}})})),0)]),t._v(" "),t.work.tools?r("dl",{staticClass:"worksItem"},[r("dt",{staticClass:"worksItem__title"},[t._v("ツール")]),t._v(" "),r("dd",{staticClass:"worksItem__contents"},t._l(t.work.tools,(function(e,n){return r("span",{key:n,domProps:{textContent:t._s(e)}})})),0)]):t._e(),t._v(" "),r("dl",{staticClass:"worksItem"},[r("dt",{staticClass:"worksItem__title"},[t._v("一言")]),t._v(" "),r("dd",{staticClass:"worksItem__contents"},[t._v(t._s(t.work.comment))])])]),t._v(" "),r("p",{staticClass:"button-area"},[r("nuxt-link",{staticClass:"buttonPrimary buttonPrimary--leftArrow",attrs:{to:"/works"}},[t._v("back")])],1)])}),[],!1,null,"c40110a8",null);e.default=component.exports}}]);