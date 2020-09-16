const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    // res.render()
    res.render('forgoutPass')
})
module.exports = route