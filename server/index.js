/*app.js*/
const dotenv = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const userModel = require("./schema");
const PORT = parseInt(process.env.PORT || "8080");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

//  Add user endpoint
app.post("/addUser", async (req, res) => {
  let User = new userModel(req.body);
  await User.save();
  res.json({ message: "User stored successfully" });
});

//  get all user endpoint
app.get("/getAllUser", async (req, res) => {
  let user = await userModel.find();
  res.json(user);
});

// delete the user based on their user id
app.delete("/deleteUser", async (req, res) => {
  let user = await userModel.deleteOne({ _id: req.query.id });
  res.json({ message: "user deleted successfully" });
});
app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
