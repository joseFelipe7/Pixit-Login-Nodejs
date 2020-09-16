const formLogin = document.querySelector('#form-login')
const btnLogar = document.querySelector('#btn-logar')
const inputEmail = document.querySelector('#input-email')
const inputPass = document.querySelector('#input-pass')
const alert = document.querySelector('#alert')

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
    if(email != '' && pass != ''){
        const resposta = await fetch('http://localhost:3000/api/login/verifiy', config)
        const verify = await resposta.json()
        if(verify.found){
            formLogin.submit()
        }else{
            alert.innerHTML = `
            <div class="icon">
                <img src="/img/icon-exclamacao.png" alt="">
            </div>
            <img src="/img/close.svg" class="close-icon" alt="">
            <div class="body">
                <p id="alert-menssagem">
                    Email ou senha incorretos
                </p>
            </div>
            `
            alert.classList.add('active')
            alert.style.opacity = '1'
            setTimeout(()=>{
                alert.style.opacity = '0'
            },4000)
            setTimeout(()=>{
                alert.classList.add('active')
            },5000)
        }
    }else{
        alert.innerHTML = `
            <div class="icon">
                <img src="/img/icon-exclamacao.png" alt="">
            </div>
            <img src="/img/close.svg" class="close-icon" alt="">
            <div class="body">
                <p id="alert-menssagem">
                    Preencha os campos para continuar
                </p>
            </div>
        `
        alert.classList.add('active')
        alert.style.opacity = '1'
        setTimeout(()=>{
            alert.style.opacity = '0'
        },4000)
        setTimeout(()=>{
            alert.classList.add('active')
        },5000)
    }
})

//formLogin.preventDefault()