// create express app
var express = require("express");
var app = express();

// route handler

app.get("/", function(request, response){
  response.json({prop:"value"});
});

app.get("/london", function(req, res){
  res.send("london");
});
app.get("/turin", function(req, res){
  res.send("turin");
});

app.get("/new-?york", function(req, res){
  res.send("NYC");
});





//connection

app.listen(3000, function(){
  console.log("Listening to port 3000")
});


// -? -+ 
