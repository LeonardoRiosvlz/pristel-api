
import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const abonoController = require("../controllers/ascath.controller.js");

    // Create a new cargo
    router.post("/ascath",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], abonoController.create);

    // Create a new cargo
    router.get("/ascath/tecnico",[cpUpload,authJwt.verifyToken, authJwt.isTecnico], abonoController.findTecnico);

    // Retrieve all cargos
    router.get("/ascath", abonoController.findAll);

     // Retrieve all cargos
     router.post("/ascath/formato",[cpUpload,authJwt.verifyToken], abonoController.findFormato);

    // Update a cargo with id
    router.put("/ascath",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], abonoController.update);

    // Delete a cargo with id
    router.post("/ascath/delete",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], abonoController.delete);

 module.exports = router;
