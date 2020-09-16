const formLogin = document.querySelector('#form-login')
const btnLogar = document.querySelector('#btn-logar')
const inputEmail = document.querySelector('#input-email')
const inputPass = document.querySelector('#input-pass')


btnLogar.addEventListener('click',async ()=>{
    const email = inputEmail.value
    const pass = inputPass.value
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email,
            pass
        }),
        method:'POST'
    }
    const resposta = await fetch('http://localhost:3000/api/login/verifiy', config)
    const verify = await resposta.json()
    if(verify.found){
        formLogin.submit()
    }else{
        console.log('email ou senha incorretos')
    }
    
})

//formLogin.preventDefault()