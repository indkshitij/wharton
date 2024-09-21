// Express
const express = require("express");
const app = express();
// .env
require("dotenv").config();
// DEBUG
const dbgr = require("debug")("devlopment:app");
// cookie Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Mongoose connection
const mongooseConnection = require("./config/mongooseConnection");
// listen app
app.listen(process.env.PORT, () => {
  dbgr(`Server Is Running On Port ${process.env.PORT}`);
});
