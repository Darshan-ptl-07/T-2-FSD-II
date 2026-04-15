var express = require("express");
var app = express();

app.get("/about", (req, res) => {
    res.send("<h2 style='color:purple'>Express Example</h2>");
})
app.listen(3003, "localhost", 100, () => { console.log("senier Started.") }).
