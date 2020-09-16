const express = require('express')
const route = express.Router()
const forgoutPassController = require('../controllers/forgoutPassController')

route.get('/:hash', forgoutPassController.edit)
route.post('/', forgoutPassController.update)

module.exports = route