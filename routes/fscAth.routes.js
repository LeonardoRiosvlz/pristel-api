const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const Controller = require("../controllers/fscAth.controller.js");

    // Delete a cargo with id
    router.get("/ath/formatodecobro/admin",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdminOrTransferencias ], Controller.findAllAdmin); 
    // Delete a cargo with id
    router.post("/ath/formatodecobro/admin/filtro",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdminOrTransferencias ], Controller.filtroAdmin); 
    // Delete a cargo with id
    router.post("/ath/formatodecobro/analista/filtro",[cpUpload,authJwt.verifyToken ], Controller.filtroAnalista); 
    // Delete a cargo with id
    router.post("/ath/formatodecobro/coordinador/filtro",[cpUpload,authJwt.verifyToken ], Controller.filtroCoordinador); 
    // ajustes
    router.post("/ath/formatodecobro/archivar",[cpUpload,authJwt.verifyToken ], Controller.archivarFsc); 
    // Delete a cargo with id
    router.get("/ath/formatodecobro/coordinador",[cpUpload,authJwt.verifyToken ], Controller.findAllCoordinador); 
    // Delete a cargo with id
    router.get("/ath/formatodecobro/analista",[cpUpload,authJwt.verifyToken ], Controller.findAllAnalista); 
    // ajustes
    router.get("/ath/formatodeajustes",[cpUpload,authJwt.verifyToken ], Controller.findAllAjustes); 
    // ajustes
    router.post("/ath/formatodeajuste",[cpUpload,authJwt.verifyToken ], Controller.createformatodeajuste);
    // ajustes
    router.post("/ath/formatodeajuste/archivar",[cpUpload,authJwt.verifyToken ], Controller.archivarAjuste); 
    // Delete a cargo with id
    router.post("/ath/formatodecobro/procesar",[cpUpload,authJwt.verifyToken ], Controller.procesarFormato);    
    // Delete a cargo with id
    router.post("/ath/formatodecobro/pagar",[cpUpload,authJwt.verifyToken ], Controller.pagarFormato);  
    // Delete a cargo with id
    router.post("/ath/formatodecobro/revisar",[cpUpload,authJwt.verifyToken ], Controller.revisar);  
    // Create a new cargo
    router.post("/ath/formatodecobro/status",[cpUpload,authJwt.verifyToken, authJwt.isModeratorOrAdmin], Controller.status);
    // Delete a cargo with id
    router.get("/ath/formatodecobro/tecnico",[cpUpload,authJwt.verifyToken, authJwt.isTecnico ], Controller.findAllTecnico);    
    // Delete a cargo with id    
    router.get("/ath/formatodecobro",[cpUpload,authJwt.verifyToken ], Controller.findAll);
    // Delete a cargo with id
    router.post("/ath/formatodecobro",[cpUpload,authJwt.verifyToken ], Controller.create);


    // Delete a cargo with id    
    router.get("/ath/formatodecobro/dashboard/analista",[cpUpload,authJwt.verifyToken], Controller.findAllDasboardAnalista);
    // Delete a cargo with id    
    router.get("/ath/formatodecobro/dashboard/administrador",[cpUpload,authJwt.verifyToken], Controller.findAllDasboardAdministracion);
    // Delete a cargo with id    
    router.get("/ath/formatodecobro/dashboard/tecnico",[cpUpload,authJwt.verifyToken], Controller.findAllDasboardTecnico);

  module.exports = router;
