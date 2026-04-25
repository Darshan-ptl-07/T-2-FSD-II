// write a script to meet following requirements:
// • Create session.html file page which contains form(username,password,login button). and open it on localhost.
// • After clicking submit button, it should jump on “save” page. Store username and password in session.
// • After saving session, redirect to “fetchdata” page and read value. On this page check authentication of user. User name...
//   ...and password must be “admin” and “admin@123” respectively.
// • If this condition is true then display welcome admin and display logout link on this page(fetchdata).
// • By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message...
//   ...“Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be ...
//   ...redirected to the home page.
// • Else display “Please enter valid username and password” and login link on this page(fetchdata).

var express = require("express");
var app = express();
var session = require("express-session");
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());

app.use(session({ secret: "NAS", cookie: { maxAge: 1500 }, name: "login" }));
app.use(express.static(__dirname, { index: "s3.html" }));

app.post("/save", (req, res) => {
  req.session.uname = req.body.uname;
  req.session.pass = req.body.pass;
  res.redirect("fetchdata");
});

app.get("/fetchdata", (req, res) => {
  if (req.session.uname == "admin" && req.session.pass == "admin@123") {
    res.send(`
            <h1>Welcome ${req.session.uname}</h1>
            <a href="/destroy">logout</a>
            `);
  } else {
    res.send(`<h1>Please enter valid username & password</h1>
        Login Again:<a href="/">login</a>`);
  }
});

app.get("/destroy", (req, res) => {
  req.session.destroy();
  res.send(
    `<h1>Session destroyed</h1>
    <a href="/">login</a>`
  );
});

app.listen(6002);
