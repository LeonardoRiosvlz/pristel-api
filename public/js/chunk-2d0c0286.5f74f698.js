(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0286"],{"411d":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{attrs:{title:e.title,items:e.items}}),r("b-card",{staticClass:"rounded",staticStyle:{"max-width":"20rem"},attrs:{"no-body":"","img-src":e.usuarioDB.imagen,"img-alt":"Image","img-top":""},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"mb-0"},[e._v(e._s(e.usuarioDB.rol))])]},proxy:!0}])},[r("b-card-body",[r("b-card-sub-title",{staticClass:"mb-2"},[e._v(e._s(e.usuarioDB.nombre)+" "+e._s(e.usuarioDB.apellido))])],1),r("b-list-group",{attrs:{flush:""}},[r("b-list-group-item",{on:{click:function(t){return e.editar()}}},[e._v("Editar Perfil")]),r("b-list-group-item",{on:{click:function(t){return e.setPass()}}},[e._v("Editar Pass")])],1),r("b-card-footer",[e._v("This is a footer")])],1),r("b-modal",{attrs:{id:"modal",false:"",size:"lg",title:"Gestión de usuarios","hide-footer":""}},[r("ValidationObserver",{ref:"form"},[r("b-row",[r("b-col",[r("div",{attrs:{id:"preview"}},[e.url?r("img",{staticClass:"rounded",staticStyle:{float:"center!importan"},attrs:{width:"20%",src:e.url}}):e._e()]),r("b-form-file",{staticClass:"mt-3",attrs:{plain:""},on:{change:e.onFileChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Nombre "+e._s(e.editMode))]),r("ValidationProvider",{attrs:{name:"nombre",rules:"required|alpha_spaces"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nombre,expression:"form.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.nombre},on:{input:function(t){t.target.composing||e.$set(e.form,"nombre",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)]),r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Apellido")]),r("ValidationProvider",{attrs:{name:"apellido",rules:"required|alpha_spaces"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.apellido,expression:"form.apellido"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.apellido},on:{input:function(t){t.target.composing||e.$set(e.form,"apellido",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Telefono")]),r("ValidationProvider",{attrs:{name:"telefono",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.telefono,expression:"form.telefono"}],staticClass:"form-control",attrs:{type:"text",placeholder:" "},domProps:{value:e.form.telefono},on:{input:function(t){t.target.composing||e.$set(e.form,"telefono",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Sexo")]),r("ValidationProvider",{attrs:{name:"sexo",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.sexo,expression:"form.sexo"}],staticClass:"form-control form-control-lg",attrs:{name:"tipo"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"sexo",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Masculino"}},[e._v("Masculino")]),r("option",{attrs:{value:"Femenino"}},[e._v("Femenino")])]),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1)],1),r("button",{staticClass:"btn btn-block btn-success",on:{click:function(t){return e.switchLoc()}}},[e._v("Editar Perfil")])],1),r("b-modal",{attrs:{id:"modalPass",false:"",size:"md",title:"Gestión de contraseña","hide-footer":""}},[r("ValidationObserver",{ref:"formPass"},[r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Contraseña")]),r("ValidationProvider",{attrs:{name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:" "},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1),r("b-row",[r("b-col",[r("div",{staticClass:"form-group"},[r("label",[e._v("Confirmar contraseña")]),r("ValidationProvider",{attrs:{name:"repass",rules:"required|confirmed:password"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.repass,expression:"form.repass"}],staticClass:"form-control",attrs:{type:"password",placeholder:" "},domProps:{value:e.form.repass},on:{input:function(t){t.target.composing||e.$set(e.form,"repass",t.target.value)}}}),r("span",{staticStyle:{color:"red"}},[e._v(e._s(o[0]))])]}}])})],1)])],1)],1),r("button",{staticClass:"btn btn-block btn-success",on:{click:function(t){return e.switchLocPass()}}},[e._v("Editar Contraseña")])],1)],1)},a=[],s=r("1da1"),i=r("5530"),n=(r("2b3d"),r("d3b7"),r("3ca3"),r("ddb0"),r("96cf"),r("2f62")),l=r("7bb1"),c=r("5658"),u=r("2579"),d={components:{Layout:c["a"],PageHeader:u["a"],ValidationProvider:l["b"],ValidationObserver:l["a"]},data:function(){return{title:"Administracion",items:[{text:"Perfil"}],dropzoneOptions:{thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}},ver:!1,url:"",url_firma:"",modal:!0,file:null,firma:null,email:"",password:"",totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"age",sortDesc:!1,fields:["nombre_tercero","descripcion_tercero","actions"],terceros:[],editMode:!1,form:{id:"",nombre:"",username:"",apellido:"",email:"",telefono:"",tipo:"",sexo:"",entidad:"",cargo:"",codigo:"",foto:"",password:"",repass:"",roles:""}}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(n["b"])(["guardarUsuario"])),Object(n["b"])(["cerrarSession"])),{},{salir:function(){localStorage.removeItem("token"),this.$router.push({name:"Home"}),this.cerrarSession()},session:function(){if(localStorage.getItem("token")){var e=localStorage.getItem("token");this.guardarUsuario(e)}else this.$router.push({name:"Home"})},listarUsers:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.get("user/pefil").then((function(t){e.user=t.data})).catch((function(e){console.log("error"+e)}));case 2:case"end":return t.stop()}}),t)})))()},editar:function(){this.form.nombre=this.user.nombre,this.form.apellido=this.user.apellido,this.form.email=this.user.email,this.form.telefono=this.user.telefono,this.form.tipo=this.user.tipo,this.form.sexo=this.user.sexo,this.form.entidad=this.user.entidad,this.form.cargo=this.user.cargo,this.form.codigo=this.user.codigo,this.form.imagen=this.user.imagen,this.$root.$emit("bv::show::modal","modal","#btnShow")},setPass:function(){this.$root.$emit("bv::show::modal","modalPass","#btnShow")},login:function(){},switchLoc:function(){var e=this;this.$refs.form.validate().then((function(t){t&&e.editarUsuario()}))},switchLocPass:function(){var e=this;this.$refs.formPass.validate().then((function(t){t?e.editarPassword():e.$swal("Contraseñas no coinciden!","warning")}))},editarUsuario:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a in r=new FormData,e.file&&r.append("filename",e.file),o=e.form,o)r.append(a,o[a]);return t.next=6,e.axios.put("user/pefil",r).then((function(t){if(200==t.status)for(var r in e.$swal("Usuario Editardo","","success"),e.guardarUsuario(t.data.accessToken),e.$root.$emit("bv::hide::modal","modal","#btnShow"),o)e.form[r]=""})).catch((function(t){console.log(t.response.data.menssage),e.$swal("No se pudo editar","","warning")}));case 6:case"end":return t.stop()}}),t)})))()},editarPassword:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a in r=new FormData,o=e.form,o)r.append(a,o[a]);return t.next=5,e.axios.put("auth/recover-password",r).then((function(t){if(200==t.status)for(var r in e.$swal("Contraseña Editada","","success"),e.$root.$emit("bv::hide::modal","modalPass","#btnShow"),o)e.form[r]=""})).catch((function(t){console.log(t.response.data.menssage),e.$swal("No se pudo editar","","warning")}));case 5:case"end":return t.stop()}}),t)})))()},onFileChange:function(e){var t=e.target.files[0];this.url=URL.createObjectURL(t)},toggleModal:function(){this.modal=!this.modal}}),created:function(){this.session(),this.listarUsers()},computed:Object(i["a"])(Object(i["a"])({},Object(n["d"])(["usuarioDB"])),{},{rows:function(){return this.terceros.length}})},m=d,f=r("2877"),p=Object(f["a"])(m,o,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0c0286.5f74f698.js.map