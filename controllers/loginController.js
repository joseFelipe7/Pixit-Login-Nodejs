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
            res.redirect('/login')
        }
        
    },
    verify:async (req,res)=>{
        const {email, pass} = req.body
        const user = await User.findOne({
            where:{
                email
            }
        })
        if(user){
            if(bcrypt.compareSync(pass, user.password) && !user){
                res.status(200).json({found:true, menssage:'Usúario encontrado'})
            }else{
                res.status(400).json({found:false, menssage:'Email ou senha invalidos'})
            }
        }else{
            res.status(400).json({found:false, menssage:'Email ou senha invalidos'})
        }
    }
}