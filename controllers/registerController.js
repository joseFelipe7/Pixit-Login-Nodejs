const bcrypt = require('bcrypt')

const { User } = require('../models');
module.exports = {
    create:(req,res)=>{
        res.render('register')
        return;
    },
    store:async (req,res)=>{
        const {name, email, pass} = req.body;    
        await User.create({
            name,
            email,
            password:bcrypt.hashSync(pass, 10)
        })
        res.render('register',{ cad:true })
        return;
    },
    verify:async(req,res)=>{
        const { email } = req.body
        const user = await User.findOne({
            where:{
                email
            }
        });
        !user ?
        res.status(200).json({menssage:'Email disponivel', status:"ok"}) : 
        res.status(400).json({menssage:'Email indisponivel', status:"error"})
    }
}