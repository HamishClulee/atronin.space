(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],v=0,m=[];v<c.length;v++)s=c[v],o[s]&&m.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0730":function(t,e,n){},"11f9":function(t,e,n){},1583:function(t,e,n){"use strict";var a=n("d315"),o=n.n(a);o.a},"25e2":function(t,e,n){"use strict";var a=n("515d"),o=n.n(a);o.a},2680:function(t,e,n){"use strict";var a=n("47d1"),o=n.n(a);o.a},"2a18":function(t,e,n){},3906:function(t,e,n){},"395b":function(t,e,n){},"40d7":function(t,e,n){"use strict";var a=n("bd26"),o=n.n(a);o.a},"47d1":function(t,e,n){},"515d":function(t,e,n){},5167:function(t,e,n){"use strict";var a=n("9bcf"),o=n.n(a);o.a},"531b":function(t,e,n){"use strict";var a=n("ab43"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("e4c9");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"god-div"},[t.isauthed?n("div",[n("navbar"),n("router-view")],1):n("underconstruction"),n("rfooter")],1)},i=[],s=n("be94"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"construction-con"},[n("div",{staticClass:"hero-con"},[t._m(0),n("h5",[t._v("This site is currently under construction.")]),n("p",[t._v("@RONIN is a co-living Villa in "),n("a",{on:{click:t.bottom}},[t._v("Canggu, Bali")]),t._v(".")]),n("p",[t._v("We have created an environment that drives productivity and provides the social element missing from a lot of nomads working adventures.")]),n("p",[t._v("Excellent internet, clean living spaces, helpful staff, comfortable chairs, a kitchen that encourages cooking and excellent people.")]),n("p",[t._v("If you would like to talk to us about taking a room or a desk @RONIN contact us on the whatsapp number below.")]),n("h2",[t._v("+62 812 384 114 64")])]),n("gmap-map",{staticStyle:{width:"100%",height:"600px"},attrs:{center:{lat:-8.638259,lng:115.150751},zoom:14}},[n("gmap-marker",{attrs:{position:{lat:-8.638259,lng:115.150751},clickable:!0,draggable:!0}})],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-con"},[n("img",{attrs:{src:"https://atronin.space/images/logo-large-light.png"}})])}],l=n("bc3a"),u=n.n(l),v=window.location.origin,m=u.a.create({baseURL:v,withCredentials:!0}),d={name:"underconstruction",components:{},data:function(){return{}},mounted:function(){},methods:{bottom:function(){window.scrollTo(0,999999)},submit:function(){var t=this;""===this.email?this.message="you need to enter an email":m.post("/api/subscribe",this.email).then(function(){t.message="We'll be in touch soon!"}).catch(function(){t.message="Something went wrong, try again later"})}}},p=d,h=(n("bec2"),n("2877")),f=Object(h["a"])(p,c,r,!1,null,"2847dfa4",null);f.options.__file="underconstruction.vue";var g=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-con"},[n("div",{staticClass:"navbar-left"},[n("div",{staticClass:"logo-con",on:{click:t.routehome}},[n("img",{attrs:{src:"https://atronin.space/images/logo-small-dark.png"}})])]),n("div",{staticClass:"navbar-right"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("colive"),expression:"checkvis('colive')"}],staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/colive"}}},[t._v("colive")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("cowork"),expression:"checkvis('cowork')"}],staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/cowork"}}},[t._v("cowork")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("events"),expression:"checkvis('events')"}],staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/events"}}},[t._v("events")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("pricing"),expression:"checkvis('pricing')"}],staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/pricing"}}},[t._v("pricing")])],1),t._m(0)]),n("div",{staticClass:"hamburger",on:{click:t.togglecanvas}},[n("div",{staticClass:"line"}),n("div",{staticClass:"line"}),n("div",{staticClass:"line"})]),t.canvasopen?n("div",{staticClass:"canvas-nav"},[n("div",{staticClass:"canvas-text-con"},[n("div",{staticClass:"big-x",on:{click:t.togglecanvas}},[n("div",{staticClass:"line"}),n("div",{staticClass:"line"})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("home"),expression:"checkvis('home')"}],staticClass:"canvas-item",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/"}}},[t._v("home")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("colive"),expression:"checkvis('colive')"}],staticClass:"canvas-item",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/colive"}}},[t._v("colive")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("cowork"),expression:"checkvis('cowork')"}],staticClass:"canvas-item",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/cowork"}}},[t._v("cowork")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("events"),expression:"checkvis('events')"}],staticClass:"canvas-item",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/events"}}},[t._v("events")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.checkvis("pricing"),expression:"checkvis('pricing')"}],staticClass:"canvas-item",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/pricing"}}},[t._v("pricing")])],1),n("div",{staticClass:"canvas-item",on:{click:t.togglecanvas}},[n("button",{staticClass:"button cta"},[t._v("book")])])])]):t._e()])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-item"},[n("button",{staticClass:"button cta"},[t._v("book")])])}],k=(n("7f7f"),{name:"navbar",data:function(){return{canvasopen:!1}},methods:{togglecanvas:function(){this.canvasopen=!this.canvasopen},routehome:function(){this.$router.push({path:"/"})},checkvis:function(t){return t!==this.$route.name}}}),w=k,y=(n("68b8"),Object(h["a"])(w,b,_,!1,null,"7ac212ec",null));y.options.__file="navbar.vue";var C=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-con"},[n("div",{staticClass:"left-con"},[n("h2",[t._v("SUBSCRIBE TO OUR NEWSLETTER")]),n("div",{staticClass:"input-con"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.localEmail,expression:"localEmail"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter your email..."},domProps:{value:t.localEmail},on:{input:function(e){e.target.composing||(t.localEmail=e.target.value)}}}),n("button",{staticClass:"button",class:{"is-loading":t.subscribe_in_progress},attrs:{disabled:t.subscribe_in_progress}},[t._v("SUBSCRIBE")])])]),t._m(0)])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-con"},[n("h2",[t._v("GET IN TOUCH")]),n("p",[n("strong",[t._v("E_")]),t._v(" info@atronin.space")]),n("p",[n("strong",[t._v("P_")]),t._v(" +62 812 384 114 64")]),n("p",[t._v("Jalan Raya Canggu, Gang Pratama1, Canggu, Bali.")])])}],O={name:"rfooter",data:function(){return{localEmail:"",subscribeError:!1,validationMessage:""}},methods:{handleSubscribe:function(){}},computed:{}},S=O,N=(n("f53d"),Object(h["a"])(S,x,E,!1,null,"4990b79c",null));N.options.__file="rfooter.vue";var j=N.exports,$=n("2f62"),I={name:"app",components:{underconstruction:g,navbar:C,rfooter:j},created:function(){this.SESSION_CHALLENGE()},methods:Object(s["a"])({},Object($["b"])(["SESSION_CHALLENGE"])),computed:Object(s["a"])({},Object($["c"])(["isauthed"]))},L=I,T=(n("5167"),Object(h["a"])(L,o,i,!1,null,"74918402",null));T.options.__file="App.vue";var P=T.exports,A={windowwidth:0,isauthed:!1},B={windowwidth:function(t){return t.window_width},isauthed:function(t){return t.isauthed}},U={IS_AUTHED:function(t,e){t.isauthed=e}},R={SESSION_CHALLENGE:function(t){var e=t.commit;m.get("/api/session_challenge").then(function(){e("IS_AUTHED",!0)}).catch(function(){e("IS_AUTHED",!1)})}};a["a"].use($["a"]);var H=new $["a"].Store({actions:R,getters:B,mutations:U,state:A}),G=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-con"},[n("hero"),t._m(0),n("imagetextblock",{attrs:{imgleft:!0,imgsrc:"https://atronin.space/images/work1.jpg",texttitle:"Co-Living",textbody:t.body1,background:"#212941",routeto:"/colive"}}),n("imagetextblock",{attrs:{imgleft:!1,imgsrc:"https://atronin.space/images/social1.jpg",texttitle:"Co-Working",textbody:t.body2,background:"#4EAA91",routeto:"/cowork"}}),n("imagetextblock",{attrs:{imgleft:!0,imgsrc:"https://atronin.space/images/social4.jpg",texttitle:"Events",textbody:t.body3,background:"#813754",routeto:"/events"}}),n("blockpricing"),n("gmap-map",{staticStyle:{width:"100%",height:"300px"},attrs:{center:{lat:-8.638259,lng:115.150751},zoom:14}},[n("gmap-marker",{attrs:{position:{lat:-8.638259,lng:115.150751},clickable:!0,draggable:!0}})],1)],1)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-cont"},[n("h1",[t._v("YOU@RONIN")]),n("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])}],D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-con"},[n("h1",{staticClass:"massive"},[t._v("WE KNOW CO-DOING")])])}],z={name:"hero",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},K=z,F=(n("dcc8"),Object(h["a"])(K,D,J,!1,null,"e861b024",null));F.options.__file="hero.vue";var Q=F.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block-con",class:t.imgleft?"makerow":"reverse",style:{backgroundColor:t.background}},[n("div",{staticClass:"img-con",on:{click:t.routeaway}},[n("img",{attrs:{src:t.imgsrc}})]),n("div",{staticClass:"text-con"},[n("h2",{style:{color:"white"}},[t._v(t._s(t.texttitle))]),n("p",{style:{color:"white"}},[t._v(t._s(t.textbody))])])])},Y=[],q={name:"imagetextblock",props:{imgleft:Boolean,texttitle:String,textbody:String,imgsrc:String,background:String,textdark:Boolean,routeto:String},components:{},data:function(){return{}},mounted:function(){},methods:{routeaway:function(){this.$router.push({path:this.routeto})}},computed:{}},X=q,Z=(n("b334"),Object(h["a"])(X,V,Y,!1,null,"726aa91a",null));Z.options.__file="imagetextblock.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block-con"},[n("div",{staticClass:"pricing-con"},[n("div",{staticClass:"item nightly"},[n("h4",{staticClass:"duration"},[t._v("Nightly")]),n("h5",{staticClass:"price"},[t._v("300k")])]),n("div",{staticClass:"item weekly"},[n("h4",{staticClass:"duration"},[t._v("Weekly")]),n("h5",{staticClass:"price"},[t._v("2 million")])]),n("div",{staticClass:"item monthly"},[n("h4",{staticClass:"duration"},[t._v("Monthly")]),n("h5",{staticClass:"price"},[t._v("7 million")])])]),n("h5",[t._v("All our rooms have ensuites.")]),n("h5",[t._v("All rooms are cleaned daily with new linens every few days.")]),n("div",{staticClass:"cta-con"},[n("button",{staticClass:"button"},[t._v("BOOK A SPOT")])])])}],at={name:"blockpricing"},ot=at,it=(n("c49e"),Object(h["a"])(ot,et,nt,!1,null,"c1f6a38a",null));it.options.__file="blockpricing.vue";var st=it.exports,ct={name:"home",components:{hero:Q,imagetextblock:tt,blockpricing:st},data:function(){return{body1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",body2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",body3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}},mounted:function(){},methods:{},computed:{}},rt=ct,lt=(n("531b"),Object(h["a"])(rt,M,W,!1,null,"b077396a",null));lt.options.__file="home.vue";var ut=lt.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",[t._v("Page coming soon!")])])}],dt={name:"colive",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},pt=dt,ht=(n("2680"),Object(h["a"])(pt,vt,mt,!1,null,"193e0e53",null));ht.options.__file="colive.vue";var ft=ht.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",[t._v("Page coming soon!")])])}],_t={name:"cowork",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},kt=_t,wt=(n("25e2"),Object(h["a"])(kt,gt,bt,!1,null,"1c273bb3",null));wt.options.__file="cowork.vue";var yt=wt.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h1",[t._v("Page coming soon!")])])}],Et={name:"events",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},Ot=Et,St=(n("40d7"),Object(h["a"])(Ot,Ct,xt,!1,null,"66b63f9a",null));St.options.__file="events.vue";var Nt=St.exports,jt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"book-con"},[n("h1",[t._v("Booking coming soon!")])])}],It={name:"book",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},Lt=It,Tt=(n("1583"),Object(h["a"])(Lt,jt,$t,!1,null,"7d51c1bf",null));Tt.options.__file="book.vue";var Pt=Tt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pricing-con"},[n("blockpricing",{style:{minHeight:"60vh"}})],1)},Bt=[],Ut={name:"pricing",components:{blockpricing:st},data:function(){return{}},mounted:function(){},methods:{},computed:{}},Rt=Ut,Ht=(n("7087"),Object(h["a"])(Rt,At,Bt,!1,null,"5e20b18f",null));Ht.options.__file="pricing.vue";var Gt=Ht.exports,Mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"not-found"}},[n("div",{staticClass:"circles"},[n("p",{staticClass:"text-color-control"},[t._v("404"),n("br"),n("small",{staticClass:"text-color-control"},[t._v("PAGE NOT FOUND")])]),n("span",{staticClass:"circle big"}),n("span",{staticClass:"circle med"}),n("span",{staticClass:"circle small"})])])}],Dt={name:"PageNotFound",data:function(){return{}},mounted:function(){},methods:{},computed:{}},Jt=Dt,zt=(n("e359"),Object(h["a"])(Jt,Mt,Wt,!1,null,"cf9117e4",null));zt.options.__file="notfound.vue";var Kt=zt.exports;a["a"].use(G["a"]);var Ft=new G["a"]({mode:"history",routes:[{path:"/",name:"home",component:ut},{path:"/colive",name:"colive",component:ft},{path:"/cowork",name:"cowork",component:yt},{path:"/events",name:"events",component:Nt},{path:"/pricing",name:"pricing",component:Gt},{path:"/book",name:"book",component:Pt},{path:"*",name:"notfound",component:Kt}]}),Qt=n("755e");a["a"].use(Qt,{load:{key:"AIzaSyBR6eSdLVeJ3lD9UJeElCQtKQTdTxh8rwg",libraries:"places"}}),a["a"].use(H),a["a"].use(Ft),a["a"].config.productionTip=!1,new a["a"]({store:H,router:Ft,render:function(t){return t(P)}}).$mount("#app")},"611e":function(t,e,n){},"68b8":function(t,e,n){"use strict";var a=n("da5b"),o=n.n(a);o.a},7087:function(t,e,n){"use strict";var a=n("11f9"),o=n.n(a);o.a},"9bcf":function(t,e,n){},ab43:function(t,e,n){},b334:function(t,e,n){"use strict";var a=n("611e"),o=n.n(a);o.a},bd26:function(t,e,n){},bec2:function(t,e,n){"use strict";var a=n("3906"),o=n.n(a);o.a},c49e:function(t,e,n){"use strict";var a=n("395b"),o=n.n(a);o.a},d315:function(t,e,n){},d6a0:function(t,e,n){},da5b:function(t,e,n){},dcc8:function(t,e,n){"use strict";var a=n("d6a0"),o=n.n(a);o.a},e359:function(t,e,n){"use strict";var a=n("2a18"),o=n.n(a);o.a},e4c9:function(t,e,n){},f53d:function(t,e,n){"use strict";var a=n("0730"),o=n.n(a);o.a}});
//# sourceMappingURL=app.4fa1b015.js.map