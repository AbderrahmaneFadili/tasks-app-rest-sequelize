const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

let corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

//parse request of content-type - application/json
app.use(express.json());

//parse request of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());

//simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Tasks REST API application.",
  });
});

//sync
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./app/routes/task.routes")(app);

require("./app/routes/auth.routes")(app);

//set port , listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
