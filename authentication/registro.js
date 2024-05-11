const UserName = document.getElementById('UserName')
const UserEmail = document.getElementById('UserEmail')
const UserCPF = document.getElementById('UserCPF')
const UserTelefone = document.getElementById('UserTelefone')
const UserSenha = document.getElementById('UserSenha')
const UserSenhaConfirm = document.getElementById('UserSenhaConfirm')
const CadastrarButtom = document.getElementById('buttonEnviar')
const alertErrorSpan = document.getElementById('alertErrorSpan')
const alertPassowordSpan = document.getElementById('alertPassowordSpan')

function formatarCPF(cpf) {
   
    cpf = cpf.replace(/\D/g, '');

    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return cpf;
}

CadastrarButtom.addEventListener('click', () => {
    let Usuario = UserName.value
    let EmailUsuario = UserEmail.value
    let CPFusuario = UserCPF.value
    let CPFformatado = formatarCPF(CPFusuario);
    let TelefoneUsuario = UserTelefone.value
    let SenhaUsuario = UserSenha.value
    let ConfirmUsuario = UserSenhaConfirm.value

    if (Usuario == "" || EmailUsuario == "" || CPFformatado == "" || TelefoneUsuario == "" || SenhaUsuario == "" || ConfirmUsuario == "") {
        alert('preecha todos os campos')
        alertErrorSpan.style.display = 'flex'

    } else if (SenhaUsuario != ConfirmUsuario) {
        alert('suas senhas estão incompativeis')
    } else {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nameCAD: Usuario,
                emailCAD: EmailUsuario,
                cpfCAD: CPFusuario,
                telCAD: TelefoneUsuario,
                senhaCAD: SenhaUsuario,
                confCAD: ConfirmUsuario
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        clear()
        window.location.href = 'http://127.0.0.1:5500/authentication/SignIn.html'
    }
})

const clear = () => {
    UserName.value = ""
    UserEmail.value = ""
    UserCPF.value = ""
    UserTelefone.value = ""
    UserSenha.value = ""
    UserSenhaConfirm.value = ""
}