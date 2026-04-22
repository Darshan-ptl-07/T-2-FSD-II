// Write an ExpressJS application that creates a login form containing fields for username and password along with a submit button. ...
// ...The form data should be sent to the server using the POST method. Implement an authentication middleware that checks whether the...
// ...entered username is "admin" and the password is "1234". If the credentials are correct, the application should display the message...
// ..."Login Successful". Otherwise, it should display "Invalid Credentials".

var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`<form action="/data" method="post">
              <input type="text" name="un"/>
              <input type="password" name="pass"/>
              <input type="submit"/>
              </form>`);
});
var auth = (req, res, next) => {
  if (req.body.un == "admin" && req.body.pass == "1234") {
    next();
  } else {
    res.send("Please Enter valid username & password");
  }
};
app.post("/data", auth, (req, res) => {
  res.send(`<h1>Welcome ${req.body.un}</h1>`);
});
app.listen(3006);
