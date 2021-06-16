const db = require("../models");
const Album = db.album;

// Create and Save a new Book
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.codigo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  
  const body={};
  body.user_id=req.userId;
  body.codigo=req.body.codigo;
  body.entidad_id=req.body.entidad_id;
  body.cajero_ath_id=req.body.codigo;
  body.fecha=req.body.fecha;
  body.observaciones=req.body.observaciones;
  if(req.files['perimetro']){
    const { filename } = req.files['perimetro'][0]
    //body.perimetro= `https://pristel.herokuapp.com/public/${filename}`;
    body.perimetro= `https://pristel.herokuapp.com/public/${filename}`;
  }
  if(req.files['site']){
    
    const { filename } = req.files['site'][0];
      //body.site= `https://pristel.herokuapp.com/public/${filename}`;
  body.site= `https://pristel.herokuapp.com/public/${filename}`;
  }
  if(req.files['frente']){
    const { filename } = req.files['frente'][0]
    //body.frente= `https://pristel.herokuapp.com/public/${filename}`;
    body.frente= `https://pristel.herokuapp.com/public/${filename}`;
  }
  if(req.files['fachada']){
    const { filename } = req.files['fachada'][0]
    //body.fachada= `https://pristel.herokuapp.com/public/${filename}`;
    body.fachada= `https://pristel.herokuapp.com/public/${filename}`;
  }
  // Save Book in database
 await Album.create(body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book."
      });
    });
};


exports.findAll = (req, res) => {

  Album.findAndCountAll({
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

exports.find = async (req, res) => {
const codigo= req.body.codigo;
const entidad_id= req.body.entidad_id;
await  Album.findAll({
    limit: 3000000,
    offset: 0,
    where: {
      codigo:codigo,
      entidad_id:entidad_id
    },
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

  Album.findByPk(id)
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
  const id = req.body.id;
  const body={};
  body.user_id=req.userId;
  body.codigo=req.body.codigo;
  body.entidad_id=req.body.entidad_id;
  body.fecha=req.body.fecha;
  body.observaciones=req.body.observaciones;
  if(req.files['perimetro']){
    const { filename } = req.files['perimetro'][0]
    //body.perimetro= `https://pristel.herokuapp.com/public/${filename}`;
    body.perimetro= `https://pristel.herokuapp.com/public/${filename}`;
  }
  if(req.files['site']){
    
    const { filename } = req.files['site'][0];
     // body.site= `https://pristel.herokuapp.com/public/${filename}`;
    body.site= `https://pristel.herokuapp.com/public/${filename}`;
  }
  if(req.files['frente']){
    const { filename } = req.files['frente'][0]
    //body.frente= `https://pristel.herokuapp.com/public/${filename}`;
    body.frente= `https://pristel.herokuapp.com/public/${filename}`;
  }
  if(req.files['fachada']){
    const { filename } = req.files['fachada'][0]
    //body.fachada= `https://pristel.herokuapp.com/public/${filename}`;
    body.fachada= `https://pristel.herokuapp.com/public/${filename}`;
  }
await  Album.update(body,{
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
  Album.destroy({
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

