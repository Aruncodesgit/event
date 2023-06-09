const mongoose = require('mongoose'); 
var ObjectId = require('mongodb').ObjectID; 
const Contact = mongoose.model('Contact');
var ObjectId = require('mongodb').ObjectID; 


//post leaves
module.exports.contact = (req, res, next) => {
    var contact = new Contact();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.phone = req.body.phone;   
    contact.subject = req.body.subject;  
    contact.message = req.body.message;  
    contact.status = req.body.status;
    contact.save((err, doc) => {
        if (!err){
            res.send(doc);
        } 
        else {
            console.log(err)
        }
    });
}

module.exports.contactDetails = (req, res, next) => { 
    Contact.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error' + Json.stringfy(err, undefined, 2)); }
    }); 
}
  

module.exports.contactDelete = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id: ${req.params.id}`) 
        Contact.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) { res.send('Delted Successfully !'); }
        else { console.log('Error' + Json.stringfy(err, undefined, 2)); }
    })

}

module.exports.contactDetailsById = (req, res, next) => { 
    if(!ObjectId.isValid (req.params.id)) 
    return res.status(400).send(`No record found with given id: ${req.params.id}`)

    Contact.findById(req.params.id, (err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error' + Json.stringfy(err, undefined, 2)); }
    }); 
}



module.exports.updateStatus = async (req, res, next) => {

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(` No record found with given id : ${req.params.id}`);
	
    var updateStatus = { 
        status: req.body.status,  
    }; 

    Contact.findByIdAndUpdate(req.params.id, { $set: updateStatus }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); console.log(doc)}
        else { console.log('Error in update:' + JSON.stringfy(err, undefined, 2)); }
    });
}

