import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const Controller = require("../controllers/fscAth.controller.js");

    // Delete a cargo with id
    router.get("/ath/formatodecobro/admin",[cpUpload,authJwt.verifyToken, authJwt.isAdmin ], Controller.findAllAdmin);
    // Delete a cargo with id
    router.get("/ath/formatodecobro/analista",[cpUpload,authJwt.verifyToken, authJwt.isModerator ], Controller.findAllAnalista); 
    // Delete a cargo with id
    router.post("/ath/formatodecobro/procesar",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin ], Controller.procesarFormato);    
    // Create a new cargo
    router.post("/ath/formatodecobro/status",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], Controller.status);
    // Delete a cargo with id
    router.get("/ath/formatodecobro/tecnico",[cpUpload,authJwt.verifyToken, authJwt.isTecnico ], Controller.findAllTecnico);    
    // Delete a cargo with id    
    router.get("/ath/formatodecobro",[cpUpload,authJwt.verifyToken ], Controller.findAll);
    // Delete a cargo with id
    router.post("/ath/formatodecobro",[cpUpload,authJwt.verifyToken ], Controller.create);


  module.exports = router;
