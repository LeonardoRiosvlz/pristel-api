import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])
const uploads = require("../middlewares/uploads");

    const ciudadesController = require("../controllers/ciudades.controller.js");

    // Create a new cargo
    router.post("/ciudades/csv",[uploads.single("file"),authJwt.verifyToken], ciudadesController.upload);

    // Create a new cargo
    router.post("/ciudad/",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], ciudadesController.create);

    // Create a new cargo
    router.post("/ciudad/find",[cpUpload,authJwt.verifyToken], ciudadesController.findRegional);

    // Retrieve all cargos
    router.get("/ciudad/", ciudadesController.findAll);

    // Update a cargo with id
    router.put("/ciudad/",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], ciudadesController.update);

    // Delete a cargo with id
    router.post("/ciudad/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], ciudadesController.delete);


    module.exports = router;
