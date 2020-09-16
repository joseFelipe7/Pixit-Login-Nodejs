const express = require('express')
const route = express.Router()
const registerController = require('../../controllers/registerController')

route.post('/verify',registerController.verify)

module.exports = route