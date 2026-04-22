// merge file => "cp2.html & cp2.js"
var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());

app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "cp2.html" })); // html file connect-url
app.post("/next", (req, res) => {
  res.cookie("fn", req.body.fn);
  res.cookie("ln", req.body.ln);
  res.cookie("pass", req.body.pass);
  res.redirect("/admin");
});
app.get("/admin", (req, res) => {
  res.clearCookie("ln");
  res.send(`<h1>Welcome ${req.cookies.fn} ${req.cookies.ln}!</h1>
    <h2>Your Password is ${req.cookies.pass}</h2>
    `);
});
app.listen(5001);
