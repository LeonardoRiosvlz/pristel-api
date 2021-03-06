const  express  = require('express');
const router = express.Router();
const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 },{ name: 'firma', maxCount: 1 }])


  // Retrieve all Books
  router.get("/user/all",[authJwt.verifyToken], controller.findAll);

  router.get("/user/contactos",[authJwt.verifyToken], controller.findAllContacto);

  router.get("/user/coordinadores",[authJwt.verifyToken], controller.findCoordinadores);

  router.get("/user/pefil",[authJwt.verifyToken], controller.findOne);

  router.post("/user/tecnico",[cpUpload,authJwt.verifyToken], controller.findTecnico);

  router.post("/user/regional",[cpUpload,authJwt.verifyToken], controller.findregional);

  router.get("/user/administrador",[cpUpload,authJwt.verifyToken], controller.findAdministrador);

  router.get("/user/administrador/ath",[cpUpload,authJwt.verifyToken], controller.findAdministradorAth);

  router.get("/user/leglaizadores",[cpUpload,authJwt.verifyToken], controller.findLeglaizadores);

  router.get("/user/analistas",[cpUpload,authJwt.verifyToken], controller.findAnalista);

  router.put("/user/pefil",[cpUpload ,authJwt.verifyToken], controller.update);

  router.put("/user/canal",[cpUpload ,authJwt.verifyToken,authJwt.isActive], controller.updateCanal);

  router.get("/test/all", controller.allAccess);

  router.get("/test/user", [authJwt.verifyToken], controller.userBoard);


 module.exports = router;
