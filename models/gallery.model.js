const mongoose = require('mongoose');

var gallerySchema = new mongoose.Schema({ 
    image : {
        type: String
    }, 
});

mongoose.model('Gallery', gallerySchema);