import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([
                            { name: 'filename', maxCount: 1 },
                            { name: 'gallery_antes', maxCount: 8 },
                            { name: 'gallery_durante', maxCount: 8 },
                            { name: 'gallery_despues', maxCount: 8 },
                            ])


    const gestionAthController = require("../controllers/gestionAth.controller.js");



    // Create a new cargo
    router.post("/gestion",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], gestionAthController.create);

    // Retrieve all cargos
    router.get("/gestion", gestionAthController.findAll);

     // Retrieve all cargos
     router.post("/gestion/find",[cpUpload,authJwt.verifyToken], gestionAthController.find);

    // Update a cargo with id
    router.put("/gestion",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], gestionAthController.update);

    // Delete a cargo with id
    router.post("/gestion/respuesta",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], gestionAthController.respuesta);

    // Delete a cargo with id
    router.post("/gestion/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], gestionAthController.delete);


    module.exports = router;
