const db = require("../models");
const Formato = db.fscAth;
const Notificacion = db.notificacion;
const Cuenta = db.cdcath;
const User = db.user;
// Create and Save a new Book
exports.create = (req, res) => {
  // Validate request
  if (!req.body.total) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const book = {
    status: "Pendiente",
    status_pago: "Pendiente",
    items: req.body.items,
    total: req.body.total,
    tecnico_id: req.body.tecnico_id,
    solicitante: req.body.coordinador_id,
  };

  // Save Book in database
  Formato.create(book)
    .then(data => {
      res.send(data);
      const datos = {
        titulo: `Formato de solicitud de cobro `,
        descripcion: `Se ha creado un formato de solicitud de cobro`,
        origen: "",
        modulo: "pagos_ath",
        icon: "ri-currency-line",
        color: "avatar-title bg-primary rounded-circle font-size-16",
        uid: req.body.coordinador_id,
        canal: "",
      };
      CrearNotificacion(datos);
      Adjuntar(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    });
};

async function Adjuntar(data){
  // Save
 await Cuenta.update({
    formato_id: data.id,
    },{
    where: { tecnico_id: data.tecnico_id }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Book."
    });
    return;
  });
}

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
 global.io.to(datas.canal).emit('cliente', data);
})
.catch(err => {
 res.status(500).send({
   message: `erro al editar el cargo= ${id}`
 });
});

}


exports.findAll = (req, res) => {

  Formato.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    include: [  
      { model: User, as: 'Tecnico_athc',
        attributes:['id','codigo', 'nombre', 'apellido', 'codigo']
      },
      { model: User, as: 'Autorizador_athc',
      attributes:['id', 'nombre', 'apellido']
      },
      { model: User, as: 'Solicitante_athc',
        attributes:['id', 'nombre', 'apellido']
      }
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
