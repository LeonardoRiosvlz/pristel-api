const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const tercerosController = require("../controllers/terceros.controller.js");

    // Create a new cargo
    router.post("/terceros",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], tercerosController.create);

    // Retrieve all cargos
    router.get("/terceros", tercerosController.findAll);

    // Update a cargo with id
    router.put("/terceros",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], tercerosController.update);

    // Delete a cargo with id
    router.post("/terceros/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], tercerosController.delete);


    module.exports = router;
