const mongoose = require('mongoose');

var  callSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone : {
        type: Number
    },
    service: {
        type: String
    },
    phone_plus_service :{
        type: String,
        unique:true
    }
});

mongoose.model('CallBack', callSchema);