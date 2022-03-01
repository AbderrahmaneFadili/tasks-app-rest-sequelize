const db = require("../models");
const Task = db.tasks;
//Operator
const operator = db.Sequelize.Op;

//Create a Task
exports.create = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  //Create a task
  const task = {
    title: req.body.title,
    completed: req.body.completed,
  };

  Task.create(task)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.statue(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

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
exports.findOne = (req, res) => {
  const id = req.params.id;
  Task.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find task with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Tutorial with id=" + id,
      });
    });
};

//Update task
exports.update = () => {};

//Delete task
exports.delete = () => {};

//Delete all tasks
exports.deleteAll = () => {};
