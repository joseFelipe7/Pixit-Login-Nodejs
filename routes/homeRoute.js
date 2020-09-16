const express = require('express')
const route = express.Router()

const auth = require('../middleware/auth')

route.get('/home', auth.auth, (req,res)=>{
    res.send('home')
})

module.exports = route;