const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const subcategoriaController = require("../controllers/subcategoria.controller.js");

    // Create a new cargo
    router.post("/subcategorias/",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], subcategoriaController.create);

    // Create a new cargo
    router.post("/subcategorias/find",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], subcategoriaController.find);

    // Retrieve all cargos
    router.get("/subcategorias", subcategoriaController.findAll);

    // Update a cargo with id
    router.put("/subcategorias",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], subcategoriaController.update);

    // Delete a cargo with id
    router.post("/subcategorias/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], subcategoriaController.delete);


    module.exports = router;
