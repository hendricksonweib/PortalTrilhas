const UserName = document.getElementById('UserName')
const UserEmail = document.getElementById('UserEmail')
const UserCPF = document.getElementById('UserCPF')
const UserTelefone = document.getElementById('UserTelefone')
const UserSenha = document.getElementById('UserSenha')
const UserSenhaConfirm = document.getElementById('UserSenhaConfirm')
const CadastrarButtom = document.getElementById('buttonEnviar')

CadastrarButtom.addEventListener('click', () => {
    let Usuario = UserName.value
    let EmailUsuario = UserEmail.value
    let CPFusuario = UserCPF.value
    let TelefoneUsuario = UserTelefone.value
    let SenhaUsuario = UserSenha.value
    let ConfirmUsuario = UserSenhaConfirm.value

    if (Usuario == "" || EmailUsuario == "" || CPFusuario == "" || TelefoneUsuario == "" || SenhaUsuario == "" || ConfirmUsuario == "") {
        alert('preecha todos os campos')
    } else if (SenhaUsuario != ConfirmUsuario) {
        alert('suas senhas estão incompativeis')
    } else alert('ok')
})