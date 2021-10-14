const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }]);

    const formatoController = require("../controllers/formato.controller.js");

    // Create a new cargo
    router.post("/formatos",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], formatoController.create);

    // Create a new cargo
    router.post("/formatos/status",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], formatoController.status);
 
    // Create a new cargo
    router.post("/formatos/find",[cpUpload,authJwt.verifyToken], formatoController.find);

    // Retrieve all cargos
    router.get("/formatos", formatoController.findAll);

    // Update a cargo with id
    router.put("/formatos",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], formatoController.update);

    // Delete a cargo with id
    router.post("/formatos/delete",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], formatoController.delete);


    router.post("/formatos/ath/filtro",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdminOrTransferencias], formatoController.filtro);


    // Create a new cargo
    router.post("/formatos/find/dashboard/admin",[cpUpload,authJwt.verifyToken], formatoController.findAllDashboardAdmin);

    // Create a new cargo
    router.post("/formatos/find/dashboard/analista",[cpUpload,authJwt.verifyToken], formatoController.findAllDashboardAnalista);

    // Create a new cargo
    router.post("/formatos/find/dashboard/tecnico",[cpUpload,authJwt.verifyToken], formatoController.findAllDashboardTecnico);

    // Delete a cargo with id
    router.post("/formatos/ath/archivar",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdminOrTransferencias], formatoController.archivar);
    
    module.exports = router;
