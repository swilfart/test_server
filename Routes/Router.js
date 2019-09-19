let router = require('express').Router();
var Greeting = require('../Models/greetingModel');
var greeting_controller = require('../Controllers/greetingController');

router.get('/api/', function(req, res){
 res.send('API is running');
});

router.get('/api/greeting/', greeting_controller.greeting_get);

router.post('/api/greeting/', greeting_controller.greeting_post);

module.exports = router;
