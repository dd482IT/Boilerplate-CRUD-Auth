const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb')

const connectDB = require('./server/database/connection');
const { connect } = require('http2');

dotenv.config({path :'config.env'})
const PORT = process.env.PORT || 8080

// Logs ƒ
app.use(morgan('tiny'));

//Connect to DB 
var con = connectDB();

// Parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// Set view engine
app.set("view engine", "ejs") // can change ejs to html, use path.resolve

// Load Assets
app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/img',express.static(path.resolve(__dirname, "assets/img")))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))


app.use('/',require('./server/routes/router'))

app.listen(PORT,()=> {console.log(`Server is running http://localhost:${PORT}`)})