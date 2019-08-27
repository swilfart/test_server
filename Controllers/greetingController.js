var Greeting = require('../Models/greetingModel');

exports.greeting_get = function(req, res) {
  Greeting.findOne(function (err, greeting){
   res.render('index',{title:'Hey', message: greeting.sentence});
  });

};
