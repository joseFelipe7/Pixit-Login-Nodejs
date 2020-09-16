const { User, Token } = require('../models')
const bcrypt = require('bcrypt')

const emailConfig = require("../config/email");

            
module.exports = {
    store:async (req,res)=>{
        const { email } = req.body
        const user = await User.findOne({
            where:{
                email:email
            }
        })
        if(user){
            let hash = bcrypt.hashSync((Date.now().toString()), 10);
            //retira os '/' do hash gerado...
            hash = hash.replace(/\//g, "-");
            const token = await Token.create({
                hash:hash,
                use:false, 
                fk_user:user.id
            })
            let envioEmail = {
                from:'pixit.teste@gmail.com',
                to: email, //email do usuario
                subject: 'Alteração de Senha',
                text:'ola',
                html:`<p>clique <a href="http://localhost:3000/recuperar-senha/${hash}">aqui</a> para redefinir senha:</p>`
            }
            //envio do email
            emailConfig.sendMail(envioEmail, (error) => {
                if(error){
                    res.status(400).json({menssage:'Email não encontrado', status:"error", error})
                }else{
                    res.status(200).json({menssage:'Email de recuperação de senha enviado', status:"ok"})
                }
            })
            
            
        }else{
            res.status(400).json({menssage:'Email não encontrado', status:"error"})
        }
    },
    edit:async (req,res)=>{
        const { hash } = req.params
        const token = await Token.findOne({
            where:{
                hash
            },
            include:{
                model:User,
                as:'user'
            }
        })
        res.render('forgoutPass',{idUser:token.user.id, hash})
    },
    update:async (req,res)=>{
        const { pass, idUser, hash } = req.body
        const token = await Token.findOne({
            where:{
                hash,
                fk_user:idUser,
                use:0
            }
        })
        console.log(token)
        if(token){
            const user = await User.findByPk(idUser)
            user.password = bcrypt.hashSync(pass, 10)
            await user.save()
            token.use = true
            await token.save()
        }
        res.send('atualizou senha')
    }
}