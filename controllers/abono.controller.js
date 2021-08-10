const db = require("../models");
const config = require("../config/config.js");
const { programacion_ath } = require("../models");
const Abonos = db.abonos;
const Notificacion = db.notificacion;
const Programacion_ath = db.programacion_ath;
const Formato = db.formato;
const User = db.user;

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.valor_abono) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const body={};
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.archivo_abono= `${config.server.SERVER+filename}`;
  }
  body.tipo= req.body.tipo;
  body.valor_abono= req.body.valor_abono;
  body.descripcion_abono= req.body.descripcion_abono;
  body.formato_id= req.body.formato_id;
  // Save Book in database
 await Abonos.create(body)
    .then(data => {
      res.send(data);
      const datos = {
        titulo: `Abono realizado (${req.body.tipo})`,
        descripcion: `Se realizó un abono con el valor de $ ${req.body.valor_abono} al  consecutivo ATH-${req.body.formato_id}`,
        origen: "",
        modulo: `/llamada_ath_tablero/${req.body.id_programacion}`,
        icon: "ri-money-dollar-box-line",
        color: "avatar-title bg-success rounded-circle font-size-16",
        uid: req.body.tecnico_id,
        uidr:req.userId,
        canal: "",
      };
      CrearNotificacion(datos);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
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




exports.findFormato = async (req, res) => {
const id =req.body.id;
await  Abonos.findAll({
    limit: 3000000,
    offset: 0,
    where: {formato_id: id}, // conditions
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


exports.findAll = async (req, res) => {
    const id =req.body.id;
    await  Abonos.findAndCountAll({
        limit: 3000000,
        offset: 0,
        where: { }, // conditions
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
exports.findOne = async (req, res) => {
  const id = req.params.id;

 await Abonos.findByPk(id)
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
    const body={};
    if(req.files['filename']){
      const { filename } = req.files['filename'][0]
      body.archivo_abono= `${config.server.SERVER+filename}`;
    }
    body.tipo= req.body.tipo;
    body.valor_abono= req.body.valor_abono;
    body.descripcion_abono= req.body.descripcion_abono;
    body.formato_id= req.body.formato_id;
    const id = req.body.id;

 await Abonos.update(body,{
    where: { id: id }
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
};

// Delete a Book with the specified id in the request
exports.delete = async (req, res) => {

  const id = req.body.id;
 await Abonos.destroy({
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

/////dasboard

exports.findAllDashboardTecnico = async (req, res) => {
  const id =req.body.id;
  await  Abonos.findAndCountAll({
      limit: 10,
      offset: 0,
      where: { }, // conditions
      order: [
        ['id', 'DESC'],
      ],
      include: [{
        model: Formato,
        attributes:['id','tecnico_id'],
        where:{
          tecnico_id:req.userId
        },
        include: [{
          model: Programacion_ath,
          attributes:['id','llamada','tipo_llamada'],
        }]
      }]
    })
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving books."
        });
      });
  }; 

  exports.findAllDashboardAdministrador= async (req, res) => {
    const id =req.body.id;
    await  Abonos.findAndCountAll({
        limit: 15,
        offset: 0,
        where: { }, // conditions
        order: [
          ['id', 'DESC'],
        ],
        include: [{
          model: Formato,
          attributes:['id','tecnico_id'],
          include: [{
            model: Programacion_ath,
            attributes:['id','llamada','tipo_llamada'],
          }]
        }]
      })
        .then(data => {
          console.log(data);
          res.send(data);
        })
        .catch(err => {
          res.send(500).send({
            message: err.message || "Some error accurred while retrieving books."
          });
        });
    }; 


    
exports.findAllDashboardAnalista = async (req, res) => {
  const id =req.body.id;
  await  Abonos.findAndCountAll({
      limit: 10,
      offset: 0,
      where: { }, // conditions
      order: [
        ['id', 'DESC'],
      ],
      include: [{
        model: Formato,
        attributes:['id','tecnico_id'],
        include: [{
          model: Programacion_ath,
          where:{
            analista_id:req.userId
          },
          attributes:['id','llamada','tipo_llamada','analista_id'],
        }]
      }]
    })
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving books."
        });
      });
  }; 