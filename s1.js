var express = require("express");
var app = express();
var sess = require("express-session");
app.use(sess({ secret: "LJU123", resave: false, saveUninitialized: false }));

app.get("/", (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(`
            <h1> You Have Visited ${req.session.page_views} times</h1>
            `);
  } else {
    req.session.page_views = 1;
    res.send(`<h1>Welcome to My Website</h1>`);
  }
});
app.listen(5003);
