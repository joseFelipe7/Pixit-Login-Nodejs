const btnRecovery = document.querySelector('#btn-recovery')
const inputRecovery = document.querySelector('#recovery-input')
const alertModal = document.querySelector('#alert-modal')

var interval = null
btnRecovery.addEventListener('click',async()=>{
    clearTimeout(interval);
    let email = inputRecovery.value
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email
        }),
        method:'POST'
    }
    if(email != ''){
        const resposta = await fetch('http://localhost:3000/api/forgout', config)
        const respostaJson = await resposta.json()
        if(respostaJson.status == "ok"){
            alertModal.innerHTML = `
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
            alertModal.classList.add('active')
            setTimeout(()=>{
                alertModal.classList.remove('active')
            },7000)
        }else{
            alertModal.innerHTML = `<button type="button" class="close-modal" id="close-modal-alert"><span aria-hidden="true">&times;</span></button><p>Um email foi enviado para ${email} acesse seu email para recuperar senha </p>`
            alertModal.classList.add('active')
            interval = setTimeout(()=>{
                alertModal.classList.remove('active')
            },7000)
        }
    }else{
        alertModal.innerHTML = `<button type="button" class="close-modal" id="close-modal-alert"><span aria-hidden="true">&times;</span></button><p>Preencha o campo com um email valido! </p>`
        alertModal.classList.add('active')
        interval = setTimeout(()=>{
            alertModal.classList.remove('active')
        },7000)
    }
    let closeAlertModal = document.querySelector('#close-modal-alert')

    closeAlertModal.addEventListener('click',()=>{
        alertModal.classList.remove('active')
        clearTimeout(interval);
    })
})