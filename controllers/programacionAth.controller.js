const db = require("../models");
const Excel = require('exceljs');
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const { permisosAdmin } = require("../models");

const Sequelize = db.sequelize;
const Op = db.Op;
const ProgramacionAth = db.programacion_ath;
const Cajero = db.cajero_ath;
const Entidad = db.entidad;
const User = db.user;
const Ciudad = db.ciudad;
const Gestion = db.gestionAth;
const Sac = db.sacAth;
const Notificacion = db.notificacion;
const Legalizaciones = db.legalizacionAth; 
const Regional = db.regional; 
const PermisoAdmin = db.permisosAdmin;
const PermisoCoordinador = db.permisoCoordinador;

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.id_cajero) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const program = {
    fecha_vencimiento: req.body.fecha_vencimiento,
    prioridad: req.body.prioridad,
    categoria: req.body.categoria,
    subcategoria: req.body.subcategoria,
    tipo_llamada: req.body.tipo_llamada,
    llamada: req.body.llamada,
    margen: req.body.margen,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    codigo_cajero: req.body.codigo_cajero,
    tipo_servicio: req.body.tipo_servicio,
    requiere_cita: req.body.requiere_cita,
    subcateogoria: req.body.subcateogoria,
    id_cajero: req.body.id_cajero,
    
  };
    if (req.body.analista_id===''|| !req.body.analista_id) {
      program.analista_id=req.userId;
    }else{
      program.analista_id=req.body.analista_id;
    }
  // Save Book in database
 await ProgramacionAth.create(program)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    });
};


// Create and Save a new Book
exports.createByAnalista = async (req, res) => {
  // Validate request
  if (!req.body.id_cajero) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const program = {
    fecha_vencimiento: req.body.fecha_vencimiento,
    prioridad: req.body.prioridad,
    categoria: req.body.categoria,
    subcategoria: req.body.subcategoria,
    tipo_llamada: req.body.tipo_llamada,
    llamada: req.body.llamada,
    margen: req.body.margen,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    codigo_cajero: req.body.codigo_cajero,
    tipo_servicio: req.body.tipo_servicio,
    requiere_cita: req.body.requiere_cita,
    subcateogoria: req.body.subcateogoria,
    id_cajero: req.body.id_cajero,

    analista_id:req.userId,
  };

  // Save Book in database
 await ProgramacionAth.create(program)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    });
};



exports.findAll = async (req, res) => {

await ProgramacionAth.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {
      status:{
        [Op.or]: ["Creada","Programada","Reprogramada","Reprogramada","Devuelta","Aceptada","Rechazada","En proceso"]
      }
    }, // conditions
    order: [
      ['fecha_vencimiento', 'ASC'],
    ],
    include: [{
      model: User, as: 'Tecnico_ath',
      attributes:['nombre', 'apellido','imagen' ],
    }, 
    {
      model: User, as: 'Coordinador',
      attributes:['nombre', 'apellido','imagen' ],
    }, 
    {
      model: Legalizaciones,
    },
    {
      model: Sac,
    },
    {
      model: Gestion
    },
    {
      model: Cajero,
      include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
      { model: Entidad,attributes:[ 'imagen','id'] },
      { model: Regional,attributes:[ 'nombre'] },
      
      ]
    }],
  }) 
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
      });
    });
};







exports.findAllAnalista = async (req, res) => {

  await ProgramacionAth.findAndCountAll({
      limit: 3000000,
      offset: 0,
      where: {
        analista_id:req.userId,
        status:{
          [Op.or]: ["Creada","Programada","Reprogramada","Reprogramada","Devuelta","Aceptada","Rechazada","Cumplida","En proceso"]
        }
      }, // conditions
      order: [
        ['fecha_vencimiento', 'ASC'],
      ],
      include: [{
        model: User, as: 'Tecnico_ath',
        attributes:['nombre', 'apellido','imagen' ],
      }, 
      {
        model: User, as: 'Coordinador',
        attributes:['nombre', 'apellido','imagen' ],
      }, 
      {
        model: Legalizaciones,
      },
      {
        model: Sac,
      },
      {
        model: Gestion,
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
      },
      {
        model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional
          },     
        ]
      }],
    }) 
      .then(data => {
        res.send(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
        res.send(500).send({
          message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
        });
      });
  };




