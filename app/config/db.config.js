module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456789",
  DB: "tasksbd",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 4,
    acquire: 30000,
    idle: 10000,
  },
};
