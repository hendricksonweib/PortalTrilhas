const buttonLogin = document.getElementById('buttonLogin')
const imputEmail = document.getElementById('emailInput')
const imputPassoword = document.getElementById('passwordInput')

buttonLogin.addEventListener('click', (event) => {
    event.preventDefault()

    const emailUser = imputEmail.value
    const passwordUser = imputPassoword.value

    console.log(emailUser, passwordUser)
})