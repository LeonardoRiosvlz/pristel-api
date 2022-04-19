const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const Controller = require("../controllers/prioridadesAth.controller.js");

    // Create a new cargo
    router.post("/prioridades_ath",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.create);

    // Retrieve all cargos
    router.get("/prioridades_ath", Controller.findAll);

    // Update a cargo with id
    router.put("/prioridades_ath",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.update);

    // Delete a cargo with id
    router.post("/prioridades_ath/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.delete);


  module.exports = router;
