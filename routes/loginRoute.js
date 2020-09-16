const express =  require('express')
const route = express.Router()
const loginController = require('../controllers/loginController')

route.get('/', loginController.create)
route.post('/', loginController.store)

module.exports = route;
