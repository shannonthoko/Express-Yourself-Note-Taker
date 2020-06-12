// Dependencies

const express = require("express");
//shipped module
const path = require("path");

var notes = [

 
];

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


  app.get("/notes.html", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });  



  //api routes

  app.get("/api/notes", function(req, res) {
    return res.json(notes);
  
  });


  app.post("/api/notes", function(req, res) {

    let newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
  });


//DELETE




// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:3000/ " + PORT);
  });


