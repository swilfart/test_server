var http = require('http');
var mongoose = require('mongoose');
var express = require('express');
var apiRouter = require('./Routes/Router');
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

//var standardGreeting = 'Hello World!';

//var greetingSchema = mongoose.Schema(
//	{
//	 	sentence: String
//	},
//	{
//		collection: 'Greetings'
//	}
//); 

//var Greeting= mongoose.model('Greeting', greetingSchema);

db = mongoose.connect(dbPath,{useNewUrlParser: true});

mongoose.connection.once('open', function() {
  console.log("DB connection OK"); 
});

//app.get('/api/', function(req,res){
//  res.send('API is running');
//});

//app.get('/api/greeting', function(req, res){
//  Greeting.findOne(function (err, greeting) {
//     res.send(greeting.sentence);
//  });
//});

app.use('/', apiRouter);

app.use(function(err, req, res, next){
  if (req.xhr) {
    res.send(500, 'Something went wrong!');
  }
  else {
    next(err);
  }
});

//app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))
