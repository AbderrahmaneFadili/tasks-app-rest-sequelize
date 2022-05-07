module.exports = (app) => {
  const auth = require("../controllers/auth.controller");
  let router = require("express").Router();
  const verifySignUp = require("../middlewares/verifySignUp");

  //post :  /api/auth/register
  router.post("/register", [verifySignUp.checkDuplicateEmail], auth.register);

  //post :  /api/auth/login
  router.post("/login", auth.login);

  app.use("/auth/api/", router);
};
