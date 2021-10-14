const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const cdcathController = require("../controllers/cdcAth.controller.js");


    // Retrieve all cargos
    router.get("/ath/cuentasdecobro",[cpUpload,authJwt.verifyToken], cdcathController.findAll);
    router.get("/ath/cuentasdeajuste",[cpUpload,authJwt.verifyToken], cdcathController.findAllCDA);
    router.post("/ath/cuentasdeajuste",[cpUpload,authJwt.verifyToken], cdcathController.findAllCDAR);
    router.get("/ath/cuentasdeajuste/tecnicos",[cpUpload,authJwt.verifyToken], cdcathController.findAllCDAT);
    // Update a cargo with id
    router.put("/ath/cuentasdecobro",[cpUpload,authJwt.verifyToken], cdcathController.update);

    // Delete a cargo with id
    router.post("/ath/cuentasdecobro/delete",[cpUpload,authJwt.verifyToken ], cdcathController.delete);


    
    // Delete a cargo with id

    router.get("/ath/cuentasdecobro/dashboard/tecnico", [cpUpload,authJwt.verifyToken ], cdcathController.findAllDashboardTecnico);
    // Delete a cargo with id
    router.get("/ath/cuentasdecobro/dashboard/analista", [cpUpload,authJwt.verifyToken ], cdcathController.findAllDashboardAnalista);
    // Delete a cargo with id
    router.get("/ath/cuentasdecobro/dashboard/administrador", [cpUpload,authJwt.verifyToken ], cdcathController.findAllDashboardAdministrador);
  module.exports = router;
 