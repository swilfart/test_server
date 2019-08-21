var mongoose = require('mongoose');

var greetingSchema = mongoose.Schema(
        {
                sentence: String
        },
        {
                collection: 'Greetings'
        }
);

var Greeting= mongoose.model('Greeting', greetingSchema);

module.exports = Greeting;


