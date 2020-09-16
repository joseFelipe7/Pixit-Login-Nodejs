const express = require('express')
const route = express.Router()
const loginController = require('../../controllers/loginController')

route.post('/verifiy',loginController.verify)

module.exports = route