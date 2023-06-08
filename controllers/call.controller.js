const mongoose = require('mongoose'); 
  
const CallBack = mongoose.model('CallBack');


//post leaves
module.exports.callback = (req, res, next) => {
    var callback = new CallBack();
    callback.name = req.body.name; 
    callback.phone = req.body.phone;   
    callback.service = req.body.service; 
    callback.status = req.body.status;
    callback.phone_plus_service = callback.phone + req.body.service; 
      
    callback.save((err, doc) => {
        if (!err){
            res.send(doc);
        } 
        else {
            if (err.code == 11000)
                res.status(422).send(['You have already sent call back for this is service !']);
            else 
                return next(err);
        }
    });
}

module.exports.callbackDetails = (req, res, next) => { 
    CallBack.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {console.log('Error' + Json.stringfy(err, undefined, 2)); }
    }); 
}
  