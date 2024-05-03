const logOut = document.getElementById('logOut')

if (localStorage.getItem('token') == null) {
    alert('vc precisa esta logado')
}

logOut.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/authentication/SignIn.html'
    localStorage.removeItem('token')
})

