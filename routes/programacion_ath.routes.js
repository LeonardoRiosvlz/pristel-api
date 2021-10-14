const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const programacionAthController = require("../controllers/programacionAth.controller.js");

    
    router.post("/programacion/ath",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin],programacionAthController.create);

    
    router.post("/programacion/ath/analista",[cpUpload,authJwt.verifyToken,authJwt.isAnalista],programacionAthController.createByAnalista);

    
    router.get("/programacion/ath/servicios",[cpUpload,authJwt.verifyToken], programacionAthController.findTecnico);

    
    router.post("/programacion/ath/find",[cpUpload,authJwt.verifyToken], programacionAthController.find);


    router.post("/programacion/ath/listaranalista",[cpUpload,authJwt.verifyToken, authJwt.isAnalista, authJwt.isAnalista], programacionAthController.findAllAnalista);

    
     router.post("/programacion/ath/programar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.programar);

   
    router.post("/programacion/ath/escalar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.escalar);

    
    router.post("/programacion/ath/rechazar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.rechazar);
 

    router.post("/programacion/ath/archivar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.archivar);
    

    router.post("/programacion/ath/cerrar",[cpUpload,authJwt.verifyToken,authJwt.isModeratorOrAdmin], programacionAthController.cerrar);

    
    router.get("/programacion/ath", programacionAthController.findAll);

 
    router.get("/programacion/ath/pendientes",[cpUpload,authJwt.verifyToken], programacionAthController.findPendientes);


    router.put("/programacion/ath",[cpUpload,authJwt.verifyToken], programacionAthController.update);

    
    router.post("/programacion/ath/delete",[cpUpload,authJwt.verifyToken], programacionAthController.delete);


    router.post("/programacion/ath/filtro",[cpUpload,authJwt.verifyToken], programacionAthController.filtro);


    router.post("/programacion/ath/filtroanalista",[cpUpload,authJwt.verifyToken], programacionAthController.filtroAnalista);


    router.post("/tecnico/programacion/ath/rechazar",[cpUpload,authJwt.verifyToken,authJwt.isTecnico], programacionAthController.rechazar);




    router.get("/programacion/ath/alertas/administadores",[cpUpload,authJwt.verifyToken], programacionAthController.alertasAdmin);

    router.get("/programacion/ath/alertas/analistas",[cpUpload,authJwt.verifyToken], programacionAthController.alertasAnalistas);

    router.get("/programacion/ath/alertas/tecnicos",[cpUpload,authJwt.verifyToken], programacionAthController.alertasTecnicos);

    router.get("/programacion/ath/alertas/coordinadores",[cpUpload,authJwt.verifyToken], programacionAthController.alertasCoordinadores);

    module.exports = router;
