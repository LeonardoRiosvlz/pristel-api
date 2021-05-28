import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])



    const areaController = require("../controllers/areas.controller.js");

    // Create a new cargo
    router.post("/areas",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], areaController.create);

    // Retrieve all cargos
    router.get("/areas", areaController.findAll);

    // Update a cargo with id
    router.put("/areas",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], areaController.update);

    // Delete a cargo with id
    router.post("/areas/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], areaController.delete);

 module.exports = router;
