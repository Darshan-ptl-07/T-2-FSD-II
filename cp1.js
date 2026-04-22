var express = require("express");
var app = express();

var cp = require("cookie-parser");
app.use(cp());
app.get("/", (req, res) => {
  res.cookie("fname", "Test", { maxAge: 3000 });
  res.cookie("lname", "Test1");
  res.cookie("subject", "FSD2", { maxAge: 5000 });
  res.cookie("email", "test@gmail.com", {
    expires: new Date(Date.now() + 10000),
  });
  res.clearCookie("lname");
  res.send(req.cookies);
});
app.listen(5000);
