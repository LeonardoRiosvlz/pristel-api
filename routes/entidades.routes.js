import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])



    const categoriaController = require("../controllers/entidades.controller.js");



    // Create a new cargo
    router.post("/entidades",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], categoriaController.create);

    // Retrieve all cargos
    router.get("/entidades", categoriaController.findAll);

    // Update a cargo with id
    router.put("/entidades",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], categoriaController.update);

    // Delete a cargo with id
    router.post("/entidades/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], categoriaController.delete);

    // Retrieve all cargos
    router.get("/entidades/permisoscoordinadores",[cpUpload,authJwt.verifyToken], categoriaController.findPermisosCoordinador);

    // Retrieve all cargos
    router.get("/entidades/permisosadministradores",[cpUpload,authJwt.verifyToken], categoriaController.findPermisosAdministrador);
    
    // Retrieve all cargos
    router.get("/entidades/permisosanalistas",[cpUpload,authJwt.verifyToken], categoriaController.findPermisosAnalistas);

    module.exports = router;
