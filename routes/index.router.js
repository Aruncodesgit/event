const express = require('express');
const router = express.Router();
const multer = require("multer"); 


const ctrlContact = require('../controllers/contact.controller'); 
const ctrlCall = require('../controllers/call.controller');
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {

        cb(null, `${Date.now()}_${file.originalname}`)
    }

})

const upload = multer({ storage: storage });

router.post('/contact', ctrlContact.contact); 
router.get('/contactDetails', ctrlContact.contactDetails);  
router.delete('/contact/:id', ctrlContact.contactDelete);
router.put('/contact/:id', ctrlContact.updateStatus);
router.get('/contactDetails/:id', ctrlContact.contactDetailsById);


router.post('/callback', ctrlCall.callback); 
router.get('/callbackDetails', ctrlCall.callbackDetails); 

module.exports = router;



