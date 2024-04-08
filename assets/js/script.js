/*
por Tag: getElementByTagName ()
por ID : getElementByID ()
por nome: getElementsByName()
por classe : getElementsByClassName()
por seletor : querySelector()
*/


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let proposta = document.querySelector('#proposta')
let nomeOk = false
let emailOk = false
let propostaOk = false

nome.style.width = '24%'
email.style.width = '24%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')


    if (email.value.indexOF('@') == -1 || email.value.indexOF('.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaProposta() {
    let txtProposta = document.querySelector('#txtProposta')

    if (proposta.value.length >= 150) {
        txtProposta.innerHTML = 'Máximo de 150 caracteres na proposta'
        txtProposta.style.color = 'red'
        txtProposta.style.display = 'block'
    } else {
        txtProposta.style.display = 'none'
        propostaOk = true
    }
}


function enviar() {

    if (nomeOk == true  && emailOk == true  && propostaOk == true ) {
        alert('Obrigado pela proposta, irei analisar e te dou o retorno asap!')
    } else {
        alert('Preencha a proposta corretamente antes do envio!')
    } 
}
