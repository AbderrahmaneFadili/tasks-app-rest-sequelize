# Server

– import **express**, and **cors** modules:

Express is for building the Rest apis
**cors** provides Express middleware to enable **CORS** with various options.
– create an **Express** app, then add **body-parser** (**json** and **urlencoded**) and **cors**
middlewares using **app.use()** method. Notice that we set **origin: http://localhost:8081.**
– **define** a **GET** route which is simple for test.
– **listen** on port **8080** for **incoming** **requests**.