exports.find = async (req, res) => {
  const id= req.body.id;
  await  ProgramacionAth.findAll({
      limit: 3000000,
      offset: 0,
      where: {id:id}, // conditions
      order: [
        ['id', 'DESC'],
      ],
      include: [{
        model: User, as: 'Tecnico_ath',
        attributes:['nombre', 'apellido','imagen','codigo','direccion','telefono','email','tipo_tecnico'  ],
      }, 
      {
        model: User, as: 'Coordinador',
        attributes:['nombre', 'apellido','imagen' ],
      }, 
      {
        model: Legalizaciones,
      },
      {
        model: Gestion,
      },
      {
        model: Sac,
      },
      {
        model: Cajero,
        attributes:[ 'codigo','regional_id','direccion','comparte_site','numero_site','entidad_bancaria','terminal','tipo','tipologia'],
        include: [
          { model: Ciudad,attributes:[ 'ciudad','departamento','regional_id'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] },
        ]
      }],
    }) 
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
        });
      });
  };
  

  exports.findPendientes = async (req, res) => {
    await  ProgramacionAth.findAll({
        limit: 3000000,
        offset: 0,
        where: {
            tecnico_id:req.userId,
            estado_pago:"Pendiente"
            }, // conditions
        order: [
          ['id', 'DESC'],
        ],
        attributes:[ 'id','total_tecnico','estado_pago'],
        include: [],
      }) 
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.send(500).send({
            message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
          });
        });
    };


    exports.findTecnico = async (req, res) => {
      await  ProgramacionAth.findAll({
          limit: 3000000,
          offset: 0,
          where: {
              tecnico_id:req.userId,
              [Op.or]: [
                        { status: "Programada" },
                        { status: "Reprogramada" },
                        { status: "Devuelta" },
                        { status: "Aceptada" },
                        { status: "Legalizada" },
                        { status: "Cumplida" },
                        { status: "En proceso" },
                      ],  
              }, // conditions
          order: [
            ['id', 'DESC'],
          ],
          include: [{
            model: User, as: 'Tecnico_ath',
            attributes:['nombre', 'apellido','imagen' ],
          }, 
          {
            model: User, as: 'Coordinador',
            attributes:['nombre', 'apellido','imagen' ],
          }, 
          {
            model: Legalizaciones,
          },
          {
            model: Gestion,
          },
          {
            model: Cajero,
            include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
            { model: Entidad,attributes:[ 'imagen','id'] },
            { model: Regional,attributes:[ 'nombre'] }
            ]
          }],
        }) 
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.send(500).send({
              message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
            });
          });
      };


// Find a single with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  ProgramcionAth.findByPk(id)
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
exports.update = (req, res) => {

  const id = req.body.id;
  const program = {
    fecha_vencimiento: req.body.fecha_vencimiento,
    prioridad: req.body.prioridad,
    categoria: req.body.categoria,
    subcategoria: req.body.subcategoria,
    tipo_llamada: req.body.tipo_llamada,
    llamada: req.body.llamada,
    titulo: req.body.titulo,
    margen: req.body.margen,
    descripcion: req.body.descripcion,
    codigo_cajero: req.body.codigo_cajero,
    tipo_servicio: req.body.tipo_servicio,
    requiere_cita: req.body.requiere_cita,
    subcateogoria: req.body.subcateogoria,
    id_cajero: req.body.id_cajero,
  };
  ProgramacionAth.update(program,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
      } else {
        res.send({
          message: `No puede editar la programacion con el  el =${id}. Tal vez no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar la programacion con el id=" + id
      });
    });
};


exports.programar = async (req, res) => {
  const id = req.body.id;
  const program = {
    vencimiento_tecnico: req.body.vencimiento_tecnico,
    tecnico_id: req.body.tecnico_id,
    codigo_tecnico: req.body.codigo_tecnico,
    status: req.body.status,
  };
 await ProgramacionAth.update(program,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
            // Create 

            const datos = {
              titulo: `Programación ATH-${req.body.id} (${req.body.status})`,
              descripcion: `Llamada ${req.body.status}.`,
              origen: "",
              modulo: `/llamada_ath_tablero/${req.body.id}`,
              icon: "ri-calendar-line",
              color: "avatar-title bg-primary rounded-circle font-size-16",
              uid: req.body.tecnico_id,
              uidr:req.userId,
              canal: "",
            };
            CrearNotificacion(datos);
            res.send({
              message: "editado satisfactoriamente."
            });
      } else {
        res.send({
          message: `No puede editar la programacion con el  el =${id}. Tal vez no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar la programacion con el id=" + id
      });
    });
};


