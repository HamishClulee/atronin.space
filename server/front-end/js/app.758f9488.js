(function(o){function t(t){for(var r,e,g=t[0],i=t[1],h=t[2],c=t[3]||[],m=0,u=[];m<g.length;m++)e=g[m],Object.prototype.hasOwnProperty.call(s,e)&&s[e]&&u.push(s[e][0]),s[e]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r]);l&&l(t),n.push.apply(n,c);while(u.length)u.shift()();return p.push.apply(p,h||[]),a()}function a(){for(var o,t=0;t<p.length;t++){for(var a=p[t],r=!0,e=1;e<a.length;e++){var h=a[e];0!==s[h]&&(r=!1)}r&&(p.splice(t--,1),o=i(i.s=a[0]))}return 0===p.length&&(n.forEach((function(o){if(void 0===s[o]){s[o]=null;var t=document.createElement("link");i.nc&&t.setAttribute("nonce",i.nc),t.rel="prefetch",t.as="script",t.href=g(o),document.head.appendChild(t)}})),n.length=0),o}var r={},e={app:0},s={app:0},p=[],n=[];function g(o){return i.p+"js/"+({}[o]||o)+"."+{"chunk-6c627d57":"e0981434","chunk-cd5099e0":"63ba1843","chunk-da3f1302":"36631f01"}[o]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return o[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(o){var t=[],a={"chunk-6c627d57":1,"chunk-cd5099e0":1,"chunk-da3f1302":1};e[o]?t.push(e[o]):0!==e[o]&&a[o]&&t.push(e[o]=new Promise((function(t,a){for(var r="css/"+({}[o]||o)+"."+{"chunk-6c627d57":"0b98b170","chunk-cd5099e0":"e73d0bff","chunk-da3f1302":"98e00229"}[o]+".css",s=i.p+r,p=document.getElementsByTagName("link"),n=0;n<p.length;n++){var g=p[n],h=g.getAttribute("data-href")||g.getAttribute("href");if("stylesheet"===g.rel&&(h===r||h===s))return t()}var c=document.getElementsByTagName("style");for(n=0;n<c.length;n++){g=c[n],h=g.getAttribute("data-href");if(h===r||h===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,p=new Error("Loading CSS chunk "+o+" failed.\n("+r+")");p.code="CSS_CHUNK_LOAD_FAILED",p.request=r,delete e[o],m.parentNode.removeChild(m),a(p)},m.href=s;var l=document.getElementsByTagName("head")[0];l.appendChild(m)})).then((function(){e[o]=0})));var r=s[o];if(0!==r)if(r)t.push(r[2]);else{var p=new Promise((function(t,a){r=s[o]=[t,a]}));t.push(r[2]=p);var n,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=g(o);var c=new Error;n=function(t){h.onerror=h.onload=null,clearTimeout(m);var a=s[o];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),e=t&&t.target&&t.target.src;c.message="Loading chunk "+o+" failed.\n("+r+": "+e+")",c.name="ChunkLoadError",c.type=r,c.request=e,a[1](c)}s[o]=void 0}};var m=setTimeout((function(){n({type:"timeout",target:h})}),12e4);h.onerror=h.onload=n,document.head.appendChild(h)}return Promise.all(t)},i.m=o,i.c=r,i.d=function(o,t,a){i.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:a})},i.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,t){if(1&t&&(o=i(o)),8&t)return o;if(4&t&&"object"===typeof o&&o&&o.__esModule)return o;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)i.d(a,r,function(t){return o[t]}.bind(null,r));return a},i.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return i.d(t,"a",t),t},i.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},i.p="/",i.oe=function(o){throw console.error(o),o};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],c=h.push.bind(h);h.push=t,h=h.slice();for(var m=0;m<h.length;m++)t(h[m]);var l=c,u=function(){return p.push([0,"chunk-vendors"]),a()}();t([[],{},0,["chunk-cd5099e0","chunk-da3f1302","chunk-6c627d57"]])})({0:function(o,t,a){o.exports=a("56d7")},"2cba":function(o,t,a){"use strict";var r=a("7d60"),e=a.n(r);e.a},"4dae":function(o,t,a){"use strict";var r=a("8d48"),e=a.n(r);e.a},"56d7":function(o,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d"),a("e4c9");var r=a("2b0e"),e=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{staticClass:"god-div"},[a("navbar"),a("router-view"),a("rfooter")],1)},s=[],p=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("div",{staticClass:"navbar-con"},[a("div",{staticClass:"navbar-left"},[a("div",{staticClass:"logo-con",on:{click:o.routehome}},[a("img",{attrs:{src:"https://atronin.space/images/logo-small-dark.png"}})])]),a("div",{staticClass:"navbar-right"},[a("div",{staticClass:"text-item",class:o.checkvis("home")?"active-route":""},[a("router-link",{attrs:{to:{path:"/"}}},[o._v("home")])],1),a("div",{staticClass:"text-item",class:o.checkvis("gallery")?"active-route":""},[a("router-link",{attrs:{to:{path:"/gallery"}}},[o._v("gallery")])],1)]),a("div",{staticClass:"hamburger",on:{click:o.togglecanvas}},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),o.canvasopen?a("div",{staticClass:"canvas-nav"},[a("div",{staticClass:"canvas-text-con"},[a("div",{staticClass:"big-x",on:{click:o.togglecanvas}},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})]),a("div",{staticClass:"canvas-item",class:o.checkvis("home")?"active-route canvas":"",on:{click:o.togglecanvas}},[a("router-link",{attrs:{to:{path:"/"}}},[o._v("home")])],1),a("div",{staticClass:"canvas-item",class:o.checkvis("gallery")?"active-route canvas":"",on:{click:o.togglecanvas}},[a("router-link",{attrs:{to:{path:"/gallery"}}},[o._v("gallery")])],1)])]):o._e()])},g=[],i=(a("7f7f"),{name:"navbar",data:function(){return{canvasopen:!1}},methods:{togglecanvas:function(){this.canvasopen=!this.canvasopen},routehome:function(){this.$router.push({path:"/"})},checkvis:function(o){return o===this.$route.name}}}),h=i,c=(a("4dae"),a("2877")),m=Object(c["a"])(h,n,g,!1,null,"2ed97a8b",null),l=m.exports,u=function(){var o=this,t=o.$createElement;o._self._c;return o._m(0)},b=[function(){var o=this,t=o.$createElement,a=o._self._c||t;return a("footer",{staticClass:"footer-con"},[a("div",{staticClass:"right-con"},[a("h2",[o._v("GET IN TOUCH")]),a("p",[a("strong",[o._v("WhatsApp")]),o._v(" +62 812 384 114 64")]),a("p",[o._v("Jalan Raya Canggu, Gang Pratama1, Canggu, Bali.")])])])}],d={name:"rfooter",data:function(){return{}},methods:{},computed:{}},j=d,v=(a("2cba"),Object(c["a"])(j,u,b,!1,null,"0fe068d0",null)),f=v.exports,k=a("2f62");function q(o,t){var a=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),a.push.apply(a,r)}return a}function w(o){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(p["a"])(o,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(a,t))}))}return o}var y={name:"app",components:{navbar:l,rfooter:f},data:function(){return{showgallery:!1,index:0}},created:function(){},mounted:function(){var o=this;window.addEventListener("resize",this.widthChanged),this.widthChanged(),this.$root.$on("close-modal",(function(){o.showgallery=!1})),this.$root.$on("open-gallery",(function(t){o.index=t,o.showgallery=!0}))},methods:w({},Object(k["b"])(["SET_WINDOW_WIDTH"]),{widthChanged:function(){this.SET_WINDOW_WIDTH(window.innerWidth)}}),computed:{}},_=y,C=(a("62da"),Object(c["a"])(_,e,s,!1,null,"26831538",null)),O=C.exports,E={window_width:0,isauthed:!1},S={isauthed:function(o){return o.isauthed}},P={IS_AUTHED:function(o,t){o.isauthed=t},SET_WINDOW_WIDTH:function(o,t){o.window_width=t}},T=a("bc3a"),x=a.n(T),D=window.location.origin,A=x.a.create({baseURL:D,withCredentials:!0}),I={SESSION_CHALLENGE:function(o){var t=o.commit;A.get("/api/session_challenge").then((function(){t("IS_AUTHED",!0)})).catch((function(){t("IS_AUTHED",!1)}))}};r["a"].use(k["a"]);var W=new k["a"].Store({actions:I,getters:S,mutations:P,state:E}),$=a("8c4f"),L=function(){return a.e("chunk-da3f1302").then(a.bind(null,"6511"))},N=function(){return a.e("chunk-cd5099e0").then(a.bind(null,"f115"))},B=function(){return a.e("chunk-6c627d57").then(a.bind(null,"1f6b"))};r["a"].use($["a"]);var H=new $["a"]({mode:"history",scrollBehavior:function(o,t,a){return a||{x:0,y:0}},routes:[{path:"/",name:"home",component:L},{path:"/gallery",name:"gallery",component:N},{path:"*",name:"notfound",component:B}]}),U=a("755e"),G={villa:"villa",outdoor:"outdoor",cowork:"cowork",bbq:"bbq",kitchen:"kitchen",rooms:"rooms",room1:"room-1",room2:"room-2",room3:"room-3",room4:"room-4",room5:"room-5",room6:"room-6",karaoke:"karaoke"},z=[{path:"BalconyGazebo.jpg",tags:[G.villa,G.outdoor]},{path:"bbq25.jpg",tags:[G.bbq]},{path:"downstairsgarden.jpg",tags:[G.villa,G.outdoor]},{path:"living7.jpg",tags:[G.villa,G.kitchen]},{path:"outdoor9.jpg",tags:[G.villa,G.outdoor]},{path:"room17.jpg",tags:[G.rooms,G.room1]},{path:"room32.jpg",tags:[G.rooms,G.room3]},{path:"room53.jpg",tags:[G.rooms,G.room5]},{path:"room68.jpg",tags:[G.rooms,G.room6]},{path:"bbq10.jpg",tags:[G.bbq]},{path:"bbq26.jpg",tags:[G.bbq]},{path:"downstairspool.jpg",tags:[G.villa,G.outdoor]},{path:"living8.jpg",tags:[G.kitchen]},{path:"outdoorcouchandpool.jpg",tags:[G.villa,G.outdoor]},{path:"room18.jpg",tags:[G.rooms,G.room1]},{path:"room34.jpg",tags:[G.rooms,G.room3]},{path:"room54.jpg",tags:[G.rooms,G.room5]},{path:"room69.jpg",tags:[G.rooms,G.room6]},{path:"bbq11.jpg",tags:[G.bbq]},{path:"bbq27.jpg",tags:[G.bbq]},{path:"living9.jpg",tags:[G.kitchen]},{path:"poolandcouch.jpg",tags:[G.villa,G.outdoor]},{path:"room19.jpg",tags:[G.rooms,G.room1]},{path:"room35.jpg",tags:[G.rooms,G.room3]},{path:"room55.jpg",tags:[G.room5,G.rooms]},{path:"room6bed.jpg",tags:[G.rooms,G.room6]},{path:"bbq12.jpg",tags:[G.bbq]},{path:"bbq28.jpg",tags:[G.bbq]},{path:"GazeboStairs.jpg",tags:[G.villa,G.outdoor]},{path:"logo-large-dark.png",tags:[]},{path:"pool.jpg",tags:[G.villa,G.outdoor]},{path:"room1bathroomdoor.jpg",tags:[G.rooms,G.room1]},{path:"room36.jpg",tags:[G.rooms,G.room3]},{path:"room56.jpg",tags:[G.rooms,G.room5]},{path:"room6couchandbed.jpg",tags:[G.rooms,G.room6]},{path:"bbq13.jpg",tags:[G.bbq]},{path:"kara1.jpg",tags:[G.karaoke]},{path:"logo-large-light.png",tags:[]},{path:"PoolLounger.jpg",tags:[G.villa,G.outdoor]},{path:"Room1BedPool.jpg",tags:[G.rooms,G.room1]},{path:"room37.jpg",tags:[G.rooms,G.room3]},{path:"room57.jpg",tags:[G.rooms,G.room5]},{path:"room6couch.jpg",tags:[G.rooms,G.room6]},{path:"bbq14.jpg",tags:[G.bbq]},{path:"bbq31.jpg",tags:[G.bbq]},{path:"bbq32.jpg",tags:[G.bbq]},{path:"bbq33.jpg",tags:[G.bbq]},{path:"bbq34.jpg",tags:[G.bbq]},{path:"bbq35.jpg",tags:[G.bbq]},{path:"bbq36.jpg",tags:[G.bbq]},{path:"bbq37.jpg",tags:[G.bbq]},{path:"bbq38.jpg",tags:[G.bbq]},{path:"bbq39.jpg",tags:[G.bbq]},{path:"bbq40.jpg",tags:[G.bbq]},{path:"bbq41.jpg",tags:[G.bbq]},{path:"bbq42.jpg",tags:[G.bbq]},{path:"bbq43.jpg",tags:[G.bbq]},{path:"bbq44.jpg",tags:[G.bbq]},{path:"bbq45.jpg",tags:[G.bbq]},{path:"kara2.jpg",tags:[G.karaoke]},{path:"PoolParkinglot.jpg",tags:[G.villa,G.outdoor]},{path:"room22.jpg",tags:[G.rooms,G.room2]},{path:"room38.jpg",tags:[G.rooms,G.room3]},{path:"room58.jpg",tags:[G.rooms,G.room5]},{path:"roomk21.jpg",tags:[G.rooms]},{path:"bbq15.jpg",tags:[G.bbq]},{path:"bbq30.jpg",tags:[G.bbq]},{path:"kara3.jpg",tags:[G.karaoke]},{path:"lounge.jpg",tags:[G.villa]},{path:"room110.jpg",tags:[G.rooms,G.room1]},{path:"room23.jpg",tags:[G.rooms,G.room2]},{path:"room39.jpg",tags:[G.rooms,G.room3]},{path:"room59.jpg",tags:[G.rooms,G.room5]},{path:"social1.jpg",tags:[G.cowork]},{path:"bbq16.jpg",tags:[G.bbq]},{path:"bbq3.jpg",tags:[G.bbq]},{path:"living10.jpg",tags:[G.kitchen]},{path:"outdoor10.jpg",tags:[G.villa,G.outdoor]},{path:"room111.jpg",tags:[G.rooms,G.room1]},{path:"room24.jpg",tags:[G.rooms,G.room2]},{path:"room3bathroom.jpg",tags:[G.rooms,G.room3]},{path:"room5bedanddoor.jpg",tags:[G.rooms,G.room5]},{path:"social3.jpg",tags:[G.cowork]},{path:"bbq17.jpg",tags:[G.bbq]},{path:"bbq4.jpg",tags:[G.bbq]},{path:"living11.jpg",tags:[G.kitchen]},{path:"outdoor11.jpg",tags:[G.villa,G.outdoor]},{path:"room112.jpg",tags:[G.rooms,G.room1]},{path:"room25.jpg",tags:[G.rooms,G.room2]},{path:"room4backwall.jpg",tags:[G.rooms,G.room4]},{path:"room5bed.jpg",tags:[G.rooms,G.room5]},{path:"social4.jpg",tags:[G.cowork]},{path:"bbq18.jpg",tags:[G.bbq]},{path:"bbq5.jpg",tags:[G.bbq]},{path:"living12.jpg",tags:[G.cowork]},{path:"outdoor12.jpg",tags:[G.villa,G.outdoor]},{path:"room113.jpg",tags:[G.rooms,G.room1]},{path:"room26.jpg",tags:[G.rooms,G.room2]},{path:"room4bed1.jpg",tags:[G.rooms,G.room4]},{path:"room610.jpg",tags:[G.rooms,G.room6]},{path:"social6.jpg",tags:[G.cowork]},{path:"bbq19.jpg",tags:[G.bbq]},{path:"bbq6.jpg",tags:[G.bbq]},{path:"outdoor1.jpg",tags:[G.villa,G.outdoor]},{path:"room114.jpg",tags:[G.rooms,G.room1]},{path:"room27.jpg",tags:[G.rooms,G.room2]},{path:"room4bedend.jpg",tags:[G.rooms,G.room4]},{path:"room61.jpg",tags:[G.rooms,G.room6]},{path:"social.jpg",tags:[G.cowork]},{path:"bbq1.jpg",tags:[G.bbq]},{path:"bbq7.jpg",tags:[G.bbq]},{path:"living1.jpg",tags:[G.cowork]},{path:"outdoor2.jpg",tags:[G.villa,G.outdoor]},{path:"room1-1.jpg",tags:[G.rooms,G.room1]},{path:"room2bathroom.jpg",tags:[G.rooms,G.room2]},{path:"room4bed.jpg",tags:[G.rooms,G.room4]},{path:"room62.jpg",tags:[G.rooms,G.room6]},{path:"upstairsgazebo.jpg",tags:[G.villa,G.outdoor]},{path:"bbq20.jpg",tags:[G.bbq]},{path:"bbq8.jpg",tags:[G.bbq]},{path:"living2.jpg",tags:[G.kitchen]},{path:"outdoor3.jpg",tags:[G.villa,G.outdoor]},{path:"room-1-2.jpg",tags:[G.rooms]},{path:"room2bed.jpg",tags:[G.rooms,G.room2]},{path:"room4desk.jpg",tags:[G.rooms,G.room4]},{path:"room63.jpg",tags:[G.rooms,G.room6]},{path:"work1.jpg",tags:[G.cowork]},{path:"bbq21.jpg",tags:[G.bbq]},{path:"bbq9.jpg",tags:[G.bbq]},{path:"living3.jpg",tags:[G.kitchen]},{path:"outdoor4.jpg",tags:[G.villa,G.outdoor]},{path:"room-1-3.jpg",tags:[G.rooms]},{path:"Room2BedWardrobe.jpg",tags:[G.rooms,G.room2]},{path:"room4full.jpg",tags:[G.rooms,G.room4]},{path:"room64.jpg",tags:[G.rooms,G.room6]},{path:"work2.jpg",tags:[G.cowork]},{path:"bbq22.jpg",tags:[G.bbq]},{path:"coworking1.jpg",tags:[G.cowork]},{path:"living4.jpg",tags:[G.villa,G.cowork]},{path:"outdoor6.jpg",tags:[G.villa,G.outdoor]},{path:"room-1-4.jpg",tags:[G.rooms]},{path:"room310.jpg",tags:[G.rooms,G.room3]},{path:"room4wardrobe.jpg",tags:[G.rooms,G.room4]},{path:"room65.jpg",tags:[G.rooms,G.room6]},{path:"work.jpg",tags:[G.cowork]},{path:"bbq23.jpg",tags:[G.bbq]},{path:"coworking.jpg",tags:[G.cowork]},{path:"living5.jpg",tags:[G.kitchen]},{path:"outdoor7.jpg",tags:[G.villa,G.outdoor]},{path:"room15.jpg",tags:[G.rooms,G.room1]},{path:"room311.jpg",tags:[G.rooms,G.room3]},{path:"room51.jpg",tags:[G.rooms,G.room5]},{path:"room66.jpg",tags:[G.rooms,G.room6]},{path:"bbq24.jpg",tags:[G.bbq]},{path:"downstairscouch.jpg",tags:[G.villa,G.outdoor]},{path:"living6.jpg",tags:[G.cowork]},{path:"outdoor8.jpg",tags:[G.villa,G.outdoor]},{path:"room16.jpg",tags:[G.room1]},{path:"room31.jpg",tags:[G.room3,G.rooms]},{path:"room52.jpg",tags:[G.rooms,G.room5]},{path:"room67.jpg",tags:[G.rooms,G.room6]}],J={images:z,TAGS:G};r["a"].prototype.$manifest=J,r["a"].use(U,{load:{key:"AIzaSyBR6eSdLVeJ3lD9UJeElCQtKQTdTxh8rwg"}}),r["a"].use(W),r["a"].use(H),r["a"].config.productionTip=!1,new r["a"]({store:W,router:H,render:function(o){return o(O)}}).$mount("#app")},"62da":function(o,t,a){"use strict";var r=a("9243"),e=a.n(r);e.a},"7d60":function(o,t,a){},"8d48":function(o,t,a){},9243:function(o,t,a){},e4c9:function(o,t,a){}});
//# sourceMappingURL=app.758f9488.js.map