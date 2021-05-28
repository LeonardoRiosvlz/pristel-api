import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const calendarioController = require("../controllers/calendario.controller.js");
     // Retrieve all cargos
     router.get("/coordinador",[cpUpload,authJwt.verifyToken], calendarioController.findAth);



    module.exports = router;
