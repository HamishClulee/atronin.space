(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-166ea6a0"],{"0086":function(t,e,a){"use strict";var i=a("b0f9"),n=a.n(i);n.a},3007:function(t,e,a){"use strict";var i=a("415a"),n=a.n(i);n.a},"415a":function(t,e,a){},ac6a:function(t,e,a){for(var i=a("cadf"),n=a("0d58"),s=a("2aba"),l=a("7726"),r=a("32e9"),c=a("84f2"),o=a("2b4c"),u=o("iterator"),g=o("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=n(f),h=0;h<m.length;h++){var p,v=m[h],S=f[v],y=l[v],L=y&&y.prototype;if(L&&(L[u]||r(L,u,d),L[g]||r(L,g,v),c[v]=d,S))for(p in i)L[p]||s(L,p,i[p],!0)}},b0f9:function(t,e,a){},c573:function(t,e,a){},e77a:function(t,e,a){"use strict";var i=a("c573"),n=a.n(i);n.a},f115:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-con"},[a("div",{staticClass:"tags-con"},[a("tagselect")],1),t.loading?t._e():a("div",{staticClass:"gallery",style:t.style},t._l(t.images,function(t,e){return a("rimage",{key:e,attrs:{source:t.path,alttext:t.alt,index:e}})}))])},n=[],s=(a("ac6a"),a("fd93")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"gallery__item",style:t.style,on:{click:function(e){t.opengallery()}}},[a("img",{staticClass:"gallery__img",attrs:{src:"https://atronin.space/images/"+t.source,alt:t.alttext}}),t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlay"},[a("h5",{staticClass:"text"},[t._v("view gallery")])])}],c=(a("c5f6"),a("cadf"),a("551c"),a("097d"),{name:"rimage",props:{source:{type:String,required:!1,default:""},alttext:{type:String,required:!1,default:""},index:Number},data:function(){return{style:{gridRowStart:String(Math.ceil((this.index+1)/3)),gridColumnStart:String(this.index%3+1),gridRowEnd:String(Math.ceil((this.index+1)/3)+1),gridColumnEnd:String(this.index%3+2)}}},mounted:function(){},methods:{opengallery:function(){this.$root.$emit("open-gallery",this.index)}},computed:{}}),o=c,u=(a("e77a"),a("2877")),g=Object(u["a"])(o,l,r,!1,null,"3c4273ae",null);g.options.__file="rimage.vue";var d=g.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tag-select"},[t._l(t.tags,function(e,i,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:null===t.active||t.active===i,expression:"active === null || active === n"}],key:n,staticClass:"tag",on:{click:function(e){t.tagselected(i)}}},[t._v("\n            #"+t._s(e)+"\n    ")])}),null!==t.active?a("button",{staticClass:"button clear-tags",on:{click:function(e){t.tagselected(null)}}},[t._v("\n            Clear Tags\n    ")]):t._e()],2)},m=[],h={name:"tagselect",props:{},data:function(){return{tags:s["a"].TAGS,active:null}},methods:{tagselected:function(t){this.active=t,this.$parent.$emit("tag-selected",t)}},computed:{}},p=h,v=(a("0086"),Object(u["a"])(p,f,m,!1,null,"372954d6",null));v.options.__file="tagselect.vue";var S=v.exports,y={name:"gallery",components:{rimage:d,tagselect:S},data:function(){return{ogimages:s["a"].images,images:s["a"].images,tags:s["a"].TAGS,style:{gridTemplateRows:"repeat(".concat(this.length,", 20vw)")},length:s["a"].images.length,loading:!1}},mounted:function(){var t=this;this.$on("tag-selected",function(e){t.loading=!0,null!==e?(t.images=[],t.length=0,t.ogimages.forEach(function(a){-1!==a.tags.indexOf(t.tags[e])&&t.images.push(a)}),t.length=t.ogimages.length):(t.ogimages.forEach(function(e){t.images.push(e)}),t.length=t.ogimages.length),t.loading=!1})},methods:{},computed:{}},L=y,_=(a("3007"),Object(u["a"])(L,i,n,!1,null,"63c99c26",null));_.options.__file="gallery.vue";e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-166ea6a0.3be6dc88.js.map