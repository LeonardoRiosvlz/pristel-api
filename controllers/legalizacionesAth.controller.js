const db = require("../models");
const config = require("../config/config");
const Legalizaciones = db.legalizacionAth;
const ProgramacionAth = db.programacion_ath;
const Notificaciones = db.notificacion;
const User = db.user;


// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.excedente) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const body={};

  if (req.files['evidencias']) {
    let  gallery = req.files['evidencias']  
    for (let index = 0; index < gallery.length; index++) {
        gallery[index]=`${config.server.SERVER+gallery[index].filename}`      
    }
    body.evidencias=gallery
  }
  body.observaciones= req.body.observaciones;
  body.excedente= req.body.excedente;
  body.items= req.body.items;
  body.id_programacion= req.body.id_programacion;
  // Save Book in database
 await Legalizaciones.create(body)
    .then(data => {
      res.send(data);
      const datos = {
        titulo: `Legalización realizada `,
        descripcion: `Se realizó una legalización para el consecutivo (ATH-${req.body.id_programacion})`,
        origen: "",
        modulo: `/llamada_ath_tablero/${req.body.id_programacion}`,
        icon: "ri-exchange-dollar-fill",
        color: "avatar-title bg-success rounded-circle font-size-16",
        uid: req.body.analista_id,
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

    ProgramacionAth.update({
      status:"En proceso"
    },{
      where: { id: req.body.id_programacion }
    })
      .then(num => {

      })
      .catch(err => {

      });
  };



async function CrearNotificacion(datos){
  // Save
  await  Notificaciones.create(datos)
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


exports.findAll = (req, res) => {

  Legalizaciones.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    include: [
    {
      model: ProgramacionAth,
      attributes:['id','llamada','tipo_llamada'],
      include: [
        {
          model: User, as: 'Tecnico_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Analista_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }
      ]
    }],
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




exports.findAllAnalistas = (req, res) => {

  Legalizaciones.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    include: [
    {
      model: ProgramacionAth,
      where:{
        analista_id: req.userId
      },
      attributes:['id','llamada','tipo_llamada'],
      include: [
        {
          model: User, as: 'Tecnico_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Analista_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }
      ]
    }],
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




exports.find = async (req, res) => {
const id =req.body.id;
await  Legalizaciones.findAll({
    limit: 3000000,
    offset: 0,
    where: {id_programacion: id}, // conditions
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


// Update a Book by the id in the request
exports.update = async (req, res) => {
    const body={};

    if (req.files['evidencias']) {
      let  gallery = req.files['evidencias']  
      for (let index = 0; index < gallery.length; index++) {
          gallery[index]=`${config.server.SERVER+gallery[index].filename}`      
      }
      body.evidencias=gallery
    }
    body.observaciones= req.body.observaciones;
    body.excedente= req.body.excedente;
    body.items= req.body.items;
    body.id_programacion= req.body.id_programacion;
  const id = req.body.id;

 await Legalizaciones.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });

        const datos = {
          titulo: `Legalización corregida     `,
          descripcion: `Se corrigió una legalización para el consecutivo (ATH-${req.body.id_programacion})`,
          origen: "",
          modulo: `/llamada_ath_tablero/${req.body.id_programacion}`,
          icon: "ri-exchange-dollar-fill",
          color: "avatar-title bg-success rounded-circle font-size-16",
          uid: req.body.analista_id,
          uidr:req.userId,
          canal: "",
        };
        CrearNotificacion(datos);
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
 await Legalizaciones.destroy({
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




// Update a Book by the id in the request
exports.respuesta = async (req, res) => {
  const body={};
  body.status= req.body.status;
  body.observaciones_analista= req.body.observaciones_analista;
  const id = req.body.id;

 await Legalizaciones.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
        if (req.body.status==="Devuelta") {
          const datos = {
            titulo: `Legalización devuelta (ATH-${req.body.id_programacion})`,
            descripcion: `Observaciones: ${req.body.observaciones_analista}`,
            origen: "",
            modulo:`/llamada_ath_tablero/${req.body.id_programacion}`,
            icon: "ri-reply-fill",
            color: "avatar-title bg-danger rounded-circle font-size-16",
            uid: req.body.tecnico_id,
            uidr:req.userId,
            canal: "",
          };
          CrearNotificacion(datos);
        }else{
          const datos = {
            titulo: `Legalización aprobada: (ATH-${req.body.id_programacion})`,
            descripcion: `El analista aprobo su legalización para esta llamada`,
            origen: "",
            modulo: `/llamada_ath_tablero/${req.body.id_programacion}`,
            icon: "ri-check-fill",
            color: "avatar-title bg-success rounded-circle font-size-16",
            uid: req.body.tecnico_id,
            uidr:req.userId,
            canal: "",
          };
          CrearNotificacion(datos);
        }

        
      } else {
        res.send({
          message: `No puede editar el registro con el  el =${id}. Tal vez el cargo no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el cargo con el id=" + id
      });
    });


};




//////dashboard//////



exports.findAllDashboardAdministracion = (req, res) => {

  Legalizaciones.findAndCountAll({
    limit: 20,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    include: [
    {
      model: ProgramacionAth,
      attributes:['id','llamada','tipo_llamada'],
      include: [
        {
          model: User, as: 'Tecnico_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Analista_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }
      ]
    }],
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


exports.findAllDashboardTecnico = (req, res) => {

  Legalizaciones.findAndCountAll({
    limit: 10,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    include: [
    {
      model: ProgramacionAth,
      where:{
        tecnico_id: req.userId
      },
      attributes:['id','llamada','tipo_llamada'],
      include: [
        {
          model: User, as: 'Tecnico_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Analista_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }
      ]
    }],
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



exports.findAllDashboardAnalista = (req, res) => {

  Legalizaciones.findAndCountAll({
    limit: 10,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    include: [
    {
      model: ProgramacionAth,
      where:{
        analista_id: req.userId
      },
      attributes:['id','llamada','tipo_llamada'],
      include: [
        {
          model: User, as: 'Tecnico_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['id','nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Analista_ath',
          attributes:['id','nombre', 'apellido','imagen' ],
        }
      ]
    }],
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
