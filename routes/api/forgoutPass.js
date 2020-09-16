const express = require('express')
const route = express.Router()
const forgoutController = require('../../controllers/forgoutPassController')

route.post('/',forgoutController.store)
module.exports = route