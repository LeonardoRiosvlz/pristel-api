(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be348"],{"2eed":function(e,t,i){"use strict";i.r(t);var a,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",[i("PageHeader",{attrs:{title:e.title,items:e.items}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"}),i("div",{staticClass:"row mt-4"},[i("div",{staticClass:"col-sm-12 col-md-6"},[i("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[i("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Show "),i("b-form-select",{attrs:{size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}}),e._v(" entries ")],1)])]),i("div",{staticClass:"col-sm-12 col-md-6"},[i("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[i("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Search: "),i("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)])])]),i("div",{staticClass:"table-responsive mb-0"},[i("b-table",{attrs:{items:e.legalizaciones,fields:e.fields,responsive:"sm","per-page":e.perPage,"current-page":e.currentPage,"sort-by":e.sortBy,"sort-desc":e.sortDesc,filter:e.filter,"filter-included-fields":e.filterOn},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(consecutivo)",fn:function(t){return[e._v(" ATH-"+e._s(t.item.programacion_ath.id)+" ")]}},{key:"cell(excendete)",fn:function(t){return[e._v(" "+e._s(e._f("moneda")(t.item.excedente))+" ")]}},{key:"cell(status)",fn:function(t){return["Pendiente"===t.item.status?i("span",{staticClass:"badge badge-warning"},[e._v("Pendiente")]):e._e(),"Aceptada"===t.item.status?i("span",{staticClass:"badge badge-success"},[e._v("Aceptada")]):e._e(),"Devuelta"===t.item.status?i("span",{staticClass:"badge badge-danger"},[e._v("Devuelta")]):e._e()]}},{key:"cell(actions)",fn:function(t){return[i("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-success btn-sm rounded-pill mr-1",attrs:{title:"Ver ",type:"button"},on:{click:function(i){e.editMode=!1,e.ver=!0,e.setear(t.item.id)}}},[i("i",{staticClass:"ri-eye-line"})])]}}])})],1),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[i("ul",{staticClass:"pagination pagination-rounded mb-0"},[i("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])])])])]),i("b-modal",{attrs:{id:"modal_aprobar",false:"",size:"lg",title:"Respuesta a gestión","hide-footer":""}},[i("ValidationObserver",{ref:"form"},[i("b-row",[i("b-col",[i("div",{staticClass:"form-group"},[i("label",[e._v("Observaciones")]),i("ValidationProvider",{attrs:{name:"observaciones analista",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[i("b-form-textarea",{attrs:{id:"descripcion",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.form.observaciones_analista,callback:function(t){e.$set(e.form,"observaciones_analista",t)},expression:"form.observaciones_analista"}}),i("span",{staticStyle:{color:"red"}},[e._v(e._s(a[0]))])]}}])})],1)])],1)],1),e.form.observaciones_analista?i("button",{staticClass:"btn btn-block float-right btn-danger",on:{click:function(t){return e.devolverGestionCuestion()}}},[e._v("Enviar")]):e._e()],1),i("b-modal",{attrs:{id:"modal",false:"",size:"lg",title:"Gestión de Legalizaciones","hide-footer":""}},[i("div",{staticClass:"row"},[i("h5",[e._v("Abono: ("+e._s(e.form.tipo)+" "+e._s(e._f("moneda")(e.form.excedente))+")")]),i("img",{staticStyle:{margin:"10px"},attrs:{src:e.form.abono,alt:"",width:"94%"}}),i("table",{staticClass:"table table-striped",attrs:{id:"example2"}},[i("thead",[i("tr",[i("th",[e._v("Codigo")]),i("th",[e._v("Nombre")]),i("th",[e._v("Descripción")]),i("th",[e._v("Precio")]),i("th",[e._v("Precio en factura")]),e.ver?e._e():i("th")])]),i("tbody",[e._l(e.form.items,(function(t){return i("tr",{key:t.id},[i("td",[e._v(e._s(t.codigo))]),i("td",[e._v(e._s(t.nombre))]),i("td",[e._v(e._s(t.descripcion)+" ")]),i("td",[e._v(e._s(e._f("moneda")(t.precio))+" ")]),i("td",[e._v(e._s(e._f("moneda")(t.precio_factura))+" ")])])})),i("tr")],2)]),i("h5",[e._v("Facturas")]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"popup-gallery"},e._l(e.form.evidencias,(function(t,a){return i("a",{key:a,staticClass:"float-left",on:{click:function(){return e.showImg(a)}}},[i("div",{staticClass:"img-fluid"},[i("img",{staticStyle:{margin:"10px"},attrs:{src:""+t,alt:"",width:"200"}})])])})),0),i("vue-easy-lightbox",{attrs:{visible:e.visible,index:e.index,imgs:e.form.evidencias},on:{hide:function(t){e.visible=!1}}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("button",{staticClass:"btn btn-success btn-block",on:{click:function(t){return e.devolver("Aceptada")}}},[i("i",{staticClass:"ri-check-line align-middle mr-2"}),e._v(" Aprobar")])]),i("div",{staticClass:"col-6"},[i("button",{staticClass:"btn btn-danger btn-block",on:{click:function(t){return e.devolver("Devuelta")}}},[i("i",{staticClass:"ri-error-warning-line align-middle mr-2"}),e._v(" Devolver")])])])])],1)},o=[],n=i("1da1"),r=i("5530"),c=i("ade3"),l=(i("2b3d"),i("d3b7"),i("3ca3"),i("ddb0"),i("96cf"),i("825ae")),d=i("92c3"),u=i.n(d),m=i("2f62"),f=i("7bb1"),h=i("5658"),g=i("2579"),v=(a={components:{vueDropzone:u.a,Layout:h["a"],PageHeader:g["a"],ValidationProvider:f["b"],ValidationObserver:f["a"],VueEasyLightbox:l["a"]},data:function(){var e;return e={title:"Procesos",items:[{text:"Legalizaciones",active:!0}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},imgs:"",visible:!1,index:0,ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["consecutivo","excedente","status","actions"],legalizaciones:[],editMode:!1},Object(c["a"])(e,"items",[]),Object(c["a"])(e,"form",{id:"",observaciones:"",tipo:"",abono:"",items:[],evidencias:[]}),e},computed:Object(r["a"])({},Object(m["d"])(["counter"])),created:function(){this.listarUsers()},filters:{moneda:function(e){var t=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0}),i=t.format(e);return i}},methods:Object(r["a"])(Object(r["a"])({showSingle:function(){this.imgs=i("88e3"),this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1},showImg:function(e){this.index=e,this.visible=!0},devolver:function(e){"Devuelta"===e?(this.form.status="Devuelta",this.$root.$emit("bv::show::modal","modal_aprobar","#btnShow")):(this.form.status="Aceptada",this.devolverGestionCuestion())},devolverGestionCuestion:function(){var e=this;this.$swal({title:"Desea notificar al técnico sobre el estado de legalizacion?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(t){t.isConfirmed&&e.responderGestion()}))},responderGestion:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(s in i=new FormData,a=e.form,a)"items"==s?i.append(s,JSON.stringify(a[s])):i.append(s,a[s]);return t.next=5,e.axios.post("/api/legalizaciones/ath/respuesta",i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&(e.$swal("respondido con exito!","","success"),e.listarLegalizaciones(),e.$root.$emit("bv::hide::modal","modal_aprobar","#btnShow"),e.$root.$emit("bv::hide::modal","modal","#btnShow"))})).catch((function(t){e.$swal(t.response.data)}));case 5:case"end":return t.stop()}}),t)})))()},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}},Object(m["b"])(["guardarUsuario"])),{},{switchLoc:function(){var e=this;this.editMode?this.$refs.form.validate().then((function(t){t&&e.editarLegalizaciones()})):this.$refs.form.validate().then((function(t){t&&e.agregarCargo()}))},agregarCargo:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(s in i=new FormData,a=e.form,a)i.append(s,a[s]);return t.next=5,e.axios.post("api/Legalizaciones",i,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(200==t.status)for(var i in e.$swal("Agregado exito!","","success"),e.listarLegalizaciones(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),a)e.form[i]=""})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 5:case"end":return t.stop()}}),t)})))()},editarLegalizaciones:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(s in i=new FormData,a=e.form,a)i.append(s,a[s]);return t.next=5,e.axios.put("api/Legalizaciones",i).then((function(t){if(200==t.status)for(var i in e.$swal("Editado con exito","","success"),e.listarLegalizaciones(),e.$root.$emit("bv::hide::modal","modal","#btnShow"),a)e.form[i]=""})).catch((function(t){e.$swal("ocurrio un problema","","warning")}));case 5:case"end":return t.stop()}}),t)})))()},eliminarLegalizaciones:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=new FormData,a.append("id",e),i.next=4,t.axios.post("api/Legalizaciones/delete",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$swal("Eliminado con exito!","","success"),t.listarLegalizaciones())})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 4:case"end":return i.stop()}}),i)})))()},eliminarCargo:function(e){var t=this;this.$swal({title:"Desea borrar este cargo?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(i){i.isConfirmed&&t.eliminarLegalizaciones(e)}))},resete:function(){var e=this.form;for(var t in e)this.form[t]=""},setear:function(e){for(var t=0;t<this.legalizaciones.length;t++)if(this.legalizaciones[t].id===e)return this.form.id=this.legalizaciones[t].id,this.form.tecnico_id=this.legalizaciones[t].programacion_ath.Tecnico_ath.id,this.items=JSON.parse(this.legalizaciones[t].items),this.form.items=this.items,this.form.evidencias=this.legalizaciones[t].evidencias,this.form.excedente=this.legalizaciones[t].excedente,this.form.tipo=this.legalizaciones[t].tipo,this.form.abono=this.legalizaciones[t].abono,this.form.observaciones=this.legalizaciones[t].observaciones,this.form.id_programacion=this.legalizaciones[t].programacion_ath.id,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarLegalizaciones:function(){var e=this;this.axios.get("api/Legalizaciones/Ath").then((function(t){e.legalizaciones=t.data.rows,console.log(t.data)})).catch((function(e){console.log("error"+e)}))},setEmail:function(){this.form.username=this.form.email,console.log("holas")},setRoles:function(){"Administrador"===this.form.tipo?(this.form.codigo="",this.form.entidad="No",this.form.cargo="",this.form.roles="3"):"Coordinador"===this.form.tipo?(this.form.entidad="No",this.form.cargo="",this.form.roles="2"):this.form.roles="1"},onFileChange:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");this.guardarUsuario(e)}else this.$router.push({name:"Home"})}})},Object(c["a"])(a,"created",(function(){this.session(),this.listarLegalizaciones()})),Object(c["a"])(a,"mounted",(function(){})),Object(c["a"])(a,"computed",{rows:function(){return this.legalizaciones.length}}),a),p=v,b=i("2877"),w=Object(b["a"])(p,s,o,!1,null,null,null);t["default"]=w.exports}}]);
//# sourceMappingURL=chunk-2d0be348.a0bdc619.js.map