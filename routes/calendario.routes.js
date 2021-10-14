const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const calendarioController = require("../controllers/calendario.controller.js");
     // Retrieve all cargos
     router.get("/calendario/coordinador",[cpUpload,authJwt.verifyToken], calendarioController.findAth);



    module.exports = router;
