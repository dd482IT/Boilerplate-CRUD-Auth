const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller');


route.get('/', services.homeRoutes)
route.get('/register', services.registerRoute)
route.post('/register', controller.register)
route.get('/admin', services.adminRoutes)
route.post('/admin', controller.login);


module.exports = route; 

