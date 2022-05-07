const db = require("../models");
const User = db.Users;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Operator
const operator = db.Sequelize.Op;

//register
exports.register = (request, response) => {
  //Save user to database
  User.create({
    fullName: request.body.fullName,
    email: request.body.email,
    password: bcrypt.hashSync(request.body.password, 8),
  })
    .then((user) => {
      if (user) {
        response.status(200).send(user);
      }
    })
    .catch((error) => {
      response.status(500).send({
        message: error.message || "User cannot register",
      });
    });
};

//login
exports.login = (request, response) => {
  //Find User by Email
  User.findOne({
    where: {
      email: request.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return response.status(404).send({
          message: "User not found",
        });
      }
      // compare the two passwords
      const passwordIsValid = bcrypt.compareSync(
        request.body.password,
        user.password,
      );

      if (!passwordIsValid) {
        //return Invalid Password message
        return response.send({
          accessToken: null,
          message: "Invalid Password",
        });
      } else {
        let token = jwt.sign(
          {
            email: user.email,
          },
          config.secret,
          {
            expiresIn: 3600,
          },
        );

        //return the user
        response.status(200).send({
          fullName: user.fullName,
          email: user.email,
          password: user.password,
          accessToken: token,
        });
      }
    })
    .catch((error) => {
      response.status(500).send({
        message: error.message,
      });
    });
};
