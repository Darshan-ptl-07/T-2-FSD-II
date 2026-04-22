var express = require("express");
var app = express();
var checkpass = (req, res, next) => {
  var haspass = true;
  if (haspass) {
    next();
  } else {
    res.send("No Entry");
  }
};
var data = (req, res, next) => {
  req.name = "Mickey";
  console.log("User Verified");
  next();
};
app.get("/", checkpass, data, (req, res) => {
  res.send(`<h1>Welcome ${req.name}</h1>`);
});
app.listen(3005);