const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const InputCpf = document.getElementById('InputCpf')
const inputTelefone = document.getElementById('inputTelefone')
const inputEndereco = document.getElementById('inputEndereco')
const inputCidade = document.getElementById('inputCidade')
const buttonEnviar = document.getElementById('buttonEnviar')


buttonEnviar.addEventListener('click',()=>{
    const nameUser = inputName.value
    const emailUser = inputEmail.value
    const cpfUser = InputCpf.value
    const telefoneUser = inputTelefone.value
    const enderecoUser = inputEndereco.value
    const cidadeUser = inputCidade.value

    if( nameUser=='' || emailUser == ''|| cpfUser == "" ||telefoneUser ==""||enderecoUser==""||cidadeUser==""){
        alert('preencha todos os campos')
    } else {
       let ListaUser = JSON.parse(localStorage.getItem('ListaUser')||'[]')
       ListaUser.push(
        {
            name: nameUser,
            email: emailUser,
            cpf: cpfUser,
            telefone: telefoneUser,
            endereco: enderecoUser
        }
       )
    }
    console.table(nameUser,emailUser,cidadeUser,cpfUser,telefoneUser,enderecoUser)
})

const rejexUser = ()=>{

}
