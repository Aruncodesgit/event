const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email : {
        type: String
    },
    phone : {
        type: String
    },
    subject: {
        type: String
    }, 
    message: {
        type: String
    } 
});

mongoose.model('Contact', contactSchema);