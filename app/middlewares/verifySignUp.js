// verify Sign Up
const db = require("../models");
const User = db.Users;

//check duplicate email
const checkDuplicateEmail = (request, response, next) => {
  User.findOne({
    where: {
      email: request.body.email,
    },
  }).then((user) => {
    if (user) {
      return response.status(404).send({
        message: "Failed! Email is already in use!",
      });
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateEmail,
};

module.exports = verifySignUp;
