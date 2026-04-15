var express = require("express");
var app = express()

app.get("/", (req, res) => {
    res.send(`<form action="/data" method="get">
    <input name="un"/>
    <input type="password" name="Pass"/>
    <input type="submit"/>
    </form>
    `);
})
app.get("/data", (req, res) => {
    res.send(`<h1>Welcome ${req.query.un}!</h1>
        <h2>Password ${req.query.Pass}!</h2>
    `)
})
app.listen(7001)