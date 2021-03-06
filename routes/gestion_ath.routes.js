const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([
                            { name: 'filename', maxCount: 1 },
                            { name: 'gallery_antes', maxCount: 8 },
                            { name: 'gallery_durante', maxCount: 8 },
                            { name: 'gallery_despues', maxCount: 8 },
                            ])


    const gestionAthController = require("../controllers/gestionAth.controller.js");



    // Create a new cargo
    router.post("/gestion/ath",[cpUpload,authJwt.verifyToken], gestionAthController.create); 

    // Retrieve all cargos
    router.get("/gestion/ath", gestionAthController.findAll);

     // Retrieve all cargos
     router.post("/gestion/ath/find",[cpUpload,authJwt.verifyToken], gestionAthController.find);

    // Retrieve all cargos
    router.post("/gestion/ath/find/dashboard",[cpUpload,authJwt.verifyToken], gestionAthController.findAllDasbord);

               // Retrieve all cargos
    router.post("/gestion/ath/find/dashboard/analista",[cpUpload,authJwt.verifyToken], gestionAthController.findAllDasbordAnalista);

    // Retrieve all cargos
    router.post("/gestion/ath/find/dashboard/tecnico",[cpUpload,authJwt.verifyToken], gestionAthController.findAllDasbordTecnico);

    // Update a cargo with id
    router.put("/gestion/ath",[cpUpload,authJwt.verifyToken], gestionAthController.update);

    // Delete a cargo with id
    router.post("/gestion/ath/respuesta",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], gestionAthController.respuesta);

    // Delete a cargo with id
    router.post("/gestion/ath/delete",[cpUpload,authJwt.verifyToken], gestionAthController.delete);



    module.exports = router;
