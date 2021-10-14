const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const cargoController = require("../controllers/cargo.controller.js");



    // Create a new cargo
    router.post("/cargos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cargoController.create);

    // Retrieve all cargos
    router.get("/cargos", cargoController.findAll);

    // Update a cargo with id
    router.put("/cargos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cargoController.update);

    // Delete a cargo with id
    router.post("/cargos/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cargoController.delete);


  module.exports = router;
