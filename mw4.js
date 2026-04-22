// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit button using get method.
// 1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.
// 2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)

var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(``);
});
