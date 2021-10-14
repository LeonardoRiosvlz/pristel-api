const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])

    const cargoController = require("../controllers/imputaciones.controller.js");

    // Create a new cargo
    router.post("/imputaciones",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], cargoController.create);

    router.post("/imputaciones/find",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], cargoController.findOne);

    // Retrieve all cargos
    router.get("/imputaciones", cargoController.findAll);

    // Update a cargo with id
    router.put("/imputaciones",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], cargoController.update);

    // Delete a cargo with id
    router.post("/imputaciones/delete",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], cargoController.delete);



    module.exports = router;
