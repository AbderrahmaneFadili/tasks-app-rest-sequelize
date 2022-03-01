module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define("task", {
    title: {
      type: Sequelize.STRING,
    },
    completed: { type: Sequelize.BOOLEAN },
  });
  return Task;
};
