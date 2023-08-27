const { Mongoose } = require('mongoose');
const { bcrypt } = require('bcrypt');
const connectDB = require('../database/connection');
var UserCol = require('../model/model');

    exports.login = (req, res) =>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
        return;
    }

    if(!req.body.username){
        res.status(400).send({ message : "Username can not be empty!"});
        return;
    }

    if(!req.body.password){
        res.status(400).send({ message : "Password can not be empty!"});
        return;
    }
    // Retrieve Document 
    // Incoming Password should be hashed
    // Only hashes should be stored when registering
    UserCol.findOne({ Username: req.body.username}).then(user => {
        if(user){
            if(user.Password === req.body.password){
                /*
                    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
                    // result == true
                    }); 
                    https://www.npmjs.com/package/bcrypt
                */
                res.render('dashboard');
            } else {
                res.status(500).send({message: err.message || "Password does not match" })
            }
        } else {
            res.status(500).send({message: err.message || "User not found" })
        }
    }).catch(err=>{
        res.status(500).send({message: err.message || "Error occured" })
    })
}

exports.register = (req, res) =>{
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
    } 
    
    if(!req.body.username){
        res.status(400).send({ message : "Username can not be empty!"});
        return;
    }

    if(!req.body.password){
        res.status(400).send({ message : "Password can not be empty!"});
        return;
    }
    // Check if User Exists 
    UserCol.findOne({ Username: req.body.username}).then(user => {
        if(user){
            res.status(500).send({message: err.message || "User already exists" })
            return;
        } 
    }).catch(err=>{
        res.status(500).send({message: err.message || "Error occured" })
    })

    const password = req.body.password; 
    const username = req.body.username; 
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Create user here.
            UserCol.create({ Username: username, Password: hash})
        });
    });


    // Hash Password 
    // Create User Document in database
    

    
}
