(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{109:function(t,e,a){var n=a(88),r=a(17);t.exports=function(t,e,a){if(n(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(t))}},110:function(t,e,a){var n=a(63)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},111:function(t,e,a){var n=a(34);n(n.P,"Array",{fill:a(112)}),a(73)("fill")},112:function(t,e,a){"use strict";var n=a(64),r=a(38),i=a(35);t.exports=function(t){for(var e=n(this),a=i(e.length),s=arguments.length,o=r(s>1?arguments[1]:void 0,a),c=s>2?arguments[2]:void 0,l=void 0===c?a:r(c,a);l>o;)e[o++]=t;return e}},113:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))},114:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(115),r=a.n(n);function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),r()(t,n.key,n)}}function s(t,e,a){return e&&i(t.prototype,e),a&&i(t,a),t}},115:function(t,e,a){t.exports=a(116)},116:function(t,e,a){a(117);var n=a(66).Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},117:function(t,e,a){var n=a(79);n(n.S+n.F*!a(67),"Object",{defineProperty:a(72).f})},118:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},119:function(t,e,a){t.exports=!a(67)&&!a(90)((function(){return 7!=Object.defineProperty(a(98)("div"),"a",{get:function(){return 7}}).a}))},120:function(t,e,a){var n=a(75);t.exports=function(t,e){if(!n(t))return t;var a,r;if(e&&"function"==typeof(a=t.toString)&&!n(r=a.call(t)))return r;if("function"==typeof(a=t.valueOf)&&!n(r=a.call(t)))return r;if(!e&&"function"==typeof(a=t.toString)&&!n(r=a.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},142:function(t,e,a){},143:function(t,e,a){},243:function(t,e,a){"use strict";var n=a(142);a.n(n).a},244:function(t,e,a){"use strict";var n=a(143);a.n(n).a},371:function(t,e,a){"use strict";a.r(e);a(95),a(96),a(71),a(111);var n=a(113),r=a(114),i=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],s=function(){function t(e){Object(n.a)(this,t),this.shape=[8,3],this.domNode=e}return Object(r.a)(t,[{key:"configure",value:function(){var t=this,e=Honeycomb.extendHex({size:75,orientation:"flat",currentIndex:function(){var e=this.toPoint(),a=t.gridType.pointToHex([e.x,e.y]);return a.x+1+(a.y+1)*t.shape[0]},render:function(e){var a=this.toPoint(),n=a.x,r=a.y,s=this.toPoint(),o=this.center().add(s),c=(t.gridType.pointToHex([s.x,s.y]),this.corners()),l=this.currentIndex(),u={width:1,color:"#999"};""===i[l][0]&&(u={}),this.draw=e.polygon(c.map((function(t){var e=t.x,a=t.y;return"".concat(e,",").concat(a)}))).fill("none").stroke(u).translate(n,r);var f=i[l][0],d=f.includes("\n")?o.y-26:o.y-13;e.text(f).font({size:13,anchor:"middle",leading:1.4,fill:"#EA6D4C"}).translate(o.x,d)},openAnchor:function(){var t=this.currentIndex();""!==i[t][0]&&window.open(i[t][1])},highlight:function(){var t=this.currentIndex();""!==i[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#EA6D4C"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(e)}},{key:"setup",value:function(){var t=this.shape;this.configure();var e=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(e)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(e){var a=e.offsetX,n=e.offsetY,r=t.gridType.pointToHex([a,n]),i=t.gridInstance.get(r);i&&i.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(e){var a=e.offsetX,n=e.offsetY,r=t.gridType.pointToHex([a,n]),i=t.gridInstance.get(r);i&&i.openAnchor()}))}}]),t}(),o={mounted:function(){var t=new s(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},c=(a(243),a(1)),l={components:{JobsDiagram:Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"1a770786",null).exports}},u=(a(244),Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"main-section black-text py-8"},[a("h1",{staticClass:"text-center font-normal text-3xl px-12",attrs:{id:"more"}},[t._v("For anyone who works with data"),a("br"),a("small",{staticClass:"font-light text-xl"},[t._v("Especially diverse data and/or across tools or teams"),a("hr")])]),t._v(" "),a("div",{staticClass:"features flex flex-row flex-wrap lg:px-40"},[a("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[a("div",{staticClass:"py-12 px-8 text-center"},[a("img",{attrs:{src:"/img/home/researchers-color.svg",height:"223.375"}}),t._v(" "),a("h3",{staticClass:"font-normal hover:underline"},[t._v("Researchers")]),t._v(" "),a("p",[t._v("Easily create reproducible research")])])]),t._v(" "),a("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[a("div",{staticClass:"py-12 px-8 text-center"},[a("img",{attrs:{src:"/img/home/dscientists-color.svg",height:"223.375"}}),t._v(" "),a("h3",{staticClass:"font-normal hover:underline"},[t._v("Data Scientists")]),t._v(" "),a("p",[t._v("Create pipelines without effort")])])]),t._v(" "),a("div",{staticClass:"w-full md:w-1/3 feature flex justify-center"},[a("div",{staticClass:"py-12 px-8 text-center"},[a("img",{attrs:{src:"/img/home/dengineers-color.svg",height:"223.375"}}),t._v(" "),a("h3",{staticClass:"font-normal hover:underline"},[t._v("Data Engineers")]),t._v(" "),a("p",[t._v("Standardize data platforms")])])])])]),t._v(" "),a("div",{staticClass:"main-section py-10 black-text bg-secondary"},[a("div",{staticClass:"mx-auto lg:w-3/5 text-center font-normal"},[a("h1",{staticClass:"text-3xl lg:px-40",attrs:{id:"more"}},[t._v("Data Integration and Management")]),a("br"),a("small",{staticClass:"text-lg"},[t._v("Data integration is the job of bringing diverse data together, cleaning it up, knitting it together and pushing it into downstream applications, analytics or warehouses – and doing this reliably, repeatedly and automatedly.")]),a("hr",{staticClass:"mt-4"})]),t._v(" "),a("div",{staticClass:"flex flex-row flex-wrap w-3/4 mx-auto"},[a("div",{staticClass:"lg:flex-1 flex-col pt-10"},[a("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[a("div",{staticClass:"w-1/5 px-8"},[a("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/sourcing-data.svg"}})]),t._v(" "),a("div",{},[a("h3",{staticClass:"font-normal hover:underline"},[t._v(" Sourcing Data ")]),t._v(" "),a("p",{staticClass:"xxl:w-2/3"},[t._v(" Data integration work will require a way to reliably discover internal and external data assets. ")])])]),t._v(" "),a("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[a("div",{staticClass:"w-1/5 px-8"},[a("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/transforming-data.svg"}})]),t._v(" "),a("div",{},[a("h3",{staticClass:"font-normal hover:underline"},[t._v(" Transforming Data ")]),t._v(" "),a("p",{staticClass:"xxl:w-2/3"},[t._v(" Data often requires some cleaning (integration) and conversions from one format to another. ")])])]),t._v(" "),a("div",{staticClass:"flex flex-row flex-wrap sm:flex-no-wrap"},[a("div",{staticClass:"w-1/5 px-8"},[a("img",{staticClass:"w-2/3 pt-4 pl-8 sm:px-0",attrs:{src:"/img/home/pushing-data.svg"}})]),t._v(" "),a("div",{},[a("h3",{staticClass:"font-normal hover:underline"},[t._v(" Pushing and Storing Data ")]),t._v(" "),a("p",{staticClass:"xxl:w-2/3"},[t._v(" With the data explosion it has become a job in itself to manage data - to push and store data. ")])])])]),t._v(" "),a("div",{staticClass:"container lg:flex-1 md:pt-16 pt-8"},[a("img",{staticClass:"shadow-lg",attrs:{src:"/img/home/dmai.png"}})])])]),t._v(" "),a("div",{staticClass:"banner p-8 black-text gray-section",attrs:{id:"video-section"}},[a("div",{staticClass:"inner-container"},[a("div",{staticClass:"sm:container mx-auto text-center"},[a("h1",{staticClass:"font-normal text-3xl"},[t._v("Why Frictionless Data?")]),t._v(" "),a("p",{staticClass:"text-lg"},[a("a",{staticClass:"hover:underline",attrs:{href:"https://rufuspollock.com/",target:"_blank"}},[t._v("Rufus Pollock")]),t._v(" explains the problem Frictionless Data addresses "),a("br"),t._v(" through simple specifications and software.")]),t._v(" "),a("div",{staticClass:"video my-10"},[a("iframe",{staticClass:"w-full h-full",attrs:{src:"https://www.youtube.com/embed/lWHKVXxuci0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])]),t._v(" "),a("div",{staticClass:"banner p-8 text-black"},[a("div",{staticClass:"inner-container"},[a("h1",{staticClass:"text-center text-3xl font-normal"},[t._v("Some of our Tooling"),a("hr")]),t._v(" "),a("div",{staticClass:"py-10 mx-auto flex flex-row flex-wrap lg:justify-between text-center justify-center"},[a("div",{staticClass:"sm:w-2/5 lg:w-1/5 flex flex-col tooling-card"},[a("div",{staticClass:"image-border"},[a("img",{staticClass:"w-20 mx-auto",attrs:{src:"/img/home/data-package-new.svg"}})]),t._v(" "),a("div",{staticClass:"card-details text-center pt-10"},[a("a",{staticClass:"text-xl text-black hover:underline",attrs:{href:"/tooling/data-package-tools/"}},[t._v("Data Package")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("Simple container format used to describe and package data.")]),t._v(" "),a("a",{staticClass:"text-base hover:underline",attrs:{href:"/tooling/data-package-tools/"}},[t._v("Read more »")])])]),t._v(" "),a("div",{staticClass:"sm:w-2/5 lg:w-1/5 my-16 flex flex-col tooling-card"},[a("div",{staticClass:"image-border"},[a("img",{staticClass:"w-20 mx-auto",attrs:{src:"/img/home/datahub-new2.svg"}})]),t._v(" "),a("div",{staticClass:"card-details text-center pt-10"},[a("a",{staticClass:"text-xl text-black hover:underline",attrs:{href:"/tooling/goodtables/"}},[t._v("DataHub")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("Publish and find data on the next generation data platform.")]),t._v(" "),a("a",{staticClass:"text-base hover:underline",attrs:{href:"/tooling/datahub/"}},[t._v("Read more »")])])]),t._v(" "),a("div",{staticClass:"sm:w-2/5 lg:w-1/5 my-16 flex flex-col tooling-card"},[a("div",{staticClass:"image-border"},[a("img",{staticClass:"w-20 mx-auto",attrs:{src:"/img/home/goodtables-new.svg"}})]),t._v(" "),a("div",{staticClass:"card-details text-center pt-10"},[a("a",{staticClass:"text-xl text-black hover:underline",attrs:{href:"/tooling/goodtables/"}},[t._v("GoodTables")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("Validate data on every change so you catch errors before your users.")]),t._v(" "),a("a",{staticClass:"text-base hover:underline",attrs:{href:"/tooling/goodtables/"}},[t._v("Read more »")])])]),t._v(" "),a("div",{staticClass:"sm:w-2/5 lg:w-1/5 my-16 flex flex-col  tooling-card"},[a("div",{staticClass:"image-border"},[a("img",{staticClass:"w-20 mx-auto",attrs:{src:"/img/home/dataflows-new.svg"}})]),t._v(" "),a("div",{staticClass:"card-details text-center pt-10"},[a("a",{staticClass:"text-xl text-black hover:underline",attrs:{href:"/tooling/goodtables/"}},[t._v("DataFlows")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("A light intuitive framework for building data processing flows.")]),t._v(" "),a("a",{staticClass:"text-base hover:underline",attrs:{href:"/tooling/data-package-pipelines/"}},[t._v("Read more »")])])])])])])])}),[],!1,null,null,null));e.default=u.exports},63:function(t,e,a){var n=a(23)("wks"),r=a(24),i=a(2).Symbol,s="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:r)("Symbol."+t))}).store=n},64:function(t,e,a){var n=a(17);t.exports=function(t){return Object(n(t))}},65:function(t,e,a){"use strict";var n=a(5);t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},66:function(t,e){var a=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=a)},67:function(t,e,a){t.exports=!a(90)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},68:function(t,e,a){var n=a(22),r=a(37),i=a(64),s=a(35),o=a(86);t.exports=function(t,e){var a=1==t,c=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f,v=e||o;return function(e,o,p){for(var h,g,x=i(e),m=r(x),y=n(o,p,3),w=s(m.length),b=0,C=a?v(e,w):c?v(e,0):void 0;w>b;b++)if((d||b in m)&&(g=y(h=m[b],b,x),t))if(a)C[b]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:C.push(h)}else if(u)return!1;return f?-1:l||u?u:C}}},69:function(t,e){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},71:function(t,e,a){"use strict";var n=a(34),r=a(68)(1);n(n.P+n.F*!a(65)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},72:function(t,e,a){var n=a(80),r=a(119),i=a(120),s=Object.defineProperty;e.f=a(67)?Object.defineProperty:function(t,e,a){if(n(t),e=i(e,!0),n(a),r)try{return s(t,e,a)}catch(t){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[e]=a.value),t}},73:function(t,e,a){var n=a(63)("unscopables"),r=Array.prototype;null==r[n]&&a(19)(r,n,{}),t.exports=function(t){r[n][t]=!0}},74:function(t,e,a){var n=a(72),r=a(91);t.exports=a(67)?function(t,e,a){return n.f(t,e,r(1,a))}:function(t,e,a){return t[e]=a,t}},75:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},78:function(t,e,a){var n=a(18);t.exports=Array.isArray||function(t){return"Array"==n(t)}},79:function(t,e,a){var n=a(69),r=a(66),i=a(97),s=a(74),o=a(81),c=function(t,e,a){var l,u,f,d=t&c.F,v=t&c.G,p=t&c.S,h=t&c.P,g=t&c.B,x=t&c.W,m=v?r:r[e]||(r[e]={}),y=m.prototype,w=v?n:p?n[e]:(n[e]||{}).prototype;for(l in v&&(a=e),a)(u=!d&&w&&void 0!==w[l])&&o(m,l)||(f=u?w[l]:a[l],m[l]=v&&"function"!=typeof w[l]?a[l]:g&&u?i(f,n):x&&w[l]==f?function(t){var e=function(e,a,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,a)}return new t(e,a,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?i(Function.call,f):f,h&&((m.virtual||(m.virtual={}))[l]=f,t&c.R&&y&&!y[l]&&s(y,l,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},80:function(t,e,a){var n=a(75);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},81:function(t,e){var a={}.hasOwnProperty;t.exports=function(t,e){return a.call(t,e)}},86:function(t,e,a){var n=a(87);t.exports=function(t,e){return new(n(t))(e)}},87:function(t,e,a){var n=a(4),r=a(78),i=a(63)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},88:function(t,e,a){var n=a(4),r=a(18),i=a(63)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},90:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},91:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},95:function(t,e,a){"use strict";var n=a(34),r=a(36)(!0);n(n.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(73)("includes")},96:function(t,e,a){"use strict";var n=a(34),r=a(109);n(n.P+n.F*a(110)("includes"),"String",{includes:function(t){return!!~r(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},97:function(t,e,a){var n=a(118);t.exports=function(t,e,a){if(n(t),void 0===e)return t;switch(a){case 1:return function(a){return t.call(e,a)};case 2:return function(a,n){return t.call(e,a,n)};case 3:return function(a,n,r){return t.call(e,a,n,r)}}return function(){return t.apply(e,arguments)}}},98:function(t,e,a){var n=a(75),r=a(69).document,i=n(r)&&n(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}}}]);