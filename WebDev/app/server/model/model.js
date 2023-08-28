const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Email : {
        type : String,
        unqiue: true,
        required: true
    },
    Username : {
        type : String,
        unqiue: true,   
        required: true
    },
    Password: {
        type : String,
        required: true
    }
})

const UserCol = mongoose.model('users', schema);
 
module.exports = UserCol;