// write a script to meet following requirements:
// • Create index.html file page which contains form(username,password,login button). and open it on localhost.
// • After clicking submit button, it should jump on “savesession” page. Store username and password in session.
// • After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link here.
// • Jump on delete session page after clicking LOGOUT link.
// • Destroy the session on this page and redirect to index.html page.

var express = require("express");
var app = express();
var session = require("express-session");
var cp = require("cookie-parser");
const e = require("express");
app.use(cp());
app.use(express.urlencoded());

app.use(session({ secret: "NAS", cookie: { maxAge: 1500 }, name: "login" }));
app.use(express.static(__dirname, { index: "s2.html" }));

app.post("/savesession", (req, res) => {
  req.session.uname = req.body.uname;
  req.session.pass = req.body.pass;
  res.redirect("fetchsession");
});

app.get("/fetchsession", (req, res) => {
  res.send(`
        <h1>Welcome ${req.session.uname}</h1>
        <a href="/deletesession">logout</a>
        `);
});

app.get("/deletesession", (req, res) => {
  req.session.destroy();
  res.redirect("/");

  //   extra session
  //   if (e) {
  //     res.send(e);
  //   } else {
  //     res.clearCookie("login");
  //     res.send("Destroyed");
  //   }
});

app.listen(6001);
