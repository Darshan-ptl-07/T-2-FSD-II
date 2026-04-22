// 7. You have been assigned to develop a user feedback form for a website...
// ...using Express.js and cookies.
// Implement the following requirements:
// 1. Create a form with the following fields:
// a. Name (input field)
// b. Email (input field)
// c. Message (textarea field)
// d. Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)
// 2. When the user submits the form, store their feedback information (name,...
// ...email, message, and rating) in a cookie named "feedback" that expires in 10 seconds.
// 3. Display a confirmation message to the user after successfully submitting the form &...
// ...Create a link to display the feedback details stored in the "feedback" cookie.
// 4. When the user clicks to the link, retrieve the feedback information from the cookie...
// ... and display it on the page also include a link on the feedback details page to...
// ... Logout.When the user clicks the link, user redirected to home page.
// 5. After, 10 seconds it will give message “No Feedback available” message to user.

var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());

app.use(express.static(__dirname, { index: "cp3.html" }));
app.post("/submit", (req, res) => {
  var { uname, eid, msg, rating } = req.body;
  var feedback = { uname, eid, msg, rating };
  res.cookie("feedback", feedback, { maxAge: 10000 });
  res.send(`
    <h1>Thank You</h1>
    <a href="/view">View feedBack</a>
    `);
});
app.get("/view", (req, res) => {
  var fb = req.cookies.feedback;
  if (fb) {
    res.send(`
        <h1>Thank You ${fb.uname}</h1>
        <h2>Your message ${fb.msg}</h2>
        <h2>Your Rating ${fb.rating}</h2>
        <a href="/">logout</a>
        `);
  } else {
    res.send(`
        <h1>No Feedback available</h1>
        <a href="/">logout</a>
        `);
  }
});
app.listen(5002);
