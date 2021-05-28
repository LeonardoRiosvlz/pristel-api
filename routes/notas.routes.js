import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const notasController = require("../controllers/notas.controller.js");


    // Create a new cargo
    router.post("/notas",[cpUpload,authJwt.verifyToken,], notasController.create);

    // Create a new cargo
    router.post("/notas/find",[cpUpload,authJwt.verifyToken], notasController.find);


    // Update a cargo with id
    router.put("/notas",[cpUpload,authJwt.verifyToken], notasController.update);

    // Delete a cargo with id
    router.post("/notas/delete",[cpUpload,authJwt.verifyToken], notasController.delete);


    module.exports = router;
