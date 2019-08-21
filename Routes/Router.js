let router = require('express').Router();
var Greeting = require('../Models/greetingModel');

router.get('/api/', function(req, res){
 res.send('API is running');
});

router.get('/api/greeting/', function(req, res){
 Greeting.findOne(function (err, greeting){
  res.send(greeting.sentence);
 });
});

module.exports = router;