exports.escalar = async (req, res) => {
  const id = req.body.id;
  const program = {
    motivo_escalado: req.body.motivo_escalado,
    aplica_escalado:"Aplica",
    status:"Escalada",
  };
 await ProgramacionAth.update(program,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
            res.send({
              message: "editado satisfactoriamente."
            });
      } else {
        res.send({
          message: `No puede editar la programacion con el  el =${id}. Tal vez no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar la programacion con el id=" + id
      });
    });
};

exports.archivar = async (req, res) => {
  const id = req.body.id;
  const program = {
    motivo_archivado: req.body.motivo_archivado,
    status:"Archivada",
  };
 await ProgramacionAth.update(program,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
            res.send({
              message: "editado satisfactoriamente."
            });
      } else {
        res.send({
          message: `No puede editar la programacion con el  el =${id}. Tal vez no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar la programacion con el id=" + id
      });
    });
};

exports.cerrar = async (req, res) => {
  const id = req.body.id;
  const program = {
    motivo_cierre: req.body.motivo_cierre,
    status:"Cerrada",
    fecha_cierre: Date.now(),
  };
 await ProgramacionAth.update(program,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
            res.send({
              message: "editado satisfactoriamente."
            });
      } else {
        res.send({
          message: `No puede editar la programacion con el  el =${id}. Tal vez no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar la programacion con el id=" + id
      });
    });
};


exports.rechazar = async (req, res) => {
  const id = req.body.id;
  const program = {
    motivo_rechazo: req.body.motivo_rechazo,
    status:"Rechazada",
    tecnico_id:null,
  };
 await ProgramacionAth.update(program,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
            res.send({
              message: "editado satisfactoriamente."
            });
            const datos = {
              titulo: `Programación ATH-${req.body.id} rechazada por el técnico`,
              descripcion: `Motivo ${req.body.motivo_rechazo}`,
              origen: "",
              modulo: "llamadas_ATH",
              icon: "ri-close-fill",
              color: "avatar-title bg-danger rounded-circle font-size-16",
              uid: req.body.coordinador_id,
              uidr:req.userId,
              canal: "",
            };
            CrearNotificacion(datos);
      } else {
        res.send({
          message: `No puede editar la programacion con el  el =${id}. Tal vez no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar la programacion con el id=" + id
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




// Delete a Book with the specified id in the request
exports.delete = (req, res) => {

  const id = req.body.id;
  ProgramacionAth.destroy({
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




exports.filtro = async (req, res) => {
  console.log(req.body);
  const desde =req.body.desde;
  const hasta =req.body.hasta;
  const estado =req.body.estado;
  const regionals =req.body.regional;
  let body=[];
  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional==='' && req.body.entidad_bancaria===''&& req.body.status==='') {
    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {

        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },

          }      
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          
          ]
        }],
      }
    }

  }

  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional==='' && req.body.entidad_bancaria==='' && req.body.status) {
    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          status:req.body.status,
          created_at: {
            [Op.between]: [desde, hasta]
          },
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {
          status:req.body.status
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },

          }      
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          
          ]
        }],
      }
    }

  }


  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional && req.body.entidad_bancaria==='' && req.body.status==='') {

    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional
          },
          include: [
              { model: Ciudad,attributes:[ 'ciudad','departamento'] },
              { model: Entidad,attributes:[ 'imagen','id'] },
              { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {

        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },
          }      
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional
          },
          include: [
          { model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }

  }
  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional && req.body.entidad_bancaria && req.body.status==='') {

    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional,
            entidad_bancaria:req.body.entidad_bancaria
          },
          include: [
            { model: Ciudad,attributes:[ 'ciudad','departamento'] },
            { model: Entidad,attributes:[ 'imagen','id'] },
            { model: Regional,attributes:[ 'nombre'] }]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {

        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },
          }      
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional,
            entidad_bancaria:req.body.entidad_bancaria
          },
          include: [
            { model: Ciudad,attributes:[ 'ciudad','departamento'] },
            { model: Entidad,attributes:[ 'imagen','id'] },
            { model: Regional,attributes:[ 'nombre'] }
          
          ]
        }],
      }
    }

  }

  
  await  ProgramacionAth.findAll(body)
      .then(data => {
        console.log(body);
        res.send(data);
        console.log(body);
      })
      .catch(err => {
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving books."
        });
      });
  };



