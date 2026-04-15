var express = require("express");
var app = express();

student = { "name": "test", "age": 20 }
app.get("/j1", (req, res) => { res.send(student); })

app.get("/j2", (req, res) => { res.json(student) });

app.get("/j3", (req, res) => {
    res.write(student);
    res.send();
});
app.listen(3003, "localhost", 100, () => { console.log("senier Started.") })
