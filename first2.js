var express = require("express");
var app = express();

data = [
    { "name": "X", "age": 20 },
    { "name": "Y", "age": 10 },
    { "name": "Z", "age": 15 },
]

app.get("/des", (req, res) => {
    var sort = [...data].sort((a, b) => b.age - a.age)
    res.json(sort)
})

app.get("/table-des", (req, res) => {
    var sort = [...data].sort((a, b) => b.age - a.age)
    res.write(`<table border="1"><tr><th>Name</th><th>age</th></tr>`)
    for (i of sort) {
        res.write(`<tr><td>${i.name}</td>
            <td>${i.age}</td></tr>`)
    }
    res.write(`</table>`)
    res.send()
})
app.listen(3003, "localhost", 100, () => { console.log("Senier Started.") })