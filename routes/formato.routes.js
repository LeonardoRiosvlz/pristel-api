import express from 'express';
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




    // Create a new cargo
    router.post("/formatos/find/dashboard/admin",[cpUpload,authJwt.verifyToken], formatoController.findAllDashboardAdmin);

    // Create a new cargo
    router.post("/formatos/find/dashboard/analista",[cpUpload,authJwt.verifyToken], formatoController.findAllDashboardAnalista);

    // Create a new cargo
    router.post("/formatos/find/dashboard/tecnico",[cpUpload,authJwt.verifyToken], formatoController.findAllDashboardTecnico);
    
    module.exports = router;
