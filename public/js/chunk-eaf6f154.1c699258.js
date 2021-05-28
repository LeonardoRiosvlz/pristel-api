(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eaf6f154"],{1331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=r},"2a12":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=r},3360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.withParams)({type:"and"},(function(){for(var e=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t.length>0&&t.reduce((function(t,a){return t&&a.apply(e,n)}),!0)}))};t.default=r},"3a54":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=r},"45b8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=(0,n.regex)("numeric",/^[0-9]*$/);t.default=r},"46bc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=r},"5d75":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,i=(0,n.regex)("email",r);t.default=i},"5db3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=r},6235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=r},6417:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"not"},(function(t,a){return!(0,n.req)(t)||!e.call(this,t,a)}))};t.default=r},"772d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,n.regex)("url",r);t.default=i},"78ef":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=r(a("8750"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var s=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=s;var o=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=o;var c=function(e,t,a){return"function"===typeof e?e.call(t,a):a[e]};t.ref=c;var u=function(e,t){return(0,n.default)({type:e},(function(e){return!s(e)||t.test(e)}))};t.regex=u},8750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",VUE_APP_APIKEY:"",VUE_APP_APPId:"",VUE_APP_AUTHDOMAIN:"",VUE_APP_DATABASEURL:"",VUE_APP_DEFAULT_AUTH:"fack-backend",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"en",VUE_APP_MEASUREMENTID:"",VUE_APP_MESSAGINGSENDERID:"",VUE_APP_PROJECTId:"",VUE_APP_STORAGEBUCKET:"",BASE_URL:"/"}).BUILD?a("cb69").withParams:a("0234").withParams,r=n;t.default=r},"91d3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var a="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(i)}))};t.default=r;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},a434:function(e,t,a){"use strict";var n=a("23e7"),r=a("23cb"),i=a("a691"),s=a("50c4"),o=a("7b0b"),c=a("65f0"),u=a("8418"),l=a("1dde"),d=l("splice"),f=Math.max,m=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var a,n,l,d,h,b,g=o(this),y=s(g.length),_=r(e,y),w=arguments.length;if(0===w?a=n=0:1===w?(a=0,n=y-_):(a=w-2,n=m(f(i(t),0),y-_)),y+a-n>p)throw TypeError(v);for(l=c(g,n),d=0;d<n;d++)h=_+d,h in g&&u(l,d,g[h]);if(l.length=n,a<n){for(d=_;d<y-n;d++)h=d+n,b=d+a,h in g?g[b]=g[h]:delete g[b];for(d=y;d>y-n+a;d--)delete g[d-1]}else if(a>n)for(d=y-n;d>_;d--)h=d+n-1,b=d+a-1,h in g?g[b]=g[h]:delete g[b];for(d=0;d<a;d++)g[d+_]=arguments[d+2];return g.length=y-n+a,l}})},aa82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,a){return!(0,n.ref)(e,this,a)||(0,n.req)(t)}))};t.default=r},b5ae:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return C.default}}),t.helpers=void 0;var n=j(a("6235")),r=j(a("3a54")),i=j(a("45b8")),s=j(a("ec11")),o=j(a("5d75")),c=j(a("c99d")),u=j(a("91d3")),l=j(a("2a12")),d=j(a("5db3")),f=j(a("d4f4")),m=j(a("aa82")),p=j(a("e652")),v=j(a("b6cb")),h=j(a("772d")),b=j(a("d294")),g=j(a("3360")),y=j(a("6417")),_=j(a("eb66")),w=j(a("46bc")),x=j(a("1331")),C=j(a("c301")),P=S(a("78ef"));function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=P},b6cb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,a){return t===(0,n.ref)(e,this,a)}))};t.default=r},c301:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=r},c99d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=r;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,a){"use strict";(function(e){function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},r=function(e,t){return"object"===a(e)&&void 0!==t?t:e((function(){}))},i=n.vuelidate?n.vuelidate.withParams:r;t.withParams=i}).call(this,a("c8ba"))},d03b:function(e,t,a){e.exports=a.p+"img/avatar-6.11d7dc68.jpg"},d294:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.withParams)({type:"or"},(function(){for(var e=this,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return t.length>0&&t.reduce((function(t,a){return t||a.apply(e,n)}),!1)}))};t.default=r},d4f4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=r},d827:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("PageHeader",{attrs:{title:e.title,items:e.items}}),n("div",{staticClass:"d-lg-flex mb-4"},[n("div",{staticClass:"chat-leftsidebar"},[n("div",{staticClass:"p-3 border-bottom"},[n("div",{staticClass:"media"},[n("div",{staticClass:"align-self-center mr-3"},[n("img",{staticClass:"avatar-xs rounded-circle",attrs:{src:a("95f5"),alt:""}})]),n("div",{staticClass:"media-body"},[n("h5",{staticClass:"font-size-15 mt-0 mb-1"},[e._v("Ricky Clark")]),n("p",{staticClass:"text-muted mb-0"},[n("i",{staticClass:"mdi mdi-circle text-success align-middle mr-1"}),e._v(" Active ")])]),n("div",[n("b-dropdown",{staticClass:"chat-noti-dropdown",attrs:{right:"",variant:"white"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"mdi mdi-dots-horizontal font-size-20"})]},proxy:!0}])},[n("b-dropdown-item",[e._v("Action")]),n("b-dropdown-item",[e._v("Another actions")]),n("b-dropdown-item",[e._v("Something else here")])],1)],1)])]),n("div",{staticClass:"card-body border-bottom py-2"},[n("div",{staticClass:"search-box chat-search-box"},[n("div",{staticClass:"position-relative"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."}}),n("i",{staticClass:"ri-search-line search-icon"})])])]),n("b-modal",{attrs:{id:"modal",false:"",size:"",title:"Crear Sala","hide-footer":""}},[n("ValidationObserver",{ref:"form"},[n("b-row",[n("b-col",[n("div",{staticClass:"form-group"},[n("label",[e._v("Nombre")]),n("ValidationProvider",{attrs:{name:"cargo",rules:"required|alpha_spaces"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[n("input",{directives:[{name:"model",rawName:"v-model",value:e.titulo,expression:"titulo"}],staticClass:"form-control",attrs:{type:"text",placeholder:" ",disabled:e.ver},domProps:{value:e.titulo},on:{input:function(t){t.target.composing||(e.titulo=t.target.value)}}}),n("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)])],1)],1),e.ver||e.editMode?e._e():n("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Crear")]),!e.ver&&e.editMode?n("button",{staticClass:"btn btn-block float-right btn-success",on:{click:e.switchLoc}},[e._v("Editar")]):e._e()],1),n("div",{staticClass:"chat-leftsidebar-nav"},[n("b-tabs",{attrs:{pills:"",fill:"","content-class":"py-4",justified:""}},[n("b-tab",{attrs:{title:"Tab 1",active:""},scopedSlots:e._u([{key:"title",fn:function(){return[n("i",{staticClass:"ri-message-2-line font-size-20"}),n("span",{staticClass:"mt-2 d-none d-sm-block"},[e._v("Mis Chats")])]},proxy:!0}])},[n("b-card-text",[n("div",[n("b-button",{staticClass:"btn-sm ml-2 mb-3",attrs:{pill:"",variant:"success"},on:{click:function(t){return e.setSala()}}},[n("i",{staticClass:"  ri-mail-add-line align-middle mr-2"}),e._v(" Nueva sala")]),n("simplebar",{staticStyle:{"max-height":"345px"},attrs:{id:"scrollElement"}},[n("ul",{staticClass:"list-unstyled chat-list"},e._l(e.sala,(function(t){return n("li",{key:t.id,class:{active:e.username==t.titulo},on:{click:function(a){return e.chatUsername(t.titulo,t.id)}}},[n("a",{attrs:{href:"javascript: void(0);"}},[n("div",{staticClass:"media"},[n("div"),n("div",{staticClass:"media-body overflow-hidden"},[n("h5",{staticClass:"text-truncate font-size-14 mb-1"},[e._v(" "+e._s(t.titulo)+" ")]),n("p",{staticClass:"text-truncate mb-0"},[e._v(" "+e._s(t.createdAt)+" ")])]),n("div",{staticClass:"font-size-11"},[e._v(e._s(t.time))])])])])})),0)])],1)])],1),n("b-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[n("i",{staticClass:"ri-group-line font-size-20"}),n("span",{staticClass:"mt-2 d-none d-sm-block"},[e._v("Relacionadas")])]},proxy:!0}])},[n("b-card-text",[n("div",[n("simplebar",{staticStyle:{"max-height":"345px"},attrs:{id:"scrollElement"}},[n("ul",{staticClass:"list-unstyled chat-list"},e._l(e.invitaciones,(function(t){return n("li",{key:t.id,class:{active:e.username==t.titulo},on:{click:function(a){return e.chatUsername(t.conversacion.titulo,t.conversacion.id)}}},[n("a",{attrs:{href:"javascript: void(0);"}},[n("div",{staticClass:"media"},[n("div"),n("div",{staticClass:"media-body overflow-hidden"},[n("h5",{staticClass:"text-truncate font-size-14 mb-1"},[e._v(" "+e._s(t.conversacion.titulo)+" ")]),n("p",{staticClass:"text-truncate mb-0"},[e._v(" "+e._s(t.createdAt)+" ")])]),n("div",{staticClass:"font-size-11"},[e._v(e._s(t.time))])])])])})),0)])],1)])],1),n("b-tab",{scopedSlots:e._u([{key:"title",fn:function(){return[n("i",{staticClass:"ri-contacts-book-2-line font-size-20"}),n("span",{staticClass:"mt-2 d-none d-sm-block"},[e._v("Contacts")])]},proxy:!0}])},[n("b-card-text",[n("h5",{staticClass:"font-size-14 px-3 mb-3"},[e._v("Contactos ")]),n("div",{staticClass:"mt-4"},[n("ul",{staticClass:"list-unstyled chat-list"},e._l(e.contactos,(function(t){return n("li",{key:t.id},[n("a",{attrs:{href:"#"},on:{click:function(a){return e.agregarSubs(t.id)}}},[n("h5",{staticClass:"font-size-14 mb-0"},[e._v(e._s(t.nombre)+" "+e._s(t.apellido))]),n("p",{staticClass:"text-muted m-0"},[e._v(e._s(t.cargo))])])])})),0)])])],1)],1)],1)],1),n("div",{staticClass:"w-100 user-chat mt-4 mt-sm-0"},[n("div",{staticClass:"p-3 px-lg-4 user-chat-border"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 col-6"},[n("h5",{staticClass:"font-size-15 mb-1 text-truncate"},[e._v(e._s(e.username))]),n("p",{staticClass:"text-muted text-truncate mb-0"}),e._l(e.subs,(function(t){return n("p",{key:t.id,staticStyle:{display:"inline"}},[e._v("("+e._s(t.user.nombre)+" "+e._s(t.user.apellido)+")")])}))],2),n("div",{staticClass:"col-md-8 col-3"},[n("ul",{staticClass:"list-inline user-chat-nav text-right mb-0"},[n("li",{staticClass:"list-inline-item d-inline-block d-sm-none"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn nav-btn dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"mdi mdi-magnify"})]),n("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-md"},[n("form",{staticClass:"p-2"},[n("div",{staticClass:"search-box"},[n("div",{staticClass:"position-relative"},[n("input",{staticClass:"form-control rounded",attrs:{type:"text",placeholder:"Search..."}}),n("i",{staticClass:"mdi mdi-magnify search-icon"})])])])])])]),n("li",{staticClass:"d-none d-sm-inline-block"},[n("div",{staticClass:"search-box mr-2"},[n("div",{staticClass:"position-relative"},[n("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search..."}}),n("i",{staticClass:"mdi mdi-magnify search-icon"})])])]),n("li",{staticClass:"list-inline-item d-none d-sm-inline-block"},[n("b-dropdown",{attrs:{"toggle-class":"nav-btn",right:"",variant:"white"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"mdi mdi-cog"})]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(t){return e.limpiarSala()}}},[e._v("Limpiar Chat")]),n("b-dropdown-item",{on:{click:function(t){return e.eliminarSala()}}},[e._v("Borrar Chat")])],1)],1),n("li",{staticClass:"list-inline-item"},[n("b-dropdown",{attrs:{"toggle-class":"nav-btn",right:"",variant:"white"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"mdi mdi-dots-horizontal"})]},proxy:!0}])},e._l(e.subs,(function(t){return n("b-dropdown-item",{key:t.id,on:{click:function(a){return e.eliminarSuscripcion(t.id)}}},[n("i",{staticClass:"far far fa-times-circle"}),e._v(" "+e._s(t.user.nombre)+" "+e._s(t.user.apellido)+" - "+e._s(t.user.cargo))])})),1)],1)])])])]),n("div",{staticClass:"px-lg-2 chat-users"},[n("div",{staticClass:"chat-conversation p-3"},[n("simplebar",{ref:"current",staticStyle:{"max-height":"450px"},attrs:{id:"containerElement"}},[n("ul",{staticClass:"list-unstyled mb-0 pr-3"},e._l(e.mensajes,(function(t){return n("li",{key:t.id,class:{right:""+t.user.id==e.usuarioDB.id}},[n("div",{staticClass:"conversation-list"},[t.user.imagen?n("div",{staticClass:"chat-avatar"},[n("img",{attrs:{src:""+t.user.imagen,alt:""}})]):e._e(),n("div",{staticClass:"ctext-wrap"},[n("div",{staticClass:"conversation-name"},[e._v(e._s(t.user.nombre)+" "+e._s(t.user.apellido)+" ("+e._s(t.user.cargo)+")")]),n("div",{staticClass:"ctext-wrap-content"},[n("p",{staticClass:"mb-0"},[e._v(e._s(t.texto))])]),n("p",{staticClass:"chat-time mb-0"},[n("i",{staticClass:"bx bx-time-five align-middle mr-1"}),e._v(" "+e._s(t.created_at)+" ")])])])])})),0)])],1),n("div",{staticClass:"px-lg-3"},[n("div",{staticClass:"p-3 chat-input-section"},[n("form",{staticClass:"row",on:{submit:function(t){return t.preventDefault(),e.formSubmit(t)}}},[n("div",{staticClass:"col"},[n("div",{staticClass:"position-relative"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control chat-input",class:{"is-invalid":e.submitted&&e.$v.form.message.$error},attrs:{type:"text",placeholder:"Enter Message..."},domProps:{value:e.form.message},on:{input:function(t){t.target.composing||e.$set(e.form,"message",t.target.value)}}}),e.submitted&&e.$v.form.message.$error?n("div",{staticClass:"invalid-feedback"},[e.$v.form.message.required?e._e():n("span",[e._v("This value is required.")])]):e._e()])]),n("div",{staticClass:"col-auto"},[n("button",{staticClass:"btn btn-primary chat-send w-md waves-effect waves-light",attrs:{type:"submit",disabled:!e.id_sala}},[n("span",{staticClass:"d-none d-sm-inline-block mr-2"},[e._v("Enviar")]),n("i",{staticClass:"mdi mdi-send"})])])])])])])])]),n("notifications",{attrs:{group:"foo"}})],1)},r=[],i=a("1da1"),s=a("5530"),o=(a("a434"),a("96cf"),a("8d3b")),c=a("8e27"),u=a.n(c),l=a("5658"),d=a("2579"),f=a("2f62"),m=[{id:1,image:a("95f5"),name:"Frank Vickery",message:"Hey! there I'm available",time:"04    min",status:"online"},{id:2,image:a("61ae"),name:"Robert Winter",message:"I've finished it! See you so",time:"09 min",status:"away"},{id:3,name:"Crystal Elliott",message:"This theme is awesome!",time:"21 min",status:"online"},{id:4,image:a("1f62"),name:"Kristen Steele",message:"Nice to meet you",time:"1 hr"},{id:5,name:"Mitchel Givens",message:"Hey! there I'm available",time:"3 hrs",status:"away"},{id:6,image:a("d03b"),name:"Stephen Hadley",message:"I've finished it! See you so",time:"5 hrs",status:"online"},{id:7,image:a("95f5"),name:"Tracy Penley",message:"This theme is awesome!",time:"24/03",status:"online"}],p=[{name:"Frank Vickery",image:a("95f5"),message:"Hello!",time:"10:00"},{align:"right",name:"Henry Wells",message:"Hi, How are you? What about our next meeting?",time:"10:02"},{name:"Frank Vickery",image:a("95f5"),message:"Yeah everything is fine",time:"10:06"},{name:"Frank Vickery",image:a("95f5"),message:"& Next meeting tomorrow 10.00AM",time:"10:06"},{align:"right",name:"Henry Wells",message:"Wow that's great",time:"10:07"}],v=a("b5ae"),h=a("7bb1"),b={page:{title:"Chat",meta:[{name:"description"}]},components:{Layout:l["a"],PageHeader:d["a"],simplebar:o["a"],ValidationProvider:h["b"],ValidationObserver:h["a"]},data:function(){return{socket:u()("localhost:5000"),id_sala:"",chatData:m,chatMessagesData:p,title:"Chat",titulo:"",items:[{text:"Skote",href:"/"},{text:"Chat",active:!0}],submitted:!1,form:{message:""},ver:!1,editMode:!1,sala:[],mensajes:[],contactos:[],subs:[],invitaciones:[],username:""}},validations:{form:{message:{required:v["required"]}}},computed:Object(s["a"])({},Object(f["d"])(["usuarioDB","load"])),watch:{load:function(e,t){this.listarSala(this.id_sala)}},methods:Object(s["a"])(Object(s["a"])({},Object(f["b"])(["guardarUsuario"])),{},{switchLoc:function(){var e=this;this.editMode?this.$refs.form.validate().then((function(t){t&&e.editarSala()})):this.$refs.form.validate().then((function(t){t&&e.agregarSala()}))},agregarSala:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=new FormData,e.form,a.append("titulo",e.titulo),t.next=5,e.axios.post("api/chat/crear",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&(e.$swal("Agregado exito!","","success"),e.listarSalas(),e.$root.$emit("bv::hide::modal","modal","#btnShow"))})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 5:case"end":return t.stop()}}),t)})))()},agregarSubs:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new FormData,n.append("id_conversacion",t.id_sala),n.append("uid",e),a.next=5,t.axios.post("api/chat/suscribir",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status){if(!e.data[1])return void t.$swal("Este usuario ya esta suscrito a esta sala!","","warning");403==e.status&&t.$swal("No tienes permiso para suscribir en esta sala!","","warning"),t.listarSala(),t.$root.$emit("bv::hide::modal","modal","#btnShow")}})).catch((function(e){t.$swal(e.response.data.message)}));case 5:case"end":return a.stop()}}),a)})))()},setSala:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.titulo="",e.$root.$emit("bv::show::modal","modal","#btnShow");case 2:case"end":return t.stop()}}),t)})))()},listarSalas:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("api/chat/salas").then((function(t){e.sala=t.data.rows})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()},listarInivitaciones:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("api/chat/invitaciones").then((function(t){e.invitaciones=t.data.rows})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()},listarContactos:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("api/user/contactos").then((function(t){e.contactos=t.data.rows;for(var a=0;a<e.contactos.length;a++)e.contactos[a].id===e.usuarioDB.id&&e.contactos.splice(a,1)})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()},chatUsername:function(e,t){this.id_sala=t,this.username=e,this.usermessage="Hello",this.chatMessagesData=[],this.listarSala(t)},listarSala:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("id",t.id_sala),e.next=4,t.axios.post("api/chat/salas",a).then((function(e){t.mensajes=e.data.mensajes.rows,t.subs=e.data.subs.rows,t.handleScroll()})).catch((function(e){console.log("error"+e)}));case 4:case"end":return e.stop()}}),e)})))()},eliminarSalas:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new FormData,n.append("id_conversacion",e),a.next=4,t.axios.post("api/Chat/delete",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$swal("Eliminado con exito!","","success"),t.listarSalas())})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data.message)}));case 4:case"end":return a.stop()}}),a)})))()},eliminarSala:function(){var e=this;this.$swal({title:"Desea borrar esta sala?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(t){t.isConfirmed&&e.eliminarSalas(e.id_sala)}))},eliminarSuscripcions:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new FormData,n.append("id",e),n.append("id_conversacion",t.id_sala),a.next=5,t.axios.post("api/Chat/expulsar",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$swal("Expulsado con exito!","","success"),t.listarSala())})).catch((function(e){t.$swal(e.response.data.message)}));case 5:case"end":return a.stop()}}),a)})))()},eliminarSuscripcion:function(e){var t=this;this.$swal({title:"Desea expulsarlo de esta sala?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(a){a.isConfirmed&&t.eliminarSuscripcions(e)}))},limpiarSalas:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new FormData,n.append("id_conversacion",e),a.next=4,t.axios.post("api/Chat/clear",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$swal("Eliminado con exito!","","success"),t.mensajes=[],t.listarSalas())})).catch((function(e){t.$swal(e.response.data.message)}));case 4:case"end":return a.stop()}}),a)})))()},limpiarSala:function(){var e=this;this.$swal({title:"Desea borrar los mensajes de esta sala?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(t){t.isConfirmed&&e.limpiarSalas(e.id_sala)}))},resete:function(){var e=this.form;for(var t in e)this.form[t]=""},formSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.submitted=!0,t.$v.$touch(),!t.$v.$invalid){e.next=6;break}return e.abrupt("return");case 6:return a=new FormData,a.append("texto",t.form.message),a.append("id_conversacion",t.id_sala),a.append("uid",t.usuarioDB.id),e.next=12,t.axios.post("api/chat/mensaje",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$swal("Agregado exito!","","success"),t.$root.$emit("bv::hide::modal","modal","#btnShow"))})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 12:t.handleScroll();case 13:t.submitted=!1,t.form={};case 15:case"end":return e.stop()}}),e)})))()},handleScroll:function(){var e=this;this.$refs.current.$el&&setTimeout((function(){e.$refs.current.SimpleBar.getScrollElement().scrollTop=e.$refs.current.SimpleBar.getScrollElement().scrollHeight+1500}),500)},session:function(){if(console.log("holass"),localStorage.getItem("token")){var e=localStorage.getItem("token");this.guardarUsuario(e)}else this.$router.push({name:"Home"})}}),created:function(){var e=this;this.socket.on("chat",(function(){console.log("llego"),e.$notify({group:"foo",title:"Nuevo chat desde el modulo",text:"Hola tienes una nueva notificacion!"})})),this.session(),this.listarSalas(),this.listarInivitaciones(),this.listarContactos()},mounted:function(){var e=document.querySelector("#scrollElement .simplebar-content-wrapper");console.log(e),e.scrollTo({top:200,behavior:"smooth"});var t=document.querySelector("#containerElement .simplebar-content-wrapper");t.scrollTo({top:500,behavior:"smooth"})}},g=b,y=a("2877"),_=Object(y["a"])(g,n,r,!1,null,null,null);t["default"]=_.exports},e652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,a){return!!(0,n.ref)(e,this,a)||(0,n.req)(t)}))};t.default=r},eb66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=r},ec11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("78ef"),r=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(a){return!(0,n.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a}))};t.default=r}}]);
//# sourceMappingURL=chunk-eaf6f154.1c699258.js.map