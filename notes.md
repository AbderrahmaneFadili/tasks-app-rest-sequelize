# Server

– import **express**, and **cors** modules:

Express is for building the Rest apis
**cors** provides Express middleware to enable **CORS** with various options.
– create an **Express** app, then add **body-parser** (**json** and **urlencoded**) and **cors**
middlewares using **app.use()** method. Notice that we set **origin: http://localhost:8081.**
– **define** a **GET** route which is simple for test.
– **listen** on port **8080** for **incoming** **requests**.

# MySQL Connection

- **First five** parameters are for **MySQL** connection.
- **pool** is optional, it will be used for **Sequelize** **connection** **pool** configuration:

- **max**: maximum number of connection in **pool**
- **min**: minimum number of connection in **pool**
- **idle**: maximum time, in **milliseconds**, that a connection can be idle before being released
- **acquire**: maximum time, in **milliseconds**, that pool will try to get connection before throwing error
  For more details, please visit API Reference for the Sequelize constructor.

# Initialize Sequelize

We’re gonna initialize Sequelize in **app/models** folder that will contain model in the next step.

Now create **app/models/index.js**

# Define the Sequelize Model

In models folder, create tutorial.model.js

This Sequelize Model represents tutorials table in MySQL database. These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.

After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them:

create a new Tutorial: create(object)
find a Tutorial by id: findByPk(id)
get all Tutorials: findAll()
update a Tutorial by id: update(data, where: { id: id })
remove a Tutorial: destroy(where: { id: id })
remove all Tutorials: destroy(where: {})
find all Tutorials by title: findAll({ where: { title: ... } })
