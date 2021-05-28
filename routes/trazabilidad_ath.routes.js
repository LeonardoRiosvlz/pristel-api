import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])



    const trazabilidadController = require("../controllers/trazabilidadAth.controller.js");

    // Create a new cargo
    router.post("/trazabilidad_ath",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], trazabilidadController.create);

    // Retrieve all cargos
    router.get("/trazabilidad_ath", trazabilidadController.findAll);

    // Update a cargo with id
    router.put("/trazabilidad_ath",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], trazabilidadController.update);

     // Update a cargo with id
    router.post("/trazabilidad_ath/find",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], trazabilidadController.trazos);

    // Delete a cargo with id
    router.post("/trazabilidad_ath/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], trazabilidadController.delete);

    module.exports = router;
