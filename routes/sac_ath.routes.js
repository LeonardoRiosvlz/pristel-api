const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const Controller = require("../controllers/sacAth.controller.js");


    // Create a new cargo
    router.post("/sac/ath",[cpUpload,authJwt.verifyToken], Controller.create);

    // Retrieve all cargos
    router.get("/sac/ath", Controller.findAll);

    // Update a cargo with id
    router.put("/sac/ath",[cpUpload,authJwt.verifyToken], Controller.update);

    // Delete a cargo with id
    router.post("/sac/ath/delete",[cpUpload,authJwt.verifyToken], Controller.delete);


    module.exports = router;
