var http = require('http');
var mongoose = require('mongoose');
var express = require('express');
const app = express();
var db;

var config = {
 "USER":"user",
 "PASS":"user123",
 "HOST":"127.0.0.1",
 "PORT":"27017",
 "DATABASE":"test"
};

var dbPath  = "mongodb://"+config.USER + ":"+
    config.PASS + "@"+
    config.HOST + ":"+
    config.PORT + "/"+
    config.DATABASE;

var standardGreeting = 'Hello World!';

var greetingSchema = mongoose.Schema({
  sentence: String
}); 
var Greeting= mongoose.model('Greeting', greetingSchema);

db = mongoose.connect(dbPath);

mongoose.connection.once('open', function() {
  var greeting;
  Greeting.find( function(err, greetings){
   if( !greetings ){     
      greeting = new Greeting({ sentence: standardGreeting }); 
      greeting.save();
    } 
  }); 
});

app.get('/', function(req, res){
  Greeting.findOne(function (err, greeting) {
    res.send(greeting.sentence);
  });
});

app.use(function(err, req, res, next){
  if (req.xhr) {
    res.send(500, 'Something went wrong!');
  }
  else {
    next(err);
  }
});

app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))
