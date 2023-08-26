const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    UUID : {
        type : String,
        required: true
    },
    Username : {
        type : String,
        required: true
    },
    Password: {
        type : String,
        required: true
    }
})

const Userdb = mongoose.model('Users', schema);
 
module.exports = Userdb;