(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-944498ba"],{"0b19":function(t,e,a){"use strict";a.r(e);var o,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),t.cuentas.length>0?a("div",{staticClass:"clearfix mb-3"},[a("b-button",{staticClass:"float-right btn-success",attrs:{left:""},on:{click:function(e){t.$bvModal.show("modal"),t.editMode=!1,t.ver=!1}}},[t._v("Tienes "+t._s(t.cuentas.length)+" cuenta por cobrar")])],1):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"}),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Search: "),a("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{attrs:{items:t.abonados,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(status)",fn:function(e){return["Creado"===e.item.status?a("b-badge",{attrs:{variant:"info"}},[t._v(t._s(e.item.status))]):t._e(),"Pendiente"===e.item.status?a("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(e.item.status))]):t._e(),"Aprobado"===e.item.status?a("b-badge",{attrs:{variant:"success"}},[t._v(t._s(e.item.status))]):t._e(),"Rechazado"===e.item.status?a("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(e.item.status))]):t._e()]}},{key:"cell(id)",fn:function(e){return[a("b",[t._v("FSCATH-"+t._s(parseFloat(e.item.fscath.id)))])]}},{key:"cell(fecha)",fn:function(e){return[t._v(" "+t._s(t._f("fecha")(e.item.created_at))+" ")]}},{key:"cell(archivo)",fn:function(e){return[a("a",{attrs:{href:e.item.archivo_abono,download:"",target:"_blank"}},[t._v("Archivo")])]}},{key:"cell(total)",fn:function(e){return[a("b",[t._v(" "+t._s(t._f("moneda")(parseFloat(e.item.valor_abono))))])]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])]),a("b-modal",{attrs:{id:"modal",false:"",size:"lg",title:"Formato de solicitud de cobro","hide-footer":""}},[t._l(t.form.items,(function(e){return a("b-card",{key:e.id,staticClass:"text-left"},[a("b-card-title",[a("h2",{staticClass:"card-title lead"},[t._v("CONSECUTIVO "),a("span",[t._v("ATH-"+t._s(e.consecutivo))])])]),a("b-card-title",[a("h6",{staticClass:"card-title"},[t._v("CAJERO "+t._s(e.codigo)+" - "+t._s(e.terminal)+" ("+t._s(e.ciudad)+")")])]),a("b-card-title",[a("h6",{staticClass:"card-title"},[t._v(t._s(e.tipo_llamada)+"-"+t._s(e.llamada))])]),a("b-card-text",[t._v("Descripción: "+t._s(e.descripcion))]),a("h5",{staticClass:"text-right text-info"},[a("span",[t._v(t._s(t._f("moneda")(e.total_tecnico)))])]),t.ver?t._e():a("b-form-checkbox",{staticClass:"mb-1",attrs:{switch:""},model:{value:e.reclamo,callback:function(a){t.$set(e,"reclamo",a)},expression:"item.reclamo"}},[a("label",[t._v("Reclamar")])]),e.reclamo?a("b-row",[a("b-col",[a("div",{staticClass:"form-group"},[a("label",[t._v("Motivo de reclamo")]),a("b-form-textarea",{attrs:{id:"motivo_rechazo",placeholder:"",rows:"2","max-rows":"6",disabled:t.ver},model:{value:e.descripcion_reclamo,callback:function(a){t.$set(e,"descripcion_reclamo",a)},expression:"item.descripcion_reclamo"}})],1)])],1):t._e()],1)})),a("h4",{staticClass:"text-right text-success"},[t._v("Total: "),a("span",[t._v(t._s(t._f("moneda")(t.form.total)))])]),t.ver||t.editMode?t._e():a("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Crear Formato")])],2)],1)},s=[],i=a("1da1"),n=a("5530"),c=a("ade3"),l=(a("96cf"),a("a434"),a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("c1df")),d=a.n(l),u=a("92c3"),m=a.n(u),f=a("2f62"),h=a("7bb1"),p=a("5658"),b=a("2579"),g=(o={components:{vueDropzone:m.a,Layout:p["a"],PageHeader:b["a"],ValidationProvider:h["b"],ValidationObserver:h["a"],moment:d.a},data:function(){var t;return t={title:"Tecnico",items:[{text:"Abonos y pagos"}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["id","tipo","total","archivo","fecha"],abonados:[]},Object(c["a"])(t,"abonados",[]),Object(c["a"])(t,"cuentas",[]),Object(c["a"])(t,"consecutivos",[]),Object(c["a"])(t,"editMode",!1),Object(c["a"])(t,"form",{id:"",cargo:"",descripcion:"",items:[]}),t},computed:Object(n["a"])({},Object(f["d"])(["counter"])),filters:{moneda:function(t){var e=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:1}),a=e.format(t);return a},fecha:function(t){d.a.locale("es");var e=d()(t).format("MMMM Do YYYY, h:mm:ss a");return e}},created:function(){this.listarUsers()},methods:Object(n["a"])(Object(n["a"])({onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},Object(f["b"])(["guardarUsuario"])),{},{switchLoc:function(){var t=this;this.$swal({title:"Desea agregar este formato?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(e){e.isConfirmed&&t.agregarFormato()}))},adjuntar:function(){},cargar:function(t){for(var e=0;e<this.consecutivos.length;e++){this.consecutivos.id===e&&this.form.items.push({id:this.consecutivos.id,valor_analista:this.consecutivos.total_tecnico,valor_ajuste:this.consecutivos.total_tecnico,precio:this.consecutivos.precio,medida:this.consecutivos.medida,cantidad:this.consecutivos.cantidad,total:this.consecutivos.total});array[e]}this.totalSac()},eliminarItem:function(t){this.form.items.splice(t,1),this.totalSac()},agregarFormato:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=new FormData,o=t.form,o)"items"==r?a.append(r,JSON.stringify(o[r])):a.append(r,o[r]);return e.next=5,t.axios.post("api/ath/formatodecobro",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(200==e.status)for(var a in t.$swal("Agregado con exito!","","success"),t.listarPendientes(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),o)t.form[a]=""})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 5:case"end":return e.stop()}}),e)})))()},editarabonados:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in a=new FormData,o=t.form,o)a.append(r,o[r]);return e.next=5,t.axios.put("api/abonados",a).then((function(e){if(200==e.status)for(var a in t.$swal("Editado con exito","","success"),t.listarabonados(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),o)t.form[a]=""})).catch((function(e){t.$swal("ocurrio un problema","","warning")}));case 5:case"end":return e.stop()}}),e)})))()},eliminarabonados:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=new FormData,o.append("id",t),a.next=4,e.axios.post("api/abonados/delete",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&(e.$swal("Eliminado con exito!","","success"),e.listarabonados())})).catch((function(t){console.log(t.response.data.menssage),e.$swal(t.response.data)}));case 4:case"end":return a.stop()}}),a)})))()},eliminarCargo:function(t){var e=this;this.$swal({title:"Desea borrar este cargo?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(a){a.isConfirmed&&e.eliminarabonados(t)}))},resete:function(){var t=this.form;for(var e in t)this.form[e]=""},setear:function(t){for(var e=0;e<this.abonados.length;e++)if(this.abonados[e].id===t)return this.form.id=this.abonados[e].id,this.form.items=JSON.parse(this.abonados[e].items),this.form.items=JSON.parse(this.form.items),this.form.total=this.abonados[e].total,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarPendientes:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("/api/ath/cuentasdecobro").then((function(e){if(t.cuentas=e.data,t.cuentas.length>0){t.form.tecnico_id=t.cuentas[0].tecnico_id,t.form.coordinador_id=t.cuentas[0].programacion_ath.coordinador_id,t.form.items=[];for(var a=0;a<t.cuentas.length;a++)t.form.items.push({consecutivo:t.cuentas[a].id_programacion,tipo_llamada:t.cuentas[a].programacion_ath.tipo_llamada,total_tecnico:t.cuentas[a].programacion_ath.total_tecnico,llamada:t.cuentas[a].programacion_ath.llamada,descripcion:t.cuentas[a].programacion_ath.descripcion,codigo:t.cuentas[a].programacion_ath.cajero_ath.codigo,terminal:t.cuentas[a].programacion_ath.cajero_ath.terminal,direccion:t.cuentas[a].programacion_ath.cajero_ath.direccion,ciudad:t.cuentas[a].programacion_ath.cajero_ath.ciudad.ciudad,departamento:t.cuentas[a].programacion_ath.cajero_ath.ciudad.departamento,reclamo:!1,descripcion_reclamo:""})}t.form.total=0;for(var o=0;o<t.form.items.length;o++)t.form.total=parseFloat(t.form.items[o].total_tecnico)+parseFloat(t.form.total)})).catch((function(t){console.log("error"+t)}));case 2:case"end":return e.stop()}}),e)})))()},listarPagos:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("api/ascath/tecnico").then((function(e){t.abonados=e.data})).catch((function(t){console.log("error"+t)}));case 2:case"end":return e.stop()}}),e)})))()},setEmail:function(){this.form.username=this.form.email,console.log("holas")},setRoles:function(){"Administrador"===this.form.tipo?(this.form.codigo="",this.form.entidad="No",this.form.cargo="",this.form.roles="3"):"Coordinador"===this.form.tipo?(this.form.entidad="No",this.form.cargo="",this.form.roles="2"):this.form.roles="1"},onFileChange:function(t){var e=t.target.files[0];this.url=URL.createObjectURL(e)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var t=localStorage.getItem("token");this.guardarUsuario(t)}else this.$router.push({name:"Home"})}})},Object(c["a"])(o,"created",(function(){this.session(),this.listarPagos()})),Object(c["a"])(o,"mounted",(function(){})),Object(c["a"])(o,"computed",{rows:function(){return this.abonados.length}}),o),v=g,_=a("2877"),w=Object(_["a"])(v,r,s,!1,null,null,null);e["default"]=w.exports},a434:function(t,e,a){"use strict";var o=a("23e7"),r=a("23cb"),s=a("a691"),i=a("50c4"),n=a("7b0b"),c=a("65f0"),l=a("8418"),d=a("1dde"),u=d("splice"),m=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var a,o,d,u,b,g,v=n(this),_=i(v.length),w=r(t,_),C=arguments.length;if(0===C?a=o=0:1===C?(a=0,o=_-w):(a=C-2,o=f(m(s(e),0),_-w)),_+a-o>h)throw TypeError(p);for(d=c(v,o),u=0;u<o;u++)b=w+u,b in v&&l(d,u,v[b]);if(d.length=o,a<o){for(u=w;u<_-o;u++)b=u+o,g=u+a,b in v?v[g]=v[b]:delete v[g];for(u=_;u>_-o+a;u--)delete v[u-1]}else if(a>o)for(u=_-o;u>w;u--)b=u+o-1,g=u+a-1,b in v?v[g]=v[b]:delete v[g];for(u=0;u<a;u++)v[u+w]=arguments[u+2];return v.length=_-o+a,d}})}}]);
//# sourceMappingURL=chunk-944498ba.cd054656.js.map