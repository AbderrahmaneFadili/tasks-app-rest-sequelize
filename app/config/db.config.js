module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "tasksdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 4,
        acquire: 30000,
        idle:10000
    }
}