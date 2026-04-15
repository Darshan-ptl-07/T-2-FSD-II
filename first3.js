var express = require("express");
var app = express();

app.get("/user/:uid/branch/:Branch", (req, res) => {
    // res.send(req.params);
    res.write(JSON.stringify(req.params));
    res.write(JSON.stringify(req.query));
    res.send()
})
app.listen(7007)