
const formCadastrese = document.querySelector('#form-cadastrese')
const btnCadastrase = document.querySelector('#btn-cadastrase')
const inputName = document.querySelector('#input-name')
const inputEmail = document.querySelector('#input-email')
const inputPass = document.querySelector('#input-pass')
const alert = document.querySelector('#alert')

btnCadastrase.addEventListener('click',async ()=>{
    const email = inputEmail.value
    const pass = inputPass.value
    const name = inputName.value
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email
        }),
        method:'POST'
    }
    if(email != '' && pass != '' && name != ''){
        const resposta = await fetch('http://localhost:3000/api/register/verify', config)
        const verify = await resposta.json()
        if(verify.status == "ok"){
            formCadastrese.submit()
        }else{
            alert.innerHTML = `
            <div class="icon">
                <img src="/img/icon-exclamacao.png" alt="">
            </div>
            <img src="/img/close.svg" class="close-icon" alt="">
            <div class="body">
                <p id="alert-menssagem">
                    Email já ultilizado
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