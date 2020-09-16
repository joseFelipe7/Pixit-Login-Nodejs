const { User } = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
    create:(req,res)=>{
        res.render('login')
    },
    store:async (req,res)=>{
        const {email, pass} = req.body
        const user = await User.findOne({
            where:{
                email
            }
        })
        if(bcrypt.compareSync(pass, user.password)){
            req.session.userLogged = user
            res.redirect('/home')
        }else{
            console.log('não logou')
        }
        
    }
}