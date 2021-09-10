const { album } = require("../models");
const db = require("../models");
const CajerosAth = db.cajero_ath;
const Entidad = db.entidad;
const Ciudad = db.ciudad;
const Regional = db.regional;
const Album = db.album;
const User = db.user;
const Permisos = db.permisosAnalista;



const fs = require("fs");
const csv = require("fast-csv");


exports.upload = async (req, res) => {
    try {
      if (req.file == undefined) {
        return res.status(400).send("Agregue un archivo CSV!");
      }
  
      let tutorials = [];
      let path = "./storage/"+req.file.filename;

      fs.createReadStream(path)
        .pipe(csv.parse({ headers: true , delimiter: ';' }))
        .on("error", (error) => {
          throw error.message;
        })
        .on("data", (row) => {
          tutorials.push(row);
        })
        .on("end", () => {

          for (let index = 0; index < tutorials.length; index++) {
            tutorials[index].regional_id = parseInt(tutorials[index].regional_id);
            tutorials[index].ciudad_id = parseInt(tutorials[index].ciudad_id);
            tutorials[index].terminal= tutorials[index].terminal.toString();
            tutorials[index].id_entidad= 1;
            if(tutorials[index].ciudacompartido_con=="N/A"){
              tutorials[index].comparte_site="NO";
            }else{
              tutorials[index].comparte_site="SI";
            }
          }
          console.log(tutorials);
      CajerosAth.bulkCreate(tutorials)
            .then(() => {
              res.status(200).send({
                message:
                  "Uploaded the file successfully: " + req.file.originalname,
              });
            })
            .catch((error) => {
              res.status(500).send({
                message: "Fail to import data into database!",
                error: error.message,
              });
            });
        });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Could not upload the file: " + req.file.originalname,
      });
    }
  };
  



// Create and Save a new Book
exports.create = (req, res) => {
  // Validate request
  if (!req.body.codigo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Book
  const body = {
    tipo: req.body.tipo,
    codigo: req.body.codigo,
    tipologia: req.body.tipologia,
    terminal: req.body.terminal,
    direccion: req.body.direccion,
    numero_site: req.body.numero_site,
    comparte_site: req.body.comparte_site,
    compartido_con: req.body.compartido_con,
    cumpleanos: req.body.cumpleanos,
    administrado: req.body.administrado,
    tipo_site: req.body.tipo_site,
    ayc: req.body.ayc,
    marca: req.body.marca,
    mantenimiento: req.body.mantenimiento,
    aseo: req.body.aseo,
    entidad_bancaria: req.body.entidad_bancaria,
    id_entidad: 1,
    regional_id: req.body.regional_id,
    ciudades_id: req.body.ciudades_id,
  };

  // Save Book in database
  CajerosAth.create(body)
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

    CajerosAth.findAndCountAll({
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
exports.find = (req, res) => {
  const codigo = req.body.codigo;
  CajerosAth.findAll({
     where: { codigo: codigo } ,
     include: [  
      {
        model:Ciudad,
      },
      {
        model:Regional,
        include: [ 
         { 
           model:Permisos,
           include: [ 
            { 
              model:User,
              attributes:['nombre','apellido','id']
            }
           ]
         }
        ]
      },
      {
        model:Album,
      },
      {
        model:Entidad,
        attributes:['imagen']
      },
    ],
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};


// Find a single with an id
exports.byid = (req, res) => {
  const id = req.body.id;
  CajerosAth.findAll({
     where: { id: id },
     include: [  
      {
        model:Entidad,
        attributes:['imagen']
      },
      {
        model:Ciudad,
        attributes:['ciudad']
      },
      {
        model:Regional,
        attributes:['nombre']
      }
    ],
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  console.log(req)
  const id = req.body.id;
  CajerosAth.update({
    tipo: req.body.tipo,
    codigo: req.body.codigo,
    tipologia: req.body.tipologia,
    terminal: req.body.terminal,
    direccion: req.body.direccion,
    numero_site: req.body.numero_site,
    comparte_site: req.body.comparte_site,
    compartido_con: req.body.compartido_con,
    cumpleanos: req.body.cumpleanos,
    administrado: req.body.administrado,
    tipo_site: req.body.tipo_site,
    ayc: req.body.ayc,
    marca: req.body.marca,
    mantenimiento: req.body.mantenimiento,
    aseo: req.body.aseo,
    entidad_bancaria: req.body.entidad_bancaria,
    regional_id: req.body.regional_id,
    ciudades_id: req.body.ciudades_id,
    },{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente :D."
        });
      } else {
        res.send({
          message: `No puede editar el cajero con el  el =${id}. Tal vez el cajero no existe o la peticion es vacia!`
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Error al intentar editar el cajero con el id=" + id
      });
    });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  console.log(req)
  const id = req.body.id;
  CajerosAth.destroy({
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



// Find all published Books
exports.findAllPublished = (req, res) => {
    CajerosAth.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books."
      });
    });
};
