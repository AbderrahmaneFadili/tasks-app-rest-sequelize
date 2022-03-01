module.exports = (app) => {
  const tasks = require("../controllers/task.controller");
  let router = require("express").Router();

  //Create a task
  router.post("/", tasks.create);
  //Get All tasks
  router.get("/", tasks.findAll);

  app.use("/api/tasks", router);
};
