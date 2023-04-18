const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    },
    lastname: { 
        type : String,
        required: true
    },
    password: {
        type : String,
        required: true
    },
    email: {
        type : String,
        required: true
    }
})

const Userdb = mongoose.model('user', schema);

module.exports = Userdb;