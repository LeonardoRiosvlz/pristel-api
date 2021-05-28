import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'perimetro', maxCount: 1 },{ name: 'site', maxCount: 1 },{ name: 'frente', maxCount: 1 },{ name: 'fachada', maxCount: 1 }])



    const albumController = require("../controllers/album.controller.js");


    // Create a new cargo
    router.post("/album",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], albumController.create);

    // Create a new cargo
    router.post("/album/find",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], albumController.find);


    // Retrieve all cargos
    router.get("/album", albumController.findAll);

    // Update a cargo with id
    router.put("/album",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], albumController.update);


    // Delete a cargo with id
    router.post("/album/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], albumController.delete);

 module.exports = router;
