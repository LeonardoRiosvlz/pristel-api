
import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const abonoController = require("../controllers/abono.controller.js");

    // Create a new cargo
    router.post("/abonos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], abonoController.create);

    // Retrieve all cargos
    router.get("/abonos", abonoController.findAll);

     // Retrieve all cargos
     router.post("/abonos/formato",[cpUpload,authJwt.verifyToken], abonoController.findFormato);

    // Update a cargo with id
    router.put("/abonos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], abonoController.update);

    // Delete a cargo with id
    router.post("/abonos/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], abonoController.delete);

 module.exports = router;
