(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7373ef89"],{"3f34":function(t,e,a){"use strict";a.r(e);var o,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("div",{staticClass:"form-group"},[a("label",{staticStyle:{"font-size":"14"},attrs:{for:"exampleFormControlSelect1"}},[t._v("Técnicos pendientes por ajuste "+t._s(t.tecnicos.length))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.tecnico_id,expression:"tecnico_id"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.tecnico_id=e.target.multiple?a:a[0]},function(e){return t.listarPendientes()}]}},t._l(t.tecnicos,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.nombre)+" "+t._s(e.apellido)+" "+t._s(e.cdaaths.length)+" ajustes pendientes")])})),0)])]),t.cuentas.length>0?a("div",{staticClass:"col-3 py-4",staticStyle:{"margin-top":"5px"}},[a("div",{},[a("b-button",{staticClass:"float-left btn-success",attrs:{left:""},on:{click:function(e){t.$bvModal.show("modal"),t.editMode=!1,t.ver=!1}}},[t._v("Listar ")])],1)]):a("div",{staticClass:"col-3 py-4",staticStyle:{"margin-top":"5px"}},[a("div",{},[a("b-button",{staticClass:"float-left btn-success",attrs:{left:""},on:{click:function(e){return t.listarPendientes()}}},[t._v("Buscar")])],1)]),a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"}),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show "),a("b-form-select",{attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),t._v(" entries ")],1)])]),a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Search: "),a("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)])])]),a("div",{staticClass:"table-responsive mb-0"},[a("b-table",{attrs:{items:t.formatos,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(status)",fn:function(e){return["Pendiente"===e.item.status?a("b-badge",{attrs:{variant:"warning"}},[t._v(t._s(e.item.status))]):t._e(),"Archivado"===e.item.status?a("b-badge",{attrs:{variant:"info"}},[t._v(t._s(e.item.status))]):t._e()]}},{key:"cell(tecnico)",fn:function(e){return[a("b",[t._v(" "+t._s(e.item.Tecnico_atha.nombre)+" "+t._s(e.item.Tecnico_atha.apellido))])]}},{key:"cell(creado)",fn:function(e){return[a("b",[t._v(" "+t._s(t._f("fecha")(e.item.created_at)))])]}},{key:"cell(total)",fn:function(e){return[a("b",[t._v(" "+t._s(t._f("moneda")(parseFloat(e.item.total))))])]}},{key:"cell(actions)",fn:function(e){return[a("b-dropdown",{attrs:{size:"sm"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Action "),a("i",{staticClass:"mdi mdi-chevron-down"})]},proxy:!0}],null,!0)},[a("b-dropdown-item-button",{on:{click:function(a){t.editMode=!1,t.ver=!0,t.setear(e.item.id)}}},[t._v(" Ver ")]),a("b-dropdown-item-button",{on:{click:function(a){t.editMode=!1,t.ver=!0,t.ArchivarCuestion(e.item.id)}}},[t._v(" Archivar")])],1)]}}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])]),a("b-modal",{attrs:{id:"modal",false:"",size:"lg",title:"Formato de ajuste","hide-footer":""}},[t._l(t.form.items,(function(e){return a("b-card",{key:e.id,staticClass:"text-left"},[a("b-card-title",[a("h2",{staticClass:"card-title lead"},[t._v("CONSECUTIVO "),a("span",[t._v("ATH-"+t._s(e.consecutivo))])])]),a("b-card-title",[a("h6",{staticClass:"card-title"},[t._v(t._s(e.tipo_llamada)+"-"+t._s(e.llamada))])]),a("h5",{staticClass:"text-right text-info"},[a("span",[t._v(t._s(t._f("moneda")(e.excedente)))])])],1)})),a("h4",{staticClass:"text-right text-success"},[t._v("Total: "),a("span",[t._v(t._s(t._f("moneda")(t.form.total)))])]),t.ver||t.editMode?t._e():a("button",{staticClass:"btn btn-block float-right btn-success",on:{click:t.switchLoc}},[t._v("Crear Formato")])],2)],1)},r=[],s=a("ade3"),n=a("1da1"),c=a("5530"),l=(a("96cf"),a("a434"),a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),a("c1df")),u=a.n(l),d=a("6480"),m=a("92c3"),f=a.n(m),h=a("2f62"),p=a("7bb1"),v=a("5658"),g=a("2579"),_=(o={components:{vueDropzone:f.a,Layout:v["a"],PageHeader:g["a"],ValidationProvider:p["b"],ValidationObserver:p["a"],VueHtml2pdf:d["a"]},data:function(){return{title:"Administracion",items:[{text:"Gestión corporativa"},{text:"formatos",active:!0}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},tecnico_id:"",ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["status","creado","tecnico","total","actions"],formatos:[],abonados:[],cuentas:[],tecnicos:[],consecutivos:[],json_fields:{Item:"id",Descripcion:"descripcion","Valor unitario":"precio",Medida:"medida",Cantidad:"cantidad",Total:"total"},editMode:!1,form:{id:"",cargo:"",descripcion:"",items:[]}}},filters:{moneda:function(t){var e=new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:1}),a=e.format(t);return a},fecha:function(t){u.a.locale("es");var e=u()(t).format("MMMM DD YYYY");return e}},created:function(){this.listarUsers()},methods:Object(c["a"])(Object(c["a"])({onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},Object(h["b"])(["guardarUsuario"])),{},{switchLoc:function(){var t=this;this.$swal({title:"Desea agregar este formato?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(e){e.isConfirmed&&t.agregarFormato()}))},generateReport:function(){this.$refs.html2Pdf.generatePdf()},cargar:function(t){for(var e=0;e<this.consecutivos.length;e++){this.consecutivos.id===e&&this.form.items.push({id:this.consecutivos.id,valor_analista:this.consecutivos.total_tecnico,valor_ajuste:this.consecutivos.total_tecnico,precio:this.consecutivos.precio,medida:this.consecutivos.medida,cantidad:this.consecutivos.cantidad,total:this.consecutivos.total});array[e]}this.totalSac()},eliminarItem:function(t){this.form.items.splice(t,1),this.totalSac()},agregarFormato:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in a=new FormData,o=t.form,o)"items"==i?a.append(i,JSON.stringify(o[i])):a.append(i,o[i]);return e.next=5,t.axios.post("api/ath/formatodeajuste",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){200==e.status&&(t.$swal("Agregado con exito!","","success"),t.$root.$emit("bv::hide::modal","modal","#btnShow"),t.listarformatos(),t.listarTecnicos())})).catch((function(e){console.log(e.response.data.menssage),t.$swal(e.response.data)}));case 5:case"end":return e.stop()}}),e)})))()},editarformatos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(i in a=new FormData,o=t.form,o)a.append(i,o[i]);return e.next=5,t.axios.put("api/formatos",a).then((function(e){if(200==e.status)for(var a in t.$swal("Editado con exito","","success"),t.listarformatos(),t.listarPendientes(),t.$root.$emit("bv::hide::modal","modal","#btnShow"),o)t.form[a]=""})).catch((function(e){t.$swal("ocurrio un problema","","warning")}));case 5:case"end":return e.stop()}}),e)})))()},archivarFormato:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=new FormData,o.append("id",t),a.next=4,e.axios.post("api/ath/formatodeajuste/archivar",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){200==t.status&&(e.listarFormatos(),e.$swal("Archivado con exito!","","success"))})).catch((function(t){e.$swal("No se pudo realizar esta accion !","","warning")}));case 4:case"end":return a.stop()}}),a)})))()},ArchivarCuestion:function(t){var e=this;this.$swal({title:"Desea archivar este formato?",icon:"question",iconHtml:"",confirmButtonText:"Si",cancelButtonText:"No",showCancelButton:!0,showCloseButton:!0}).then((function(a){a.isConfirmed&&e.archivarFormato(t)}))},resete:function(){var t=this.form;for(var e in t)this.form[e]=""},setear:function(t){for(var e=0;e<this.formatos.length;e++)if(this.formatos[e].id===t)return this.form.id=this.formatos[e].id,this.form.items=JSON.parse(this.formatos[e].items),this.form.items=JSON.parse(this.form.items),this.form.total=this.formatos[e].total,void this.$root.$emit("bv::show::modal","modal","#btnShow")},listarPendientes:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("id",t.tecnico_id),e.next=4,t.axios.post("api/ath/cuentasdeajuste",a).then((function(e){if(t.cuentas=e.data,console.log(t.cuentas),t.cuentas.length>0){t.form.tecnico_id=t.cuentas[0].tecnico_id,t.form.coordinador_id=t.cuentas[0].programacion_ath.coordinador_id,t.form.analista_id=t.cuentas[0].programacion_ath.analista_id,t.form.items=[];for(var a=0;a<t.cuentas.length;a++)t.form.items.push({consecutivo:t.cuentas[a].id_programacion,tipo_llamada:t.cuentas[a].programacion_ath.tipo_llamada,llamada:t.cuentas[a].programacion_ath.llamada,descripcion:t.cuentas[a].programacion_ath.gestion_aths[0].descripcion,excedente:t.cuentas[a].programacion_ath.legalizaciones_aths[0].excedente,transporte:0,fecha:t.cuentas[a].programacion_ath.gestion_aths[0].created_at,reclamo:!1,descripcion_reclamo:""})}t.form.total=0;for(var o=0;o<t.form.items.length;o++)t.form.total=parseFloat(t.form.items[o].excedente)+parseFloat(t.form.total)})).catch((function(t){console.log("error"+t)}));case 4:case"end":return e.stop()}}),e)})))()},listarFormatos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("api/ath/formatodeajustes").then((function(e){t.formatos=e.data.rows})).catch((function(t){console.log("error"+t)}));case 2:case"end":return e.stop()}}),e)})))()},listarTecnicos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("api/ath/cuentasdeajuste/tecnicos").then((function(e){t.tecnicos=e.data})).catch((function(t){console.log("error"+t)}));case 2:case"end":return e.stop()}}),e)})))()},setEmail:function(){this.form.username=this.form.email,console.log("holas")},setRoles:function(){"Administrador"===this.form.tipo?(this.form.codigo="",this.form.entidad="No",this.form.cargo="",this.form.roles="3"):"Coordinador"===this.form.tipo?(this.form.entidad="No",this.form.cargo="",this.form.roles="2"):this.form.roles="1"},onFileChange:function(t){var e=t.target.files[0];this.url=URL.createObjectURL(e)},toggleModal:function(){this.modal=!this.modal},session:function(){if(localStorage.getItem("token")){var t=localStorage.getItem("token");this.guardarUsuario(t)}else this.$router.push({name:"Home"})}})},Object(s["a"])(o,"created",(function(){this.session(),this.listarFormatos(),this.listarTecnicos()})),Object(s["a"])(o,"mounted",(function(){})),Object(s["a"])(o,"computed",Object(c["a"])(Object(c["a"])({},Object(h["d"])(["usuarioDB"])),{},{rows:function(){return this.formatos.length}})),o),b=_,w=a("2877"),x=Object(w["a"])(b,i,r,!1,null,null,null);e["default"]=x.exports},a434:function(t,e,a){"use strict";var o=a("23e7"),i=a("23cb"),r=a("a691"),s=a("50c4"),n=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),d=u("splice"),m=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var a,o,u,d,v,g,_=n(this),b=s(_.length),w=i(t,b),x=arguments.length;if(0===x?a=o=0:1===x?(a=0,o=b-w):(a=x-2,o=f(m(r(e),0),b-w)),b+a-o>h)throw TypeError(p);for(u=c(_,o),d=0;d<o;d++)v=w+d,v in _&&l(u,d,_[v]);if(u.length=o,a<o){for(d=w;d<b-o;d++)v=d+o,g=d+a,v in _?_[g]=_[v]:delete _[g];for(d=b;d>b-o+a;d--)delete _[d-1]}else if(a>o)for(d=b-o;d>w;d--)v=d+o-1,g=d+a-1,v in _?_[g]=_[v]:delete _[g];for(d=0;d<a;d++)_[d+w]=arguments[d+2];return _.length=b-o+a,u}})}}]);
//# sourceMappingURL=chunk-7373ef89.a0bc74c8.js.map