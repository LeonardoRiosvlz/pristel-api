const db = require("../models");
const Sac = db.sacAth;
const CuentaDeCobro = db.cdcath;
const CuentaDeAjuste = db.cdaath;
const Programación = db.programacion_ath;
const Notificacion = db.notificacion;
const CierreAth = db.cierre_ath;
const User = db.user;

// Create and Save a new Book
exports.create = async (req, res) => { 
  console.log(req.body);
  if (req.body.aplica_sac==="Aplica") {
  // Validate request
  if (!req.body.items) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const book = {
    id_programacion: req.body.id,
    observacion: req.body.motivo_cierre,
    items: req.body.items,
    total: req.body.total,
  };

  // Save Book in database
 await Sac.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    });
    if (req.body.tipo_tecnico==="Contratista") {
      CuentaDeCobro.findOrCreate({where: {id_programacion: req.body.id},
        defaults: {
         id_programacion: req.body.id,
         tecnico_id: req.body.tecnico_id,
        }});
        const datos = {
          titulo: `Programación ATH-${req.body.id} fue cerrada con éxito`,
          descripcion: `El analista determinó el costo de la gestión es de ${req.body.total_tecnico}.`,
          origen: "",
          modulo: `/llamada_ath_tablero/${req.body.id}`,
          icon: "ri-checkbox-circle-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.tecnico_id,
          uidr:req.userId,
          canal: "",
        };
        CrearNotificacion(datos);
    }
    if (req.body.tipo_tecnico==="Nomina"){
      console.log("nomina");
      CuentaDeAjuste.findOrCreate({where: {id_programacion: req.body.id},
        defaults: {
         id_programacion: req.body.id,
         tecnico_id: req.body.tecnico_id,
        }});
        const datos = {
          titulo: `Programación ATH-${req.body.id} fue cerrada con éxito`,
          descripcion: `El analista aprobó su gestión.`,
          origen: "",
          modulo: `/llamada_ath_tablero/${req.body.id}`,
          icon: "ri-checkbox-circle-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.tecnico_id,
          uidr:req.userId,
          canal: "",
        };      
        CrearNotificacion(datos);        
    }

    CierreAth.findOrCreate({where: {programacion_id: req.body.id},
      defaults: {
       id_programacion: req.body.id,
       tecnico_id: req.body.tecnico_id,
       consecutivo:req.body.consecutivo,
       codigo_cajero:req.body.codigo_cajero,
       tipo_llamada:req.body.tipo_llamada,
       llamada:req.body.llamada,
       descripcion:req.body.descripcion,
       actividades_ejecutadas:req.body.actividades_ejecutadas,
       titulo:req.body.titulo,
       terminal:req.body.terminal,
       total_sac:req.body.total_sac,
       sac:req.body.sac,
       antes:req.body.antes,
       despues:req.body.despues,
       entidad_bancaria:req.body.entidad_bancaria,
       fecha_despacho:req.body.fecha_despacho,
       fecha_atencion:req.body.fecha_atencion,
       ciudad_origen:req.body.ciudad_origen,
       ciudad_destino:req.body.ciudad_destino,
       departamento:req.body.departamento,
      }});

      Programación.update({
        status: "Cerrada",
        motivo_cierre: req.body.motivo_cierre,
        fecha_cierre: Date.now(),
        aplica_sac: req.body.aplica_sac,
        total_tecnico: req.body.total_tecnico,
        },{
        where: { id: req.body.id, }
      })
    }else{
      await Programación.update({
        status: "Cerrada",
        motivo_cierre: req.body.motivo_cierre,
        fecha_cierre: Date.now(),
        aplica_sac: req.body.aplica_sac,
        total_tecnico: req.body.total_tecnico,
        },{
        where: { id: req.body.id, }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "editado satisfactoriamente."
            });
            if (req.body.tipo_tecnico==="Contratista") {
              CuentaDeCobro.findOrCreate({where: {id_programacion: req.body.id},
                defaults: {
                 id_programacion: req.body.id,
                 tecnico_id: req.body.tecnico_id,
                }});
                const datos = {
                  titulo: `Programación ATH-${req.body.id} fue cerrada con éxito`,
                  descripcion: `El analista determinó el costo de la gestión es de ${req.body.total_tecnico}.`,
                  origen: "",
                  modulo: `/llamada_ath_tablero/${req.body.id}`,
                  icon: "ri-checkbox-circle-line",
                  color: "avatar-title bg-primary rounded-circle font-size-16",
                  uid: req.body.tecnico_id,
                  uidr:req.userId,
                  canal: "",
                };
                CrearNotificacion(datos);
                CierreAth.findOrCreate({where: {programacion_id: req.body.id},
                  defaults: {
                   id_programacion: req.body.id,
                   tecnico_id: req.body.tecnico_id,
                   consecutivo:req.body.consecutivo,
                   codigo_cajero:req.body.codigo_cajero,
                   tipo_llamada:req.body.tipo_llamada,
                   llamada:req.body.llamada,
                   descripcion:req.body.descripcion,
                   actividades_ejecutadas:req.body.actividades_ejecutadas,
                   titulo:req.body.titulo,
                   terminal:req.body.terminal,
                   total_sac:req.body.total_sac,
                   sac:req.body.sac,
                   antes:req.body.antes,
                   despues:req.body.despues,
                   entidad_bancaria:req.body.entidad_bancaria,
                   fecha_despacho:req.body.fecha_despacho,
                   fecha_atencion:req.body.fecha_atencion,
                   ciudad_origen:req.body.ciudad_origen,
                   ciudad_destino:req.body.ciudad_destino,
                   departamento:req.body.departamento,
                  }});
            }
            if (req.body.tipo_tecnico==="Nomina"){
              console.log("nomina");
              CuentaDeAjuste.findOrCreate({where: {id_programacion: req.body.id},
                defaults: {
                 id_programacion: req.body.id,
                 tecnico_id: req.body.tecnico_id,
                }});
                const datos = {
                  titulo: `Programación ATH-${req.body.id} fue cerrada con éxito`,
                  descripcion: `El analista aprobó su gestión.`,
                  origen: "",
                  modulo: `/llamada_ath_tablero/${req.body.id}`,
                  icon: "ri-checkbox-circle-line",
                  color: "avatar-title bg-primary rounded-circle font-size-16",
                  uid: req.body.tecnico_id,
                  uidr:req.userId,
                  canal: "",
                };      
                CrearNotificacion(datos);        
            }
          } else {
            res.send({
              message: `No puede editar el coargo con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error al intentar editar el cargo con el id=" + id
          });
        });
    }
};


exports.findAll = (req, res) => {

  Sac.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
};

// Find a single with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cargo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `erro al editar el cargo= ${id}`
      });
    });
};

// Update a Book by the id in the request
exports.update = async (req, res) => {
  if (req.body.aplica_sac==="Aplica") {

 await   Sac.update({
      id_programacion: req.body.id,
      observacion: req.body.motivo_cierre,
      items: req.body.items,
      total: req.body.total,
      },{
      where: { id_programacion: req.body.id}
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "editado satisfactoriamente."
          });
        } else {
          res.send({
            message: `No puede editar el coargo con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al intentar editar el cargo con el id=" + id
        });
      });
      Programación.update({
        status: "Cerrada",
        motivo_cierre: req.body.motivo_cierre,
        aplica_sac: req.body.aplica_sac,
        total_tecnico: req.body.total_tecnico,
        },{
        where: { id: req.body.id, }
      })
   }else{
    const id = req.body.id;
  await  Sac.destroy({
      where: { id_programacion: req.body.id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cargo borrado satisfactoriamente!"
          });
        } else {
          res.send({
            message: `No se pudo borrar el cargo con el id=${id}. Tal vez el cargo no existe!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo borrar el cargo con el id=" + id
        });
      });
      Programación.update({
        status: "Cerrada",
        motivo_cierre: req.body.motivo_cierre,
        aplica_sac: req.body.aplica_sac,
        total_tecnico: req.body.total_tecnico,
        },{
        where: { id: req.body.id, }
      })
  }

};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  console.log(req)
  const id = req.body.id;
  Cargo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cargo borrado satisfactoriamente!"
        });
      } else {
        res.send({
          message: `No se pudo borrar el cargo con el id=${id}. Tal vez el cargo no existe!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el cargo con el id=" + id
      });
    });
};


async function CrearNotificacion(datos){
  // Save
  await  Notificacion.create(datos)
  .then( data => {
    notificar(data);
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Book."
    });
    return;
  });
}

async function notificar(data){
await  User.findByPk(data.uid)
.then(datas => {
 console.log(datas);
 global.io.to(datas.canal).emit('cliente', data);
})
.catch(err => {
 res.status(500).send({
   message: `erro al editar el cargo= ${id}`
 });
});

}

