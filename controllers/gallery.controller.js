const mongoose = require('mongoose'); 
  
const Gallery = mongoose.model('Gallery');
var ObjectId = require('mongodb').ObjectID; 
 
module.exports.gallery = (req, res, next) => {
    var gallery = new Gallery(); 
    gallery.image = req.body.image = 'http://localhost:3000/uploads/' + req.file.filename
    
    gallery.save((err, doc) => {
        if (!err){
            res.send(doc);
        } 
        else {
            console.log(err)
        }
    });
    Gallery.create(gallery.image, function (err, success) {
       
    });
}

module.exports.galleryDetails = (req, res, next) => { 
    Gallery.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error' + Json.stringfy(err, undefined, 2)); }
    }); 
}
  
module.exports.galleryDelete = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id: ${req.params.id}`)

        Service.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) { res.send('Delted Successfully !'); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    })

}

 