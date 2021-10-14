const  express  = require('express');
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

    // Retrieve all cargos
    router.get("/legalizaciones/ath/analistas",[cpUpload,authJwt.verifyToken], legalizacionesAthController.findAllAnalistas);
    
    // Create a new cargo
    router.post("/legalizaciones/ath",[cpUpload,authJwt.verifyToken], legalizacionesAthController.create);

    // Delete a cargo with id
    router.post("/legalizaciones/ath/respuesta",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdminOrLegalizaciones], legalizacionesAthController.respuesta);

     // Retrieve all cargos
     router.post("/legalizaciones/ath/find",[cpUpload,authJwt.verifyToken], legalizacionesAthController.find);

    // Update a cargo with id
    router.put("/legalizaciones/ath",[cpUpload,authJwt.verifyToken], legalizacionesAthController.update);

    // Delete a cargo with id
    router.post("/legalizaciones/ath/delete",[cpUpload,authJwt.verifyToken], legalizacionesAthController.delete);

    // Delete a cargo with id
    router.post("/legalizaciones/ath/archivar",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdminOrLegalizaciones], legalizacionesAthController.archivar);

    router.post("/legalizaciones/ath/filtro",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdminOrLegalizaciones], legalizacionesAthController.filtro);
    // Retrieve all cargos
    router.get("/legalizaciones/ath/dashboard/analista",[cpUpload,authJwt.verifyToken], legalizacionesAthController.findAllDashboardAnalista);
    // Retrieve all cargos
    router.get("/legalizaciones/ath/dashboard/tecnico",[cpUpload,authJwt.verifyToken], legalizacionesAthController.findAllDashboardTecnico);
    // Retrieve all cargos
    router.get("/legalizaciones/ath/dashboard/administrador",[cpUpload,authJwt.verifyToken], legalizacionesAthController.findAllDashboardAdministracion);    
    module.exports = router;
