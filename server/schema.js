const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
