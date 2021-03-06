const  express  = require('express');
const router = express.Router();
const { verifySignUp } = require("../middlewares");
const { authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const upload = require('../libs/storage');
const cpUpload = upload.fields([{ name: 'filename', maxCount: 1 },{ name: 'firma', maxCount: 1 }])



  router.post(
    "/auth/signup",
    [ cpUpload,verifySignUp.checkDuplicateUsernameOrEmail],controller.signup
  );

  router.post("/auth/update", [cpUpload,authJwt.verifyToken] ,controller.update);

  router.post("/auth/signin", [cpUpload], controller.signin);

  router.post('/auth/forgot-password',[cpUpload],controller.resetPass);

  router.put('/auth/recover-password',[cpUpload, authJwt.verifyToken],controller.recoverPass);

 module.exports = router;
