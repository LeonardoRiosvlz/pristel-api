import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const cdcathController = require("../controllers/cdcAth.controller.js");


    // Retrieve all cargos
    router.get("/ath/cuentasdecobro",[cpUpload,authJwt.verifyToken], cdcathController.findAll);

    // Update a cargo with id
    router.put("/ath/cuentasdecobro",[cpUpload,authJwt.verifyToken], cdcathController.update);

    // Delete a cargo with id
    router.post("/ath/cuentasdecobro/delete",[cpUpload,authJwt.verifyToken ], cdcathController.delete);


    
    // Delete a cargo with id
    router.get("/ath/cuentasdecobro/dashboard/tecnico", [cpUpload,authJwt.verifyToken ], cdcathController.findAllDashboardTecnico);

  module.exports = router;
 