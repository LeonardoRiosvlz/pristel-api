import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const entidadController = require("../controllers/entidades.controller.js");

    router.post("/permisos/administradores",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.create_permiso_admin);

    router.post("/permisos/administradores/get",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.findAll_permisos_admin);

    router.post("/permisos/administradores/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.delete_permiso_admin);

    router.post("/permisos/coordinadores",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.create_permiso_coordinador);

    router.post("/permisos/coordinadores/get",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.findAll_permisos_coordinador);

    router.post("/permisos/coordinadores/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.delete_permiso_coordinador);

    router.post("/permisos/analistas",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.create_permisos_analista);

    router.post("/permisos/analistas/get",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.findAll_permisos_analista);

    router.post("/permisos/analistas/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.delete_permisos_analista);
    module.exports = router;
