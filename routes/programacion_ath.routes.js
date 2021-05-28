import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const programacionAthController = require("../controllers/programacionAth.controller.js");


    // Create a new cargo
    router.post("/programacion/ath",[cpUpload,authJwt.verifyToken], programacionAthController.create);

    // Create a new cargo
    router.post("/programacion/ath/find",[cpUpload,authJwt.verifyToken], programacionAthController.find);

    // Create a new cargo
     router.post("/programacion/ath/programar",[cpUpload,authJwt.verifyToken], programacionAthController.programar);

     // Create a new cargo
    router.post("/programacion/ath/escalar",[cpUpload,authJwt.verifyToken], programacionAthController.escalar);

    // Create a new cargo
    router.post("/programacion/ath/rechazar",[cpUpload,authJwt.verifyToken], programacionAthController.rechazar);

    // Create a new cargo
    router.post("/programacion/ath/archivar",[cpUpload,authJwt.verifyToken], programacionAthController.archivar);

    // Create a new cargo
    router.post("/programacion/ath/cerrar",[cpUpload,authJwt.verifyToken], programacionAthController.cerrar);

    // Retrieve all cargos
    router.get("/programacion/ath", programacionAthController.findAll);

    // Retrieve all cargos
    router.get("/programacion/ath/pendientes",[cpUpload,authJwt.verifyToken], programacionAthController.findPendientes);

    // Update  with id
    router.put("/programacion/ath",[cpUpload,authJwt.verifyToken], programacionAthController.update);


    router.post("/programacion/ath/delete",[cpUpload,authJwt.verifyToken], programacionAthController.delete);



    module.exports = router;
