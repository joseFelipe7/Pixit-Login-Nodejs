const btnNewsenha = document.querySelector('#btn-newsenha')
const confirmpass = document.querySelector('#confirmpass')
const pass = document.querySelector('#pass')
const formnewpass = document.querySelector('#form-newpass')
const alert = document.querySelector('#alert')


btnNewsenha.addEventListener('click',()=>{
    let valpass = pass.value
    let valconfirmpass = confirmpass.value
    if(valpass == '' || valconfirmpass == ''){
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
    }else{
        if(valpass == valconfirmpass){
            formnewpass.submit()
        }else{
            alert.innerHTML = `
            <div class="icon">
                <img src="/img/icon-exclamacao.png" alt="">
            </div>
            <img src="/img/close.svg" class="close-icon" alt="">
            <div class="body">
                <p id="alert-menssagem">
                    As senhas digitadas estão diferentes
                </p>
            </div>`
            alert.classList.add('active')
            alert.style.opacity = '1'
            setTimeout(()=>{
                alert.style.opacity = '0'
            },4000)
            setTimeout(()=>{
                alert.classList.add('active')
            },5000)
        }
    }
})