///// filtro de analistas /////
exports.filtroAnalista = async (req, res) => {
  console.log(req.body);
  const desde =req.body.desde;
  const hasta =req.body.hasta;
  const estado =req.body.estado;
  const regionals =req.body.regional;
  let body=[];
  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional==='' && req.body.entidad_bancaria===''&& req.body.status==='') {
    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },

          }      
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          
          ]
        }],
      }
    }

  }

  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional==='' && req.body.entidad_bancaria==='' && req.body.status) {
    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          status:req.body.status,
          created_at: {
            [Op.between]: [desde, hasta]
          },
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {
          status:req.body.status,
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },

          }      
        },
        {
          model: Cajero,
          include: [{ model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          
          ]
        }],
      }
    }

  }


  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional && req.body.entidad_bancaria==='' && req.body.status==='') {

    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional
          },
          include: [
              { model: Ciudad,attributes:[ 'ciudad','departamento'] },
              { model: Entidad,attributes:[ 'imagen','id'] },
              { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },
          }      
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional
          },
          include: [
          { model: Ciudad,attributes:[ 'ciudad','departamento'] },
          { model: Entidad,attributes:[ 'imagen','id'] },
          { model: Regional,attributes:[ 'nombre'] }
          ]
        }],
      }
    }

  }
  if (req.body.desde && req.body.hasta && req.body.criterio && req.body.regional && req.body.entidad_bancaria && req.body.status==='') {

    if (req.body.criterio==='llamada') {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional,
            entidad_bancaria:req.body.entidad_bancaria
          },
          include: [
            { model: Ciudad,attributes:[ 'ciudad','departamento'] },
            { model: Entidad,attributes:[ 'imagen','id'] },
            { model: Regional,attributes:[ 'nombre'] }]
        }],
      }
    }else{
      body={
        limit: 3000000,
        offset: 0,
        where: {
          analista_id: req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            created_at: {
              [Op.between]: [desde, hasta]
            },
          }      
        },
        {
          model: Cajero,
          order: [
            ['id', 'ASC'],
          ],
          where:{
            regional_id:req.body.regional,
            entidad_bancaria:req.body.entidad_bancaria
          },
          include: [
            { model: Ciudad,attributes:[ 'ciudad','departamento'] },
            { model: Entidad,attributes:[ 'imagen','id'] },
            { model: Regional,attributes:[ 'nombre'] }
          
          ]
        }],
      }
    }

  }

  await  ProgramacionAth.findAll(body)
      .then(data => {
        console.log(body);
        res.send(data);
        console.log(body);
      })
      .catch(err => {
        console.log(err);
        res.send(500).send({
          message: err.message || "Some error accurred while retrieving books."
        });
      });
  };


///alertas


