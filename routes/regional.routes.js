import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const regionalController = require("../controllers/regional.controller.js");

    // Create a new cargo
    router.post("/regional",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], regionalController.create);

    // Retrieve all cargos
    router.get("/regional", regionalController.findAll);

    // Update a cargo with id
    router.put("/regional",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], regionalController.update);

    // Delete a cargo with id
    router.post("/regional/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], regionalController.delete);


    module.exports = router;
