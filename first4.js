var express = require("express");
var app = express();

app.use(express.urlencoded())
app.get("/", (req, res) => {
    res.send(`<form action="/calc" method="post">
        <input type="number" name="n1"/>
        <input type="number" name="n2"/>
        <select name="Formula">
            <option value="add">Addition</option>
            <option value="sub">Subtraction</option>
        </select>
        <input type="submit"/>
        </form>
    `)
})
app.post("/calc", (req, res) => {
    var n1 = parseInt(req.body.n1);
    var n2 = parseInt(req.body.n2);

    if (req.body.formula === "add") {
        res.send(`<h1>Addition of ${n1} and ${n2} is ${n1 + n2}</h1>`)
    }
    else {
        res.send(`<h1>Subtraction of ${n1} and ${n2} is ${n1 - n2}</h1>`)
    }
})
app.listen(7003)