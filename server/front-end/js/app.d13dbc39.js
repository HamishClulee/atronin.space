(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],s[o]&&p.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a13":function(t,e,n){"use strict";var i=n("1a3c"),s=n.n(i);s.a},"0ed5":function(t,e,n){},"199b":function(t,e,n){},"1a3c":function(t,e,n){},"1e11":function(t,e,n){},"1e83":function(t,e,n){},"2a18":function(t,e,n){},"38b9":function(t,e,n){"use strict";var i=n("f764"),s=n.n(i);s.a},"4fec":function(t,e,n){},"50e4":function(t,e,n){},5383:function(t,e,n){"use strict";var i=n("7263"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("e4c9");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"god-div"},[t.isauthed?n("div",[n("navbar"),n("router-view")],1):n("underconstruction")],1)},a=[],o=n("be94"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"construction-con"},[n("div",{staticClass:"hero-con"},[t._m(0),n("h5",[t._v("This site is currently under construction.")]),n("p",[t._v("@RONIN is a co-living Villa in "),n("a",{on:{click:t.bottom}},[t._v("Canggu, Bali")]),t._v(".")]),n("p",[t._v("We have created an environment that drives productivity and provides the social element missing from a lot of nomads working adventures.")]),n("p",[t._v("Excellent internet, clean living spaces, helpful staff, comfortable chairs, a kitchen that encourages cooking and excellent people.")]),n("p",[t._v("If you would like to talk to us about taking a room or a desk @RONIN contact us on the whatsapp number below.")]),n("h2",[t._v("+62 812 384 114 64")])]),n("div",{staticClass:"images-con"},[n("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}}),n("div",{staticClass:"images"},t._l(t.images,function(e,i){return n("div",{key:i,staticClass:"image",style:{backgroundImage:"url("+e+")",width:"30vw",height:"30vw",backgroundPosition:"top",backgroundRepeat:"no-repeat",backgroundSize:"cover"},on:{click:function(e){t.index=i}}})}))],1),n("gmap-map",{staticStyle:{width:"100%",height:"600px"},attrs:{center:{lat:-8.638259,lng:115.150751},zoom:14}},[n("gmap-marker",{key:t.index,attrs:{position:{lat:-8.638259,lng:115.150751},clickable:!0,draggable:!0}})],1)],1)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-con"},[n("img",{attrs:{src:"https://atronin.space/images/logo-large-light.png"}})])}],l=n("bc3a"),u=n.n(l),d=window.location.origin,p=u.a.create({baseURL:d,withCredentials:!0}),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blueimp-gallery blueimp-gallery-controls",class:{"blueimp-gallery-carousel":t.carousel},attrs:{id:t.id}},[n("div",{staticClass:"slides"}),n("h3",{staticClass:"title"}),n("p",{staticClass:"description"}),n("a",{staticClass:"prev"},[t._t("prev",[t._v("‹")])],2),n("a",{staticClass:"next"},[t._t("next",[t._v("›")])],2),t.carousel?t._e():n("a",{staticClass:"close"},[t._t("close",[t._v("X")])],2),t.carousel?t._e():n("ol",{staticClass:"indicator"}),t.carousel?n("a",{staticClass:"play-pause"}):t._e()])},f=[],h=(n("7514"),n("f751"),n("c5f6"),n("a4b2"),n("8680"),n("ef31"),n("bc44"),n("33d5")),v=n.n(h),g={props:{images:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},carousel:{type:Boolean,default:!1},index:{type:Number},id:{type:String,default:"blueimp-gallery"}},data:function(){return{instance:null}},watch:{index:function(t){this.carousel||(null!==t?this.open(t):(this.instance&&this.instance.close(),this.$emit("close")))}},mounted:function(){this.carousel&&this.open()},destroyed:function(){null!==this.instance&&(this.instance.destroyEventListeners(),this.instance.close(),this.instance=null)},methods:{open:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n="undefined"!==typeof v.a.Gallery?v.a.Gallery:v.a,i=Object.assign({toggleControlsOnReturn:!1,toggleControlsOnSlideClick:!1,closeOnSlideClick:!1,carousel:this.carousel,container:"#".concat(this.id),index:e,onopen:function(){return t.$emit("onopen")},onopened:function(){return t.$emit("onopened")},onslide:this.onSlideCustom,onslideend:function(e,n){return t.$emit("onslideend",{index:e,slide:n})},onslidecomplete:function(e,n){return t.$emit("onslidecomplete",{index:e,slide:n})},onclose:function(){return t.$emit("close")},onclosed:function(){return t.$emit("onclosed")}},this.options);this.carousel&&(i.container=this.$el),this.instance=n(this.images,i)},onSlideCustom:function(t,e){this.$emit("onslide",{index:t,slide:e});var n=this.images[t];if(void 0!==n){var i=n.description,s=this.instance.container.find(".description");i&&(s.empty(),s[0].appendChild(document.createTextNode(i)))}}}},b=g,_=(n("5383"),n("2877")),y=Object(_["a"])(b,m,f,!1,null,null,null);y.options.__file="gallery.vue";var k=y.exports,C={name:"underconstruction",components:{gallery:k},data:function(){return{images:["https://atronin.space/images/social.jpg","https://atronin.space/images/social1.jpg","https://atronin.space/images/social3.jpg","https://atronin.space/images/social4.jpg","https://atronin.space/images/work.jpg","https://atronin.space/images/work2.jpg","https://atronin.space/images/work1.jpg"],index:null}},mounted:function(){},methods:{bottom:function(){window.scrollTo(0,999999)},submit:function(){var t=this;""===this.email?this.message="you need to enter an email":p.post("/api/subscribe",this.email).then(function(){t.message="We'll be in touch soon!"}).catch(function(){t.message="Something went wrong, try again later"})}}},w=C,x=(n("d689"),Object(_["a"])(w,r,c,!1,null,"9c707c10",null));x.options.__file="underconstruction.vue";var E=x.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-con"},[t._m(0),n("div",{staticClass:"navbar-right"},[n("div",{staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/colive"}}},[t._v("colive")])],1),n("div",{staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/cowork"}}},[t._v("cowork")])],1),n("div",{staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/events"}}},[t._v("events")])],1),n("div",{staticClass:"text-item"},[n("router-link",{attrs:{to:{path:"/pricing"}}},[t._v("pricing")])],1),t._m(1)])])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-left"},[n("div",{staticClass:"logo-con"},[n("img",{attrs:{src:"https://atronin.space/images/logo-small-dark.png"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-item"},[n("button",{staticClass:"button cta"},[t._v("book")])])}],S={},j=S,L=(n("9507"),Object(_["a"])(j,O,I,!1,null,"3926b0d5",null));L.options.__file="navbar.vue";var $=L.exports,N=n("2f62"),T={name:"app",components:{underconstruction:E,navbar:$},created:function(){this.SESSION_CHALLENGE()},methods:Object(o["a"])({},Object(N["b"])(["SESSION_CHALLENGE"])),computed:Object(o["a"])({},Object(N["c"])(["isauthed"]))},A=T,P=(n("cfa3"),Object(_["a"])(A,s,a,!1,null,"74852ade",null));P.options.__file="App.vue";var M=P.exports,R={windowwidth:0,isauthed:!1},U={windowwidth:function(t){return t.window_width},isauthed:function(t){return t.isauthed}},B={IS_AUTHED:function(t,e){t.isauthed=e}},G={SESSION_CHALLENGE:function(t){var e=t.commit;p.get("/api/session_challenge").then(function(){e("IS_AUTHED",!0)}).catch(function(){e("IS_AUTHED",!1)})}};i["a"].use(N["a"]);var W=new N["a"].Store({actions:G,getters:U,mutations:B,state:R}),H=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-con"},[n("hero"),t._m(0),n("imagetextblock",{attrs:{imgleft:!0,imgsrc:"https://atronin.space/images/work1.jpg",texttitle:"Co Live",textbody:t.body1}}),n("imagetextblock",{attrs:{imgleft:!1,imgsrc:"https://atronin.space/images/social1.jpg",texttitle:"Co Work",textbody:t.body2}}),n("imagetextblock",{attrs:{imgleft:!0,imgsrc:"https://atronin.space/images/social4.jpg",texttitle:"Events",textbody:t.body3}}),n("pricing"),n("rfooter")],1)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-cont"},[n("h1",[t._v("YOU@RONIN")]),n("p",[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])}],J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-con"},[n("h1",{staticClass:"massive"},[t._v("WE KNOW CO-DOING")])])}],F={name:"hero",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},K=F,Q=(n("38b9"),Object(_["a"])(K,J,V,!1,null,"0fbeb90a",null));Q.options.__file="hero.vue";var Z=Q.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block-con",class:t.imgleft?"makerow":"reverse"},[n("div",{staticClass:"img-con"},[n("img",{attrs:{src:t.imgsrc}})]),n("div",{staticClass:"text-con"},[n("h2",[t._v(t._s(t.texttitle))]),n("p",[t._v(t._s(t.textbody))])])])},Y=[],q={name:"imagetextblock",props:{imgleft:Boolean,texttitle:String,textbody:String,imgsrc:String},components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},tt=q,et=(n("5f3a"),Object(_["a"])(tt,X,Y,!1,null,"9dec0ef4",null));et.options.__file="imagetextblock.vue";var nt=et.exports,it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pricing-con"},[n("div",{staticClass:"item nightly"},[n("h4",{staticClass:"price"},[t._v("Nightly")]),n("h5",{staticClass:"duration"},[t._v("300k")])]),n("div",{staticClass:"item weekly"},[n("h4",{staticClass:"price"},[t._v("Weekly")]),n("h5",{staticClass:"duration"},[t._v("2 million")])]),n("div",{staticClass:"item monthly"},[n("h4",{staticClass:"price"},[t._v("Monthly")]),n("h5",{staticClass:"duration"},[t._v("7 million")])])])}],at={name:"pricing"},ot=at,rt=(n("fbc4"),Object(_["a"])(ot,it,st,!1,null,"0497776d",null));rt.options.__file="pricing.vue";var ct=rt.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-con"},[n("div",{staticClass:"left-con"},[n("h4",[t._v("SUBSCRIBE TO OUR NEWSLETTER")]),n("p",{staticClass:"subscribe-validation-message",class:{"subscribe-error":t.subscribeError}},[t._v(t._s(t.getSubscribeValidationMessage)+" "+t._s(t.validationMessage))]),n("div",{staticClass:"input-con"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.localEmail,expression:"localEmail"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter your email..."},domProps:{value:t.localEmail},on:{input:function(e){e.target.composing||(t.localEmail=e.target.value)}}}),n("button",{staticClass:"button",class:{"is-loading":t.subscribe_in_progress},attrs:{disabled:t.subscribe_in_progress},on:{click:t.handleSubscribe}},[t._v("SUBSCRIBE")])])]),t._m(0)])},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"right-con"},[n("h1",[t._v("GET IN TOUCH")]),n("p",[n("strong",[t._v("E_")]),t._v(" info@atronin.space")]),n("p",[n("strong",[t._v("P_")]),t._v(" +62 812 384 114 64")]),n("p",[t._v("Jalan Raya Canggu, Gang Pratama1, Canggu, Bali.")])])}],dt={name:"rfooter",data:function(){return{localEmail:"",subscribeError:!1,validationMessage:""}},methods:Object(o["a"])({},Object(N["b"])(["NEW_SUBSCRIPTION_EMAIL"]),{handleSubscribe:function(){this.validationMessage="",this.subscribeError=!1;var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;t.test(String(this.localEmail).toLowerCase())?(this.NEW_SUBSCRIPTION_EMAIL(this.localEmail),this.localEmail="",this.subscribeError=!1):(this.validationMessage="That looks like an invalid email address! Try again...",this.subscribeError=!0)}}),computed:Object(o["a"])({},Object(N["c"])(["getSubscribeValidationMessage"]),Object(N["d"])(["subscribe_in_progress"]))},pt=dt,mt=(n("e5e1"),Object(_["a"])(pt,lt,ut,!1,null,"1a09db36",null));mt.options.__file="rfooter.vue";var ft=mt.exports,ht={name:"home",components:{hero:Z,imagetextblock:nt,pricing:ct,rfooter:ft},data:function(){return{body1:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",body2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",body3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}},mounted:function(){},methods:{},computed:{}},vt=ht,gt=(n("615c"),Object(_["a"])(vt,D,z,!1,null,"dd3a6b3a",null));gt.options.__file="home.vue";var bt=gt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{})},yt=[],kt={name:"colive",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},Ct=kt,wt=(n("5f5a"),Object(_["a"])(Ct,_t,yt,!1,null,"235c462b",null));wt.options.__file="colive.vue";var xt=wt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{})},Ot=[],It={name:"cowork",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},St=It,jt=(n("0a13"),Object(_["a"])(St,Et,Ot,!1,null,"ecacd396",null));jt.options.__file="cowork.vue";var Lt=jt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{})},Nt=[],Tt={name:"events",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},At=Tt,Pt=(n("6da9"),Object(_["a"])(At,$t,Nt,!1,null,"317df26d",null));Pt.options.__file="events.vue";var Mt=Pt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{})},Ut=[],Bt={name:"book",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},Gt=Bt,Wt=(n("5c18"),Object(_["a"])(Gt,Rt,Ut,!1,null,"2562304d",null));Wt.options.__file="book.vue";var Ht=Wt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{})},zt=[],Jt={name:"pricing",components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},Vt=Jt,Ft=(n("e884"),Object(_["a"])(Vt,Dt,zt,!1,null,"424b0f83",null));Ft.options.__file="pricing.vue";var Kt=Ft.exports,Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Zt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"not-found"}},[n("div",{staticClass:"circles"},[n("p",{staticClass:"text-color-control"},[t._v("404"),n("br"),n("small",{staticClass:"text-color-control"},[t._v("PAGE NOT FOUND")])]),n("span",{staticClass:"circle big"}),n("span",{staticClass:"circle med"}),n("span",{staticClass:"circle small"})])])}],Xt={name:"PageNotFound",data:function(){return{}},mounted:function(){},methods:{},computed:{}},Yt=Xt,qt=(n("e359"),Object(_["a"])(Yt,Qt,Zt,!1,null,"cf9117e4",null));qt.options.__file="notfound.vue";var te=qt.exports;i["a"].use(H["a"]);var ee=new H["a"]({mode:"history",routes:[{path:"/",name:"home",component:bt},{path:"/colive",name:"colive",component:xt},{path:"/cowork",name:"cowork",component:Lt},{path:"/events",name:"events",component:Mt},{path:"/pricing",name:"pricing",component:Kt},{path:"/book",name:"book",component:Ht},{path:"*",name:"notfound",component:te}]}),ne=n("755e");i["a"].use(ne,{load:{key:"AIzaSyBR6eSdLVeJ3lD9UJeElCQtKQTdTxh8rwg",libraries:"places"}}),i["a"].use(W),i["a"].use(ee),i["a"].config.productionTip=!1,new i["a"]({store:W,router:ee,render:function(t){return t(M)}}).$mount("#app")},"5c18":function(t,e,n){"use strict";var i=n("aafc"),s=n.n(i);s.a},"5e79":function(t,e,n){},"5f3a":function(t,e,n){"use strict";var i=n("0ed5"),s=n.n(i);s.a},"5f5a":function(t,e,n){"use strict";var i=n("199b"),s=n.n(i);s.a},"615c":function(t,e,n){"use strict";var i=n("acfc"),s=n.n(i);s.a},"6da9":function(t,e,n){"use strict";var i=n("50e4"),s=n.n(i);s.a},7263:function(t,e,n){},"786b":function(t,e,n){},9507:function(t,e,n){"use strict";var i=n("4fec"),s=n.n(i);s.a},aafc:function(t,e,n){},acfc:function(t,e,n){},c67f:function(t,e,n){},cfa3:function(t,e,n){"use strict";var i=n("1e83"),s=n.n(i);s.a},d689:function(t,e,n){"use strict";var i=n("5e79"),s=n.n(i);s.a},e359:function(t,e,n){"use strict";var i=n("2a18"),s=n.n(i);s.a},e4c9:function(t,e,n){},e5e1:function(t,e,n){"use strict";var i=n("1e11"),s=n.n(i);s.a},e884:function(t,e,n){"use strict";var i=n("786b"),s=n.n(i);s.a},f764:function(t,e,n){},fbc4:function(t,e,n){"use strict";var i=n("c67f"),s=n.n(i);s.a}});
//# sourceMappingURL=app.d13dbc39.js.map