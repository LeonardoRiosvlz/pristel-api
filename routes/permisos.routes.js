import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const entidadController = require("../controllers/entidades.controller.js");

    router.post("/permisos",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.create_permiso);

    router.post("/permisos/get",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.findAll_permisos);

    router.post("/permisos/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], entidadController.delete_permiso);

    module.exports = router;
