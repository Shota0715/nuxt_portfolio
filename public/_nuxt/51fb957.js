(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{255:function(e,t,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("327e7b0e",content,!0,{sourceMap:!1})},261:function(e,t,n){"use strict";n(255)},262:function(e,t,n){var r=n(33)(!1);r.push([e.i,".wrapper[data-v-edfc35fa]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:auto;top:-20px;height:90vh;overflow:hidden;position:relative;background-color:#1f1f1f}.wrapper canvas[data-v-edfc35fa]{background-color:#1f1f1f}",""]),e.exports=r},275:function(e,t,n){"use strict";n.r(t);n(269),n(43),n(29),n(42),n(35),n(64);var r=n(28),o=n(130),c=n(131),d=n(277),l=n(278),f=n(270),v=n(41),h=(n(63),n(14),n(62),n(274)),m=n(74),w=n(260),y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.random();return n*(t-e)+e};function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var P=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},C=n(271),M=function(e){Object(d.a)(n,e);var t=R(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).updateCanvas=function(e,t,n){return function(r,o,c,d,l,f,v){if(!e.shouldProcessBeTerminated(n)){for(var time=5e-5*Date.now(),i=0;i<r.children.length;i++){var object=r.children[i];object instanceof w.Points&&(i%3==0&&(object.rotation.x=time*(i<5?i+1:-(i+1))*.1),i%3==1&&(object.rotation.y=time*(i<5?i+1:-(i+1))*.1),i%3==2&&(object.rotation.z=time*(i<5?i+1:-(i+1))*.1))}window.addEventListener("mousemove",(function(e){f=e.pageX}));var h=f/window.innerWidth*360,m=(d+=.4*(h-d))*Math.PI/180;o.position.x=-1e3*Math.sin(m),o.position.z=1e3*Math.cos(m),o.lookAt(new w.Vector3(0,0,0)),c.update(),t.render(r,o),e.shouldBeStopped||requestAnimationFrame((function(){return e.updateCanvas(e,t,n)(r,o,c,d,l,f,v)}))}}},e}return Object(c.a)(n,[{key:"mounted",value:function(){this.writeCanvas(!1)}},{key:"startCanvas",value:function(){this.start(),this.writeCanvas(!1)}},{key:"regenerateCanvas",value:function(){this.writeCanvas(!0)}},{key:"writeCanvas",value:function(e){var t=this.$refs.canvasWrapper;if(t instanceof Element){for(var n=t.clientWidth,r=t.clientHeight,canvas=document.getElementById("canvas"),o=new w.Geometry,c=3e3,i=0;i<1e3;i++)o.vertices.push(new w.Vector3(c*(Math.random()-.5),c*(Math.random()-.5),c*(Math.random()-.5)));for(var d=new w.Scene,l=0;l<10;l++){var f=new w.PointsMaterial({size:y(20,60),map:this.createCanvasMaterial(255,y(146,246),y(101,201),256,1,.85),transparent:!0,depthWrite:!1,blending:w.AdditiveBlending}),v=new w.Points(o,f);v.rotation.x=6*Math.random(),v.rotation.y=6*Math.random(),v.rotation.z=6*Math.random(),d.add(v)}d.fog=new w.Fog(3223857,50,2e3),d.background=new w.Color(1052688);var h=new w.WebGLRenderer({canvas:canvas});h.setPixelRatio(window.devicePixelRatio),h.setSize(n+100,r+100);var m=new w.PerspectiveCamera(45,n/r),O=new C(m,canvas);O.autoRotate=!0,O.autoRotateSpeed=1.5,O.enableDamping=!0,O.dampingFactor=.2,O.enableZoom=!1,this.moveRunningIdsToTerminateIds();var j=(new Date).getTime();this.addRunningIds(j),this.updateCanvas(this,h,j)(d,m,O,0,0,0,0)}}},{key:"stopCanvas",value:function(){this.stop(),this.moveRunningIdsToTerminateIds()}},{key:"createCanvasMaterial",value:function(e,t,n,r,o,c){var d=document.createElement("canvas");d.width=d.height=r;var l=d.getContext("2d"),f=new w.Texture(d),v=r/2;l.globalAlpha=o;var h=1-c,m=l.createRadialGradient(v,v,0,v,v,v);return m.addColorStop(0,"rgba(".concat(e,", ").concat(t,", ").concat(n,", 1)")),m.addColorStop(h,"rgba(".concat(e,", ").concat(t,", ").concat(n,", ").concat(h,")")),m.addColorStop(1,"rgba(".concat(e,", ").concat(t,", ").concat(n,", 0)")),l.fillStyle=m,l.fillRect(0,0,r,r),f.needsUpdate=!0,f}}]),n}(h.c);P([Object(h.b)()],M.prototype,"cameraController",void 0);var x=M=P([Object(h.a)({computed:j({},Object(m.b)({shouldProcessBeTerminated:"particle/shouldProcessBeTerminated",isRunning:"particle/isRunning",shouldBeStopped:"particle/shouldBeStopped"})),methods:j({},Object(m.c)({addRunningIds:"particle/addRunningIds",moveRunningIdsToTerminateIds:"particle/moveRunningIdsToTerminateIds",start:"particle/start",stop:"particle/stop"}))})],M),k=(n(261),n(23)),component=Object(k.a)(x,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"canvasWrapper",staticClass:"wrapper"},[t("canvas",{attrs:{id:"canvas"}})])}),[],!1,null,"edfc35fa",null);t.default=component.exports}}]);