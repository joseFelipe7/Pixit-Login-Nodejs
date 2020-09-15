const express =  require('express')
const route = express.Router()
const registerController = require('../controllers/registerController')


route.get('/', registerController.create);
route.post('/', registerController.store);

module.exports = route;
