const express =  require('express')
const route = express.Router()
const loginController = require('../controllers/loginController')

route.get('/', loginController.create)
route.post('/', loginController.store)
route.get('/logout', loginController.logout)

module.exports = route;
