import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([
                            { name: 'evidencias', maxCount: 8 },
                            { name: 'filename', maxCount: 1 },
                            ])

    const legalizacionesAthController = require("../controllers/legalizacionesAth.controller.js");

    // Retrieve all cargos
    router.get("/legalizaciones/ath", legalizacionesAthController.findAll);

    // Create a new cargo
    router.post("/legalizaciones/ath",[cpUpload,authJwt.verifyToken], legalizacionesAthController.create);

    // Delete a cargo with id
    router.post("/legalizaciones/ath/respuesta",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], legalizacionesAthController.respuesta);

     // Retrieve all cargos
     router.post("/legalizaciones/ath/find",[cpUpload,authJwt.verifyToken], legalizacionesAthController.find);

    // Update a cargo with id
    router.put("/legalizaciones/ath",[cpUpload,authJwt.verifyToken], legalizacionesAthController.update);

    // Delete a cargo with id
    router.post("/legalizaciones/ath/delete",[cpUpload,authJwt.verifyToken], legalizacionesAthController.delete);


    module.exports = router;
