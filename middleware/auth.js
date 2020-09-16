const auth = (req,res,next)=>{   
    typeof(req.session.userLogged) != 'undefined' ? next() : res.redirect('/login')
}
module.exports = {auth};