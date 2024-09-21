const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: Number },
  dateOfBirth: { type: Date },
  address: { type: String },
  education: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
