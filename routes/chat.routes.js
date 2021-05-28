import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const chatController = require("../controllers/chat.controller.js");


    // Create a new cargo
    router.post("/sala",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], chatController.createSala);

    // Retrieve all cargos
    router.get("/chat/salas",[cpUpload,authJwt.verifyToken], chatController.findAll);
    router.get("/chat/invitaciones",[cpUpload,authJwt.verifyToken], chatController.invitaciones);
    router.post("/chat/crear",[cpUpload,authJwt.verifyToken], chatController.createSala);
    router.post("/chat/suscribir",[cpUpload,authJwt.verifyToken,authJwt.isAdminSala], chatController.suscribir);
    router.post("/chat/mensaje",[cpUpload,authJwt.verifyToken], chatController.mensajes);
    router.post("/chat/expulsar",[cpUpload,authJwt.verifyToken,authJwt.isAdminSala], chatController.expulsar);
    router.post("/chat/salas",[cpUpload,authJwt.verifyToken], chatController.findSala);
    // Update a cargo with id
    router.put("/chat/",[cpUpload,authJwt.verifyToken], chatController.update);

    // Delete a cargo with id
    router.post("/chat/delete",[cpUpload,authJwt.verifyToken,authJwt.isAdminSala], chatController.delete);
    router.post("/chat/clear",[cpUpload,authJwt.verifyToken,authJwt.isAdminSala], chatController.clear);

    module.exports = router;
