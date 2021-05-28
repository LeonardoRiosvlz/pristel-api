import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])



    const cajerosAthController = require("../controllers/cajerosAth.controller.js");



    // Create a new cargo
    router.post("/cajeros/ath",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cajerosAthController.create);

    // Retrieve all cargos
    router.get("/cajeros/ath", cajerosAthController.findAll);

    // Update  with id
    router.put("/cajeros/ath",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cajerosAthController.update);

    // Delete  with id
    router.post("/cajeros/ath/find",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cajerosAthController.find);

    // Delete  with id
    router.post("/byid",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cajerosAthController.byid);


    router.post("/cajeros/ath/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], cajerosAthController.delete);


    module.exports = router;
