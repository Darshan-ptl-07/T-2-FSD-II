var express = require("express");
var app = express();
var api = require("./api");
app.use("/students", api);
app.listen(7002);
