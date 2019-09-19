var Greeting = require('../Models/greetingModel');

exports.greeting_get = function(req, res) {
  Greeting.findOne(function (err, greeting){
   res.render('index',{title:'Hey', message: greeting.sentence});
  });
};

exports.greeting_post = function(req, res) {
 var newGreeting = new Greeting({sentence: req.body.greeting});
 newGreeting.save(function (err) {
   if (err){
     res.sendStatus(500);
   }
   else {
     res.send('Insert with success');
   }
 });
};
