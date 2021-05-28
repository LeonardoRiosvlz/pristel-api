import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }]);

    const formatoController = require("../controllers/formato.controller.js");

    // Create a new cargo
    router.post("/formatos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], formatoController.create);

    // Create a new cargo
    router.post("/formatos/status",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], formatoController.status);

    // Create a new cargo
    router.post("/formatos/find",[cpUpload,authJwt.verifyToken], formatoController.find);

    // Retrieve all cargos
    router.get("/formatos", formatoController.findAll);

    // Update a cargo with id
    router.put("/formatos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], formatoController.update);

    // Delete a cargo with id
    router.post("/formatos/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], formatoController.delete);


    module.exports = router;
