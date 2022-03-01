const db = require("../models");
const Task = db.tasks;
const operator = db.Sequelize.Op;

//Create a Task
exports.create = () => {};

//Retrieve all tasks
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title
    ? {
        title: { [operator.like]: `${title}` },
      }
    : null;
  Task.findAll({ where: condition })
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

//Find a single task
exports.findOne = () => {};

//Update task
exports.update = () => {};

//Delete task
exports.delete = () => {};

//Delete all tasks
exports.deleteAll = () => {};
