const express  = require('express');

const address_controller = require('../controller/address.js');

const routes = express.Router();

routes.get('/',address_controller.getAddress);
routes.post('/add',address_controller.createAddress);




module.exports = routes;