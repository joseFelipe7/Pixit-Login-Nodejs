const express =  require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('register')
    return;
});

module.exports = route;
