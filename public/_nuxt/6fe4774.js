(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{288:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("54e434b2",content,!0,{sourceMap:!1})},289:function(t,e,o){t.exports=o.p+"img/octocat.b399271.png"},290:function(t,e,o){"use strict";o(288)},291:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".fixed_btn[data-v-15488d83]{border-radius:50%;bottom:15px;height:70px;position:fixed;right:15px;width:70px}.fixed_btn img[data-v-15488d83]{width:80%}",""]),n.locals={},t.exports=n},293:function(t,e,o){"use strict";o.r(e);var n={methods:{externalLink:function(){window.location.href="https://github.com/Shota0715"}}},r=(o(290),o(26)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("button",{staticClass:"fixed_btn",on:{click:this.externalLink}},[t("img",{attrs:{src:o(289)}})])}),[],!1,null,"15488d83",null);e.default=component.exports},306:function(t,e,o){var content=o(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("03b038e6",content,!0,{sourceMap:!1})},322:function(t,e,o){"use strict";o(306)},323:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,'.worksMainVisual[data-v-c3cdd060]{background-color:#fafafa;margin-bottom:2.5em;padding:5em 0}@media screen and (min-width:768px){.worksMainVisual[data-v-c3cdd060]{margin-bottom:5em}}.worksMainVisual__inner[data-v-c3cdd060]{display:flex;flex-direction:column-reverse;flex-wrap:wrap;justify-content:space-between}@media screen and (min-width:768px){.worksMainVisual__inner[data-v-c3cdd060]{flex-direction:row}.worksMainVisual__contents[data-v-c3cdd060]{width:39.58%}}.worksMainVisual__thumbnail[data-v-c3cdd060]{margin-bottom:1.75em;width:100%}@media screen and (min-width:768px){.worksMainVisual__thumbnail[data-v-c3cdd060]{width:56.25%}}.worksMainVisual__thumbnail img[data-v-c3cdd060]{width:100%}.worksMainVisual__title[data-v-c3cdd060]{font-size:2rem;margin-bottom:.125em}.worksMainVisual__item[data-v-c3cdd060]{margin-bottom:.5em}.worksMainVisual__itemName[data-v-c3cdd060]{font-size:1.125rem;font-weight:700;margin-bottom:.222em}.worksItem__title[data-v-c3cdd060]{font-size:1.5rem;font-weight:700;margin-bottom:.333em}.worksItem__contents[data-v-c3cdd060]{white-space:pre-wrap}.worksItem__contents span+span[data-v-c3cdd060]:before{content:"/";display:inline-block;margin:0 .5em}.worksItem+.worksItem[data-v-c3cdd060]{margin-top:1.5em}',""]),n.locals={},t.exports=n},333:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(49),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$microcms,n=t.params,e.next=3,o.get({endpoint:"works/".concat(n.id)});case 3:return r=e.sent,e.abrupt("return",{work:r});case 5:case"end":return e.stop()}}),e)})))()}}),c=(o(322),o(26)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"child"},[e("div",{staticClass:"worksMainVisual"},[e("div",{staticClass:"container container--lg worksMainVisual__inner"},[e("div",{staticClass:"worksMainVisual__contents"},[e("h1",{staticClass:"worksMainVisual__title"},[t._v(t._s(t.work.title))]),t._v(" "),t.work.date?e("dl",{staticClass:"worksMainVisual__item"},[e("dt",{staticClass:"worksMainVisual__itemName"},[t._v("掲載日")]),t._v(" "),e("dd",[e("time",{attrs:{datetime:t.work.date},domProps:{textContent:t._s(t.$dateFns.format(new Date(t.work.date),"yyyy.MM.dd"))}})])]):t._e(),t._v(" "),t.work.term?e("dl",{staticClass:"worksMainVisual__item"},[e("dt",{staticClass:"worksMainVisual__itemName"},[t._v("制作期間")]),t._v(" "),e("dd",[t._v(t._s(t.work.term))])]):t._e(),t._v(" "),t.work.overview?e("p",[t._v(t._s(t.work.overview))]):t._e()]),t._v(" "),e("figure",{staticClass:"worksMainVisual__thumbnail"},[e("img",{attrs:{width:t.work.thumbnail.width,height:t.work.thumbnail.height,src:t.work.thumbnail.url,alt:t.work.title}})])])]),t._v(" "),e("div",{staticClass:"container"},[e("dl",{staticClass:"worksItem"},[e("dt",{staticClass:"worksItem__title"},[t._v("URL")]),t._v(" "),e("dd",{staticClass:"worksItem__contents"},[e("a",{attrs:{href:t.work.url,target:"_blank"}},[t._v(t._s(t.work.url))])])]),t._v(" "),e("dl",{staticClass:"worksItem"},[e("dt",{staticClass:"worksItem__title"},[t._v("システム概要")]),t._v(" "),e("dd",{staticClass:"worksItem__contents"},[t._v(t._s(t.work.system))])]),t._v(" "),t.work.responsibility?e("dl",{staticClass:"worksItem"},[e("dt",{staticClass:"worksItem__title"},[t._v("担当")]),t._v(" "),e("dd",{staticClass:"worksItem__contents"},[t._v(t._s(t.work.responsibility))])]):t._e(),t._v(" "),e("dl",{staticClass:"worksItem"},[e("dt",{staticClass:"worksItem__title"},[t._v("技術")]),t._v(" "),e("dd",{staticClass:"worksItem__contents"},[t._v(t._s(t.work.skill))])]),t._v(" "),t.work.tools?e("dl",{staticClass:"worksItem"},[e("dt",{staticClass:"worksItem__title"},[t._v("ツール")]),t._v(" "),e("dd",{staticClass:"worksItem__contents"},[t._v(t._s(t.work.tools))])]):t._e(),t._v(" "),e("dl",{staticClass:"worksItem"},[e("dt",{staticClass:"worksItem__title"},[t._v("制作ポイント")]),t._v(" "),e("dd",{staticClass:"worksItem__contents"},[t._v(t._s(t.work.comment))])])]),t._v(" "),e("p",{staticClass:"button-area"},[e("nuxt-link",{staticClass:"buttonPrimary buttonPrimary--leftArrow",attrs:{to:"/works"}},[t._v("back")])],1),t._v(" "),e("FloatingButton")],1)}),[],!1,null,"c3cdd060",null);e.default=component.exports;installComponents(component,{FloatingButton:o(293).default})}}]);