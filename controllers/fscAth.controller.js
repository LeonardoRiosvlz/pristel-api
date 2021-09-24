const db = require("../models");
const Formato = db.fscAth;
const FormatoSA = db.fsaAth;
const Notificacion = db.notificacion;
const Cuenta = db.cdcath;
const CuentaDA= db.cdaath;
const Abonos = db.ascAth;
const User = db.user;
const config = require("../config/config.js");
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
    analista_id: req.body.analista_id,
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
        uid: req.body.analista_id,
        uidr:req.userId,
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


// Create and Save a new Book
exports.createformatodeajuste = (req, res) => {
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
  };

  // Save Book in database
  FormatoSA.create(book)
    .then(data => {
      res.send(data);
      AdjuntarAjuste(data);
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

async function AdjuntarAjuste(data){
  // Save
 await CuentaDA.update({
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

exports.findAllAdmin = (req, res) => {

  Formato.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {
      archivada:"No"
    }, // conditions
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
exports.filtroAdmin = async (req, res) => {
  console.log(req.body);
  const desde =req.body.desde;
  const hasta =req.body.hasta;
  const estado =req.body.estado;
  let body=[];
  if (req.body.desde && req.body.hasta && req.body.estado) {
    if (req.body.estado==="Cancelado") {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          fecha_pagado: {
            [Op.between]: [desde, hasta]
          },
          status_pago:"Cancelado"
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }else if (req.body.estado==="Archivada") {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          fecha_pagado: {
            [Op.between]: [desde, hasta]
          },
          archivada:"Archivada"
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }else{ 
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
          status:estado
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }
  }
if (req.body.desde==='' && req.body.hasta==='' && req.body.estado) {
  if (req.body.estado==="Cancelado") {
    body={
      limit: 3000000,
      offset: 0,
      where: {
        status_pago:"Cancelado"
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }else if (req.body.estado==="Archivada") {
    body={
      limit: 3000000,
      offset: 0,
      where: {
        archivada:"Archivada"
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }else{ 
    body={
      limit: 3000000,
      offset: 0,
      where: {
        status:estado
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }
}
  await  Formato.findAll(body)
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





exports.findAllAnalista = (req, res) => {

  Formato.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {analista_id:req.userId}, // conditions
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



exports.filtroAnalista = async (req, res) => {
  console.log(req.body);
  const desde =req.body.desde;
  const hasta =req.body.hasta;
  const estado =req.body.estado;
  let body=[];
  if (req.body.desde && req.body.hasta && req.body.estado) {
    if (req.body.estado==="Cancelado") {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          fecha_pagado: {
            [Op.between]: [desde, hasta]
          },
          status_pago:"Cancelado",
          analista_id:req.userId
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }else if (req.body.estado==="Archivada") {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          fecha_pagado: {
            [Op.between]: [desde, hasta]
          },
          archivada:"Archivada",
          analista_id:req.userId
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }else{ 
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
          status:estado,
          analista_id:req.userId
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }
  }
if (req.body.desde==='' && req.body.hasta==='' && req.body.estado) {
  if (req.body.estado==="Cancelado") {
    body={
      limit: 3000000,
      offset: 0,
      where: {
        status_pago:"Cancelado",
        analista_id:req.userId
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }else if (req.body.estado==="Archivada") {
    body={
      limit: 3000000,
      offset: 0,
      where: {
        archivada:"Archivada",
        analista_id:req.userId
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }else{ 
    body={
      limit: 3000000,
      offset: 0,
      where: {
        status:estado,
        analista_id:req.userId
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }
}
  await  Formato.findAll(body)
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




exports.findAllAjustes = (req, res) => {

  FormatoSA.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {}, // conditions
    order: [
      ['id', 'DESC'],
    ],
    include: [  
      { model: User, as: 'Tecnico_atha',
        attributes:['id','codigo', 'nombre', 'apellido', 'codigo']
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



exports.findAllCoordinador = (req, res) => {

  Formato.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {solicitante_id:req.userId}, // conditions
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
      console.log(err);
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
};



exports.filtroCoordinador = async (req, res) => {
  console.log(req.body);
  const desde =req.body.desde;
  const hasta =req.body.hasta;
  const estado =req.body.estado;
  let body=[];
  if (req.body.desde && req.body.hasta && req.body.estado) {
    if (req.body.estado==="Cancelado") {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          fecha_pagado: {
            [Op.between]: [desde, hasta]
          },
          status_pago:"Cancelado",
          solicitante_id:req.userId
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }else if (req.body.estado==="Archivada") {
      body={
        limit: 3000000,
        offset: 0,
        where: {
          fecha_pagado: {
            [Op.between]: [desde, hasta]
          },
          archivada:"Archivada",
          solicitante_id:req.userId
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }else{ 
      body={
        limit: 3000000,
        offset: 0,
        where: {
          created_at: {
            [Op.between]: [desde, hasta]
          },
          status:estado,
          solicitante_id:req.userId
        }, // conditions
        order: [
          ['created_at', 'ASC'],
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
      }
    }
  }
if (req.body.desde==='' && req.body.hasta==='' && req.body.estado) {
  if (req.body.estado==="Cancelado") {
    body={
      limit: 3000000,
      offset: 0,
      where: {
        status_pago:"Cancelado",
        solicitante_id:req.userId
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }else if (req.body.estado==="Archivada") {
    body={
      limit: 3000000,
      offset: 0,
      where: {
        archivada:"Archivada",
        solicitante_id:req.userId
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }else{ 
    body={
      limit: 3000000,
      offset: 0,
      where: {
        status:estado,
        solicitante_id:req.userId
      }, // conditions
      order: [
        ['created_at', 'ASC'],
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
    }
  }
}
  await  Formato.findAll(body)
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





exports.findAllTecnico = (req, res) => {

  Formato.findAndCountAll({
    limit: 3000000,
    offset: 0,
    where: {tecnico_id:req.userId}, // conditions
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
      console.log(err);
      res.send(500).send({
        message: err.message || "Some error accurred while retrieving books."
      });
    });
};

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


// Update a Book by the id in the request
exports.status =async (req, res) => {
  await Formato.update({
   observacion_administrador: req.body.observacion_administrador,
   status: req.body.status,
 },{ where: { id: req.body.id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "editado satisfactoriamente."
         });
         if (req.body.status==="Aprobado") {
           const datos = {
             titulo: `CUENTA DE COBRO  nº ${req.body.id} | APROBADA `,
             descripcion: `Cuenta de cobro para el tecnico ${req.body.nombre},  fue aprobada`,
             origen: "",
             modulo: "pagos",
             icon: "ri-check-double-line",
             color: "avatar-title bg-success rounded-circle font-size-16",
             uid: req.body.solicitante_id,
             uidr:req.userId,
             canal: "",
           };
           CrearNotificacion(datos);
         }else{
           const datos = {
             titulo:`CUENTA DE COBRO  nº ${req.body.id} | Rechazada `,
             descripcion: `Cuenta de cobro para el tecnico ${req.body.nombre},  fue rechazada motivo: ${req.body.observacion_administrador}`,
             origen: "",
             modulo: "pagos",
             icon: "ri-close-line",
             color: "avatar-title bg-danger rounded-circle font-size-16",
             uid: req.body.solicitante_id,
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
exports.procesarFormato = (req, res) => {
  console.log(req)
  const id = req.body.id;

  Formato.update({
    status: "Pendiente",
    items: req.body.items,
    observacion: req.body.observacion,
    total: req.body.total_cuenta,
    autorizador_id: req.body.autorizador_id
    },{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
        const datos = {
          titulo: `Formatos de solicitud de cobro `,
          descripcion: `Pendiente por aprobacion`,
          origen: "",
          modulo: "pagos_ath",
          icon: "ri-currency-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.autorizador_id,
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



// Update a Book by the id in the request
exports.pagarFormato = (req, res) => {
  console.log(req.body)
  const id = req.body.id;
  const body={};
  body.status_pago="Cancelado";
  body.observacion_pagado=req.body.observacion_pagado;
  body.total=req.body.total;
  body.autorizador_id=req.body.autorizador_id;
  body.fecha_pagado=req.body.fecha_pagado;
  
  if(req.files['filename']){
    const { filename } = req.files['filename'][0]
    body.archivo= `${config.server.SERVER+filename}`;
  }
  Formato.update(body,{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
        const datos = {
          titulo: `Pago realizado`,
          descripcion: `para la cuenta de cobro ${req.body.id}`,
          origen: "",
          modulo: "pagos_ath",
          icon: "ri-currency-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.tecnico_id,
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
      console.log(err);
      res.status(500).send({
        message: "Error al intentar editar el cargo con el id=" + id
      });
    });
};


// Update a Book by the id in the request
exports.revisar = (req, res) => {
  console.log(req)
  const id = req.body.id;

  Formato.update({
    status: "Revisado",
    items: req.body.items,
    observacion: req.body.observacion,
    total: req.body.total_cuenta,
    solicitante_id: req.body.solicitante_id
    },{
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "editado satisfactoriamente."
        });
        const datos = {
          titulo: `Formatos de solicitud de cobro revisado `,
          descripcion: `Pendiente por revision del coordinador`,
          origen: "",
          modulo: "pagos_ath",
          icon: "ri-currency-line",
          color: "avatar-title bg-primary rounded-circle font-size-16",
          uid: req.body.solicitante_id,
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
// Update a Book by the id in the request
exports.archivarFsc = (req, res) => {
  const id = req.body.id;
  console.log(id);
  Formato.update({
    archivada: "Archivada"
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


// Update a Book by the id in the request
exports.archivarAjuste = (req, res) => {
  const id = req.body.id;
  console.log(id);
  FormatoSA.update({
    status: "Archivado"
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


////dashboard/////


exports.findAllDasboardAdministracion = (req, res) => {

  Formato.findAndCountAll({
    limit: 10,
    offset: 0,
    where: {
      status_pago:"Pendiente"
    }, // conditions
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




exports.findAllDasboardAnalista = (req, res) => {

  Formato.findAndCountAll({
    limit: 10,
    offset: 0,
    where: {
      status_pago:"Pendiente",
      analista_id:req.userId
    }, // conditions
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


exports.findAllDasboardTecnico = (req, res) => {

  Formato.findAndCountAll({
    limit: 10,
    offset: 0,
    where: {
      tecnico_id:req.userId,
      status_pago:"Pendiente"
    }, // conditions
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