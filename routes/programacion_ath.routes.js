import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const programacionAthController = require("../controllers/programacionAth.controller.js");

    // Create a new cargo
    router.post("/programacion/ath",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin],programacionAthController.create);
    // Create a new cargo
    router.get("/programacion/ath/servicios",[cpUpload,authJwt.verifyToken], programacionAthController.findTecnico);
    // Create a new cargo
    router.get("/programacion/ath/llamadasexcel",[cpUpload], programacionAthController.excelexport);
    // Create a new cargo
    router.post("/programacion/ath/find",[cpUpload,authJwt.verifyToken], programacionAthController.find);
    // Create a new cargo
     router.post("/programacion/ath/programar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.programar);
     // Create a new cargo
    router.post("/programacion/ath/escalar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.escalar);
    // Create a new cargo
    router.post("/programacion/ath/rechazar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.rechazar);
    // Create a new cargo
    router.post("/programacion/ath/archivar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.archivar);
    // Create a new cargo
    router.post("/programacion/ath/cerrar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.cerrar);
    // Retrieve all cargos
    router.get("/programacion/ath", programacionAthController.findAll);
    // Retrieve all cargos
    router.get("/programacion/ath/pendientes",[cpUpload,authJwt.verifyToken], programacionAthController.findPendientes);
    // Update  with id
    router.put("/programacion/ath",[cpUpload,authJwt.verifyToken], programacionAthController.update);
    
    router.post("/programacion/ath/delete",[cpUpload,authJwt.verifyToken], programacionAthController.delete);

    router.post("/programacion/ath/filtro",[cpUpload,authJwt.verifyToken], programacionAthController.filtro);
    ///////////tecnico///////////////
    // Create a new cargo
    router.post("/tecnico/programacion/ath/rechazar",[cpUpload,authJwt.verifyToken,authJwt.isTecnico], programacionAthController.rechazar);


    module.exports = router;
