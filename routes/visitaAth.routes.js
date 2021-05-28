import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const visitasAthController = require("../controllers/visitasAth.controller.js");

    // Create a new cargo
    router.post("/ath/visitas",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], visitasAthController.create);

    // Retrieve all cargos
    router.get("/ath/visitas", visitasAthController.findAll);

    // Update a cargo with id
    router.put("/ath/visitas",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], visitasAthController.update);

    // Delete a cargo with id
    router.post("/ath/visitas/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], visitasAthController.delete);


    module.exports = router;
