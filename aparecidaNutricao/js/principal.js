var botao = document.querySelector('#adicionar-paciente')
var pacientes = document.querySelectorAll(".paciente")

var mensagemErro = document.querySelector('.erro')
var labelPeso = document.querySelectorAll('section')[1].querySelector('form').querySelectorAll('.grupo')[1].querySelector('label')
var labelAltura = document.querySelectorAll('section')[1].querySelector('form').querySelectorAll('.grupo')[2].querySelector('label')

for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]
    
    var peso = paciente.querySelector('.info-peso').textContent
    var altura = paciente.querySelector('.info-altura').textContent    
    paciente.querySelector('.info-imc').textContent = calculaIMC(peso,altura)
    
}

// var nomes = ['carlos','natalia','wellington','flavia']

// nomes.forEach(function(nome){
//     console.log(nome)
// })