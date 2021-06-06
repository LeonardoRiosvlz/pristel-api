import express from 'express';
const router = express.Router();
const { authJwt } = require("../middlewares");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 }])


    const Controller = require("../controllers/fscAth.controller.js");

    // Delete a cargo with id
    router.get("/ath/formatodecobro",[cpUpload,authJwt.verifyToken ], Controller.findAll);
    // Delete a cargo with id
    router.post("/ath/formatodecobro",[cpUpload,authJwt.verifyToken ], Controller.create);


  module.exports = router;
