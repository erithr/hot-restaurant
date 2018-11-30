var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables= [

]


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTable.html"));
  });
app.post("/api/tables", function(req, res){
    const newReservation = req.body
console.log(newReservation);
    tables.push(newReservation);

    res.json(newReservation);

})



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  