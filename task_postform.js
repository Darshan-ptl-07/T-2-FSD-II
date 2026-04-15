var express = require("express");
var app = express()

app.use(express.urlencoded())
app.get("/", (req, res) => {
    res.send(`<form action="/data" method="post">
    <input name="un"/>
    <input type="password" name="Pass"/>
    <input type="submit"/>
    </form>
    `);
})
app.post("/data", (req, res) => {
    res.send(`<h1>Welcome ${req.body.un}!</h1>
        <h2>Password ${req.body.Pass}!</h2>
    `)
})
app.listen(7002)