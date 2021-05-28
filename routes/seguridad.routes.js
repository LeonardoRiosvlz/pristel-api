import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const seguridadController = require("../controllers/seguridad.controller.js");

    // Create a new cargo
    router.post("/seguridad",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], seguridadController.create);

    // Retrieve all cargos
    router.get("/seguridad", seguridadController.findAll);

    // Update a cargo with id
    router.put("/seguridad",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], seguridadController.update);

    // Delete a cargo with id
    router.post("/seguridad/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], seguridadController.delete);


    module.exports = router;
