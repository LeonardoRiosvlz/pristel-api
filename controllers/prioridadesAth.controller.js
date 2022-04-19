const db = require("../models");
const Prioridades = db.prioridadesAth;

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.rol) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const datos = {
    rol: req.body.rol,
    critico: req.body.critico,
    alto: req.body.alto,
    medio: req.body.medio,
    bajo: req.body.bajo,
  };
  console.log(datos);
  // Save Book in database
 await Prioridades.create(datos)
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

 await Prioridades.findAndCountAll({
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
exports.findOne = async (req, res) => {
  const id = req.params.id;

 await Prioridades.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `erro al editar el Prioridades= ${id}`
      });
    });
};

// Update a Book by the id in the request
exports.update = async (req, res) => {
  console.log(req)
  const id = req.body.id;

 await Prioridades.update({
    rol: req.body.rol,
    critico: req.body.critico,
    alto: req.body.alto,
    medio: req.body.medio,
    bajo: req.body.bajo,
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
          message: `No puede editar el coargo con el  el =${id}. Tal vez el Prioridades no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al intentar editar el Prioridades con el id=" + id
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = async (req, res) => {
  console.log(req)
  const id = req.body.id;
 await Prioridades.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Prioridades borrado satisfactoriamente!"
        });
      } else {
        res.send({
          message: `No se pudo borrar el Prioridades con el id=${id}. Tal vez el Prioridades no existe!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el Prioridades con el id=" + id
      });
    });
};

