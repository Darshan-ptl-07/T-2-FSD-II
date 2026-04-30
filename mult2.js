var express = require("express");
var app = express();
var mult = require("multer");
app.use(express.static(__dirname, { index: "mult2.html" }));
var store = mult.diskStorage({
  destination: "my1",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
    console.log(file);
  },
});
var upload = mult({ storage: store });
app.post("/upload", upload.single("mydoc", 5), (req, res) => {
  var file = req.files;
  console.log(file);
  if (file) {
    res.type("text/html");
    for (f of file) {
      res.write(`<h1>File ${f.originalname} has been uploaded.</h1>`);
    }
  } else {
    res.write(`<h1>No File Uploaded<h1>`);
  }
  res.send();
});
app.listen(7010);
