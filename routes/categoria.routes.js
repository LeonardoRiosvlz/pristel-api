import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])



    const categoriaController = require("../controllers/categoria.controller.js");

    // Create a new cargo
    router.post("/categorias",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], categoriaController.create);

    // Retrieve all cargos
    router.get("/categorias", categoriaController.findAll);

    // Update a cargo with id
    router.put("/categorias",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], categoriaController.update);

    // Delete a cargo with id
    router.post("/categorias/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], categoriaController.delete);




    module.exports = router;
