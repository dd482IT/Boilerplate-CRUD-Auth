const { Mongoose } = require('mongoose');
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
    // Incoming Password should be hasheh
    // Only hashes should be stored when registering
    UserCol.findOne({ Username: req.body.username}).then(user => {
        if(user){
            if(user.Password === req.body.password){
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

    exports.register = (req, res) =>{

    }
}
