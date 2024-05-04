const logOutbtn = document.getElementById('logOut')
const nameUserElements = document.getElementById('nameUser')


let userLogado = JSON.parse(localStorage.getItem('userLogado'))

nameUserElements.innerText = userLogado.nome

if (localStorage.getItem('token') == null) {
    alert('vc precisa esta logado')
}

logOutbtn.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/authentication/SignIn.html'
    localStorage.removeItem('token')
})

