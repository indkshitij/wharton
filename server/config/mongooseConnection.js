const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => dbgr("Database Connected"))
  .catch((err) => {
    dbgr("Database is not connected", err);
  });

module.exports = mongoose.connection;
