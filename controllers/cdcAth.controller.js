const db = require("../models");
const Cuenta = db.cdcath;
const CuentaDA = db.cdaath;
const Prgramacion = db.programacion_ath;
const Gestion = db.gestionAth;
const Cajero = db.cajero_ath;
const Ciudad = db.ciudad;
const Legalizacion = db.legalizacionAth;
const Tecnico = db.user;

exports.findAll = (req, res) => {

    Cuenta.findAll({
    limit: 3000000,
    offset: 0,
    where: {
      formato_id:null,
      tecnico_id:req.userId
    }, // conditions+
    include: [
      {
        model: Prgramacion,
        attributes:['id','tipo_llamada','llamada','descripcion','total_tecnico','coordinador_id','analista_id'],
        include: [
            {
              model: Cajero,
              attributes:['codigo','terminal','direccion'],
              include: [
                {
                  model: Ciudad,
                  attributes:['departamento','ciudad',],
                },
              ]
            },
            {
              model: Gestion,
            },
            {
              model: Legalizacion,
            }
          ]
      },
    ],
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




exports.findAllCDAR = (req, res) => {
  console.log(req.body.id);
  CuentaDA.findAll({
  limit: 3000000,
  offset: 0,
  where: {
    formato_id:null,
    tecnico_id:req.body.id
  }, // conditions+
  include: [
    {
      model: Prgramacion,
      attributes:['id','tipo_llamada','llamada','descripcion','total_tecnico','coordinador_id','analista_id'],
      include: [
          {
            model: Cajero,
            attributes:['codigo','terminal','direccion'],
            include: [
              {
                model: Ciudad,
                attributes:['departamento','ciudad',],
              },
            ]
          },
          {
            model: Gestion,
          },
          {
            model: Legalizacion,
          }
        ]
    },
  ],
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


exports.findAllCDA = (req, res) => {

  CuentaDA.findAll({
  limit: 3000000,
  offset: 0,
  where: {
    formato_id:null,
    tecnico_id:req.userId
  }, // conditions+
  include: [
    {
      model: Prgramacion,
      attributes:['id','tipo_llamada','llamada','descripcion','total_tecnico','coordinador_id','analista_id'],
      include: [
          {
            model: Cajero,
            attributes:['codigo','terminal','direccion'],
            include: [
              {
                model: Ciudad,
                attributes:['departamento','ciudad',],
              },
            ]
          },
          {
            model: Gestion,
          },
          {
            model: Legalizacion,
          }
        ]
    },
  ],
  order: [
    ['id', 'DESC'],
  ],
})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
    res.send(500).send({
      message: err.message || "Some error accurred while retrieving books."
    });
  });
};


exports.findAllCDAT = (req, res) => {

  Tecnico.findAll({
  limit: 3000000,
  offset: 0,
  where: {
    tipo_tecnico:"Nomina"
  }, // conditions+
  attributes:['id','nombre','apellido'],
  include: [
    {
      model: CuentaDA,
      where:{
        formato_id:null
      }
    },
  ],
  order: [
    ['id', 'DESC'],
  ],
})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
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
exports.update = (req, res) => {
  console.log(req)
  const id = req.body.id;

  Cargo.update({
    cargo: req.body.cargo,
    descripcion: req.body.descripcion
    },{
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

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
  Book.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Books were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all books."
      });
    });
};

// Find all published Books
exports.findAllPublished = (req, res) => {
  Book.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};




////dashboard////



exports.findAllDashboardTecnico = (req, res) => {
    Cuenta.findAll({
    limit: 3000000,
    offset: 0,
    where: {
      formato_id:null,
      tecnico_id:req.userId
    }, // conditions+
    include: [
      {
        model: Prgramacion,
        attributes:['id','tipo_llamada','llamada','descripcion','total_tecnico','coordinador_id','analista_id'],
        include: [
            {
              model: Cajero,
              attributes:['codigo','terminal','direccion'],
              include: [
                {
                  model: Ciudad,
                  attributes:['departamento','ciudad',],
                },
              ]
            },
            {
              model: Gestion,
            },
            {
              model: Legalizacion,
            }
          ]
      },
    ],
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




exports.findAllDashboardAnalista = (req, res) => {
  Cuenta.findAll({
  limit: 3000000,
  offset: 0,
  where: {
    formato_id:null
  }, // conditions+
  include: [
    {
      model: Prgramacion,
      attributes:['id','tipo_llamada','llamada','descripcion','total_tecnico','coordinador_id','analista_id'],
      where:{
        analista_id:req.userId
      },
      include: [
          {
            model: Cajero,
            attributes:['codigo','terminal','direccion'],
            include: [
              {
                model: Ciudad,
                attributes:['departamento','ciudad',],
              },
            ]
          },
          {
            model: Gestion,
          },
          {
            model: Legalizacion,
          }
        ]
    },
  ],
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


exports.findAllDashboardAdministrador = (req, res) => {
  Cuenta.findAll({
  limit: 3000000,
  offset: 0,
  where: {
    formato_id:null
  }, // conditions+
  include: [
    {
      model: Prgramacion,
      attributes:['id','tipo_llamada','llamada','descripcion','total_tecnico','coordinador_id','analista_id'],
      include: [
          {
            model: Cajero,
            attributes:['codigo','terminal','direccion'],
            include: [
              {
                model: Ciudad,
                attributes:['departamento','ciudad',],
              },
            ]
          },
          {
            model: Gestion,
          },
          {
            model: Legalizacion,
          }
        ]
    },
  ],
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