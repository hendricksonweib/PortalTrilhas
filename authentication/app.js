const buttonLogin = document.getElementById('buttonLogin')
const imputEmail = document.getElementById('UserEmail')
const imputPassoword = document.getElementById('UserPassoword')


buttonLogin.addEventListener('click', () => {

    const emailUser = imputEmail.value
    const passwordUser = imputPassoword.value

    let listaUser = []
    let userValid = {
        nome: '',
        email: '',
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (emailUser == item.emailCAD && passwordUser == item.senhaCAD) {
            
            userValid = {
                nome: item.nameCAD,
                email: item.emailCAD,
                senha: item.senhaCAD
            }
        }
    })
 if(emailUser == userValid.email && passwordUser == userValid.senha){
    let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2) 
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado',JSON.stringify(userValid))
    window.location.href ='http://127.0.0.1:5500/page/Status.html'
 }else {
    alert('deu ruim')
 }
})