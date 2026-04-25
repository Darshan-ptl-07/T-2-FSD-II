// Write express js script to perform following tasks.
// ==> Use concept of the middleware and you can use any of http methods(get/post).
// 1.	Create one html file which contains one text field for name, email field and checkbox for subscription. Html file will...
//      ...be loaded on home page. Email and name fields are required fields.
// 2.	On login page welcome user and email id data should be printed.
//      a. If user checked the subscription then “Thank you for the subscription” message will be printed and “logout” link...
//         ...will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page.
//      b. If user has not opted for the subscription then “You can subscribe to get daily updates” message will be printed and...
//         ...“subscribe” link will be displayed under the message.
//      c. If user clicks subscribe link then he/she will be redirected to the subscription page. In this page “Thank you for...
//         ...the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks...
//         ...logout link then he/she will be redirected to the home page.

var express = require("express");
var app = express();
var session = require("express-session");

app.use(express.urlencoded());

// app.use(session({ secret: "Mickey", cookie: { maxAge: 1500 }, name: "login" }));
app.use(express.static(__dirname, { index: "s4.html" }));

// app.post("/subscribed", (req, res) => {
//   req.session.uname = req.body.uname;
//   req.session.email = req.body.email;
//   req.session.subscribe = req.body.subscribe;
// });

var newdata = (req, res, next) => {
  res.type("text/html");
  res.write(`
        <h1> ${req.body.uname}</h1>
        <h2>Your E-mail ${req.body.email}</h2>
        `);
  next();
};

app.post("/login", newdata, (req, res) => {
  if (req.body.subscribe === "on") {
    res.write(`
            <h3>Thank You for your Subscription</h3>
            <a href="/">logout</a>
            `);
  } else {
    res.write(`<h3>you can Subscribe</h3><a href="/subscribe">subscribe</a>`);
  }
  res.send();
});

app.get("/subscribe", (req, res) => {
  res.send(`
        <h3>Thank You for your Subscription</h3>
        <a href="/">logout</a>
        `);
});
app.listen(6003);
