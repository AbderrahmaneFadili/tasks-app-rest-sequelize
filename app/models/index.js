const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.Host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL is connected");
  })
  .catch(() => {
    console.log("MySQL is not connected");
  });
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = Sequelize;
// db.tasks = require("../models/task.model")(sequelize, Sequelize);
// module.exports = db;