exports.alertasAdmin = async (req, res) => {

  await ProgramacionAth.findAndCountAll({
      limit: 3000000,
      offset: 0,
      where: {
        status:{
          [Op.or]: ["Creada","Programada","Reprogramada","Reprogramada","Devuelta","Aceptada","Rechazada","En proceso"]
        }
      }, // conditions
      order: [
        ['fecha_vencimiento', 'ASC'],
      ],
      include: [{
        model: User, as: 'Tecnico_ath',
        attributes:['nombre', 'apellido','imagen' ],
      }, 
      {
        model: User, as: 'Coordinador',
        attributes:['nombre', 'apellido','imagen' ],
      }, 
      {
        model: Legalizaciones,
      },
      {
        model: Sac,
      },
      {
        model: Gestion
      },
      {
        model: Cajero,
        include: [{
           model: Ciudad,
           attributes:['ciudad','departamento','alerta_administrador_critico','alerta_administrador_alto','alerta_administrador_mediano','alerta_administrador_bajo']
           },
        { 
          model: Entidad,
          include: [
            { 
              model: PermisoAdmin,
            }
          ]
        },
        { 
          model: Regional,
          attributes:[ 'nombre'] 
        },
        ]
      }],
    }) 
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.send(500).send({
          message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
        });
      });
  };
  



  exports.alertasCoordinadores = async (req, res) => {

    await ProgramacionAth.findAndCountAll({
        limit: 3000000,
        offset: 0,
        where: {
          status:{
            [Op.or]: ["Creada","Programada","Reprogramada","Reprogramada","Devuelta","Aceptada","Rechazada","En proceso"]
          }
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion
        },
        {
          model: Cajero,
          include: [{
             model: Ciudad,
             attributes:['ciudad','departamento','alerta_coordinador_critico','alerta_coordinador_alto','alerta_coordinador_mediano','alerta_coordinador_bajo']
             },
          { 
            model: Entidad,
            include: [
              { 
                model: PermisoCoordinador,
              }
            ]
          },
          { 
            model: Regional,
            attributes:[ 'nombre'] 
          },
          ]
        }],
      }) 
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log(err);
          res.send(500).send({
            message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
          });
        });
    };
    


  exports.alertasAnalistas = async (req, res) => {

    await ProgramacionAth.findAndCountAll({
        limit: 3000000,
        offset: 0,
        where: {
          status:{
            [Op.or]: ["Creada","Programada","Reprogramada","Reprogramada","Devuelta","Aceptada","Rechazada","En proceso"]
          },
          analista_id:req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion
        },
        {
          model: Cajero,
          include: [{
             model: Ciudad,
             attributes:['ciudad','departamento','alerta_analista_critico','alerta_analista_alto','alerta_analista_mediano','alerta_analista_bajo']
             },
          { 
            model: Entidad,
          },
          { 
            model: Regional,
            attributes:[ 'nombre'] 
          },
          ]
        }],
      }) 
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log(err);
          res.send(500).send({
            message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
          });
        });
    };
    

    
  exports.alertasTecnicos = async (req, res) => {

    await ProgramacionAth.findAndCountAll({
        limit: 3000000,
        offset: 0,
        where: {
          status:{
            [Op.or]: ["Creada","Programada","Reprogramada","Reprogramada","Devuelta","Aceptada","Rechazada","En proceso"]
          },
          tecnico_id:req.userId
        }, // conditions
        order: [
          ['fecha_vencimiento', 'ASC'],
        ],
        include: [{
          model: User, as: 'Tecnico_ath',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: User, as: 'Coordinador',
          attributes:['nombre', 'apellido','imagen' ],
        }, 
        {
          model: Legalizaciones,
        },
        {
          model: Sac,
        },
        {
          model: Gestion
        },
        {
          model: Cajero,
          include: [{
             model: Ciudad,
             attributes:['ciudad','departamento','alerta_tecnico_critico','alerta_tecnico_alto','alerta_tecnico_mediano','alerta_tecnico_bajo']
             },
          { 
            model: Entidad,
          },
          { 
            model: Regional,
            attributes:[ 'nombre'] 
          },
          ]
        }],
      }) 
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          console.log(err);
          res.send(500).send({
            message: err.message || "Ocurrio un erro al intentar acceder a este recursos."
          });
        });
    };
    