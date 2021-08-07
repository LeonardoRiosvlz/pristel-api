import jwt from 'jsonwebtoken';
const config = require("../config/config.js");
const db = require("../models");
const User = db.user;
const Permiso = db.permiso;
const PermisoAnalista = db.permisosAnalista;
const Conversacion = db.conversacion;

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.auth.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Token expirado"
      });
    }

    req.userId = decoded.id;

    next();
  });
};

const isActive = (req, res, next) => {
  User.findAndCountAll({
    where: { 
      id: req.userId,
      status: "activo"
     }
  }).then(data => {
      if (data.count> 0) {
        next();
        return;
      } else {
        return res.status(403).send({
          message: "Tu cuenta fue desasctivada"
        });
      }
    })
};

const isCoordinadorPrivilegiado =async (req, res, next) => {
 await Permiso.findAndCountAll({
    where: {
      uid: req.userId,
      eid: req.body.eid
     }
  }).then(data => {
      if (data.count> 0) {
        next();
        return;
      } else {
        return res.status(401).send({
          message: "No tienes permiso para esto"
        });
      }
    })
};


const isAdmin =async (req, res, next) => {
  await User.findByPk(req.userId).then(user => {
    if (user.tipo==="Administrador") {
      next();
      return;
    }else{
      res.status(403).send({
        message: "No eres un administrador!"
      });
      return;
    }
  });
};


const isAnalista =async (req, res, next) => {
  await User.findByPk(req.userId).then(user => {
    if (user.tipo==="Analista") {
      next();
      return;
    }else{
      res.status(403).send({
        message: "No eres un analista!"
      });
      return;
    }
  });
};

const isAnalistaPrivilegiado =async (req, res, next) => {
  await PermisoAnalista.findAndCountAll({
    where: {
      uid: req.userId,
      rid: req.body.id
     }
  }).then(data => {
      if (data.count> 0) {
        next();
        return;
      } else {
        return res.status(401).send({
          message: "No tienes permiso para esto"
        });
      }
    })
};




const isTecnico =async (req, res, next) => {
 await User.findByPk(req.userId).then(user => {
    if (user.tipo==="Tecnico") {
      next();
      return;
    }else{
      res.status(403).send({
        message: "No eres un tecnico!"
      });
      return;
    }
  });
};
const isModerator =async (req, res, next) => {
  await User.findByPk(req.userId).then(user => {
    if (user.tipo==="Coordinador") {
      next();
      return;
    }else{
      res.status(403).send({
        message: "No eres un tecnico!"
      });
      return;
    }
  });
};

const isModeratorOrAdmin =async (req, res, next) => {
  await User.findByPk(req.userId).then(user => {
    if (user.tipo==="Administrador"||user.tipo==="Coordinador"||user.tipo==="Analista") {
      next();
      return;
    }else{
      res.status(403).send({
        message: "No tienes permiso para esta accion!"
      });
      return;
    }
  });
};

const isAdminSala = (req, res, next) => {
  console.log(req.body.id_conversacion);
 Conversacion.findAndCountAll({
    where: {
      uid: req.userId,
      id:req.body.id_conversacion
    },
    offset: 10,
    limit: 1
  }).then(data => {
    if (data.count<1) {
      res.status(403).send({
        message: "No eres dueño de esta sala!"
      });
    }else{
      next();
      return;
    }
  })
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isActive: isActive,
  isTecnico: isTecnico,
  isAnalista: isAnalista,
  isAnalistaPrivilegiado: isAnalistaPrivilegiado,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin,
  isAdminSala: isAdminSala,
  isCoordinadorPrivilegiado: isCoordinadorPrivilegiado
};

module.exports = authJwt;
