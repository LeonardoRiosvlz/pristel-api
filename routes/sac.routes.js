const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])
const uploads = require("../middlewares/uploads");


    const Controller = require("../controllers/sac.controller.js");

    // Create a new cargo
    router.post("/sac/csv",[uploads.single("file"),authJwt.verifyToken], Controller.upload);

    // Create a new cargo
    router.post("/sac",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.create);

    // Retrieve all cargos
    router.get("/sac", Controller.findAll);

    // Update a cargo with id
    router.put("/sac",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.update);

    // Delete a cargo with id
    router.post("/sac/delete",[cpUpload,authJwt.verifyToken, authJwt.isAdmin], Controller.delete);


    module.exports = router;
