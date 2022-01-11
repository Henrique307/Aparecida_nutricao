function calculaIMC(peso,altura){

    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(1)

}

function jasonEmTr(dados){

    var tr = document.createElement('tr')
    
    var informacoes = [nometd = document.createElement('td'), pesotd = document.createElement('td'), alturatd = document.createElement('td'), gorduratd = document.createElement('td'), imctd = document.createElement('td')]

    nometd.textContent = dados.nome
    pesotd.textContent = dados.peso
    alturatd.textContent = dados.altura
    gorduratd.textContent = dados.gordura
    imctd.textContent = dados.imc

    informacoes.forEach(function(dado){
        tr.appendChild(dado)
    })

    return tr

}

function adicionaClasses(paciente){

    paciente.classList.add('paciente')
    paciente.querySelectorAll('td')[0].classList.add('info-nome')
    paciente.querySelectorAll('td')[1].classList.add('info-peso')
    paciente.querySelectorAll('td')[2].classList.add('info-altura')
    paciente.querySelectorAll('td')[3].classList.add('info-gordura')
    paciente.querySelectorAll('td')[4].classList.add('info-imc')

    return paciente
}



function adicionaPacienteNaTabela(pacientePronto){
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacientePronto)
}

function pegaPaciente(informacoes){
    var paciente = {
        'nome': informacoes.nome.value,
        'peso': informacoes.peso.value,
        'altura': informacoes.altura.value,
        'gordura': informacoes.gordura.value,
        'imc': calculaIMC(informacoes.peso.value, informacoes.altura.value)
    }
    return paciente
}

function Peso_E_Altura_check(peso, altura){

    pesoValido = true
    alturaValida = true

    if (altura >= 3.00 || altura <= 0.30){
        alturaValida = false
    }

    if (peso >= 250 || peso <= 10){
        pesoValido = false
    }
    
    if (pesoValido == false && alturaValida == false) {
        return false
    }else{
        return true
    }
}