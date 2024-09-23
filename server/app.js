// Express
const express = require("express");
const app = express();

// .env
require("dotenv").config();

// DEBUG
const dbgr = require("debug")("devlopment:app");

// cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mongoose connection
const mongooseConnection = require("./config/mongooseConnection");

//Routes
const routes = require("./routes/routes");
const userRoute = require("./routes/userRoute");

// Router
app.use("/api", routes);
app.use("/user", userRoute);

// listen app
app.listen(process.env.PORT, () => {
  dbgr(`Server Is Running On Port ${process.env.PORT}`);
});
