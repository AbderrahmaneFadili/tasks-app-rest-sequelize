//verify Token
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");

//verify Token
const verifyToken = (request, response, next) => {
  let token = request.headers["x-access-token"];

  if (!token) {
    return response.status(500).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return response.status(500).send({
        message: "Unauthorized",
      });
    }
    request.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken,
};

module.exports = authJwt;
