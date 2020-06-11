// Dependencies

var express = require("express");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


  app.get("/notes.html", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });  










// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:3000/ " + PORT);
  });


  