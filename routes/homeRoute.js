const express = require('express')
const route = express.Router()
const auth = require('../middleware/auth')

route.get('/home', (req,res)=>{
    if(typeof req.session.userLogged != "undefined"){
        let user = req.session.userLogged
        res.render('home', { user })
    }else{
        res.render('home')
    }
})
route.get('/area-usuario', auth.auth , (req,res)=>{
    let user = req.session.userLogged
    res.render('areaUser', { user })
})
module.exports = route;