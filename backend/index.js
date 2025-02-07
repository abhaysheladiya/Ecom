const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json());
app.use(cors());

//API for registration
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password      //not show password in url
  resp.send(result);
});

// API for login the user after completing registration
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req, body).select("-password"); //'-password' it means remove/notShow password
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
    resp.send(user);
  }
});

app.listen(5000);
