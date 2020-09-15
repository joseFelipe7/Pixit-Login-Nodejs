const bcrypt = require('bcrypt')

const { User } = require('../models');
module.exports = {
    create:(req,res)=>{
        res.render('register')
        return;
    },
    store:(req,res)=>{
        const {name, email, pass} = req.body;    
        User.create({
            name,
            email,
            password:bcrypt.hashSync(pass, 10)
        })
        res.render('register')
        return;
    }
}