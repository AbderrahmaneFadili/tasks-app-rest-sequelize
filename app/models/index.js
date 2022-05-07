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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tasks = require("../models/task.model")(sequelize, Sequelize);
db.Users = require("../models/user.model")(sequelize, Sequelize);

db.Users.hasMany(db.tasks, { as: "comments" });
db.tasks.belongsTo(db.Users, {
  foreignKey: "userId",
  as: "user",
});

module.exports = db;
