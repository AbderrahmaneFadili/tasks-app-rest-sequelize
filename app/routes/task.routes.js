module.exports = (app) => {
  const tasks = require("../controllers/task.controller");
  let router = require("express").Router();

  //Create a task
  router.post("/", tasks.create);
  //Get All tasks
  router.get("/", tasks.findAll);
  //get single task by id
  router.get("/:id", tasks.findOne);
  //delete task
  router.delete("/:id", tasks.delete);

  app.use("/api/tasks", router);
};
