botao.addEventListener('click', function(event){
    // previne o site de reiniciar quando o botão é clicado
    var podeAdicionar = true
    event.preventDefault()

    // redefine tudo ao normal

    mensagemErro.textContent = ''
    mensagemErro.classList.remove('mensagem-erro')

    labelAltura.textContent = 'Altura'
    labelAltura.classList.remove('mensagem-erro')
    
    labelPeso.textContent = 'Peso'
    labelPeso.classList.remove('mensagem-erro')
    
    // busca o formulário, cria a TR e coleta as informações no formulário
    
    var form = document.querySelector('#form-adiciona')
    var informacoes = pegaPaciente(form)

    if(informacoes.nome == '' || informacoes.peso == '' || informacoes.altura == '' || informacoes.gordura == ''){
        
        podeAdicionar = false
        mensagemErro.classList.add('mensagem-erro')
        mensagemErro.textContent = 'Um ou mais campos não foram preenchidos corretamente, tente novamente'

    }

    // cria, adiciona, e (se for imc, calcula) cada td uma por uma na tr

    novoPaciente = jasonEmTr(informacoes)
    novoPaciente = adicionaClasses(novoPaciente)


    // TENTATIVA DE DEIXAR A PRIMEIRA LETRA DO NOME EM MAIUSCULO
    // if(i == 0){
    //     var oNome = informacoes.nome
    //     oNome = oNome///.substring(0).toUpperCase()  tentando deixar a letra maiuscula automaticamente.
    //     novoElemento.textContent = oNome
    //     console.log(oNome)
    //     novoPaciente.appendChild(novoElemento)
    //     continue // ||||IMPORTANTE|||| continua para o próximo looping.
    // }

    //adiciona as classes


    // variaveis das informações adicionadas 

    var pesoInformado = novoPaciente.querySelector('.info-peso').textContent
    var alturaInformada = novoPaciente.querySelector('.info-altura').textContent

    // checa o peso e mostra a mensagem de erro se estiver errado

    Peso_E_Altura_check(pesoInformado, alturaInformada)

    if(!alturaValida){

        labelAltura.classList.add('mensagem-erro')
        labelAltura.textContent = 'Altura inválida'
        podeAdicionar = false

    }
    if(!pesoValido){

        labelPeso.classList.add('mensagem-erro')
        labelPeso.textContent = 'Peso inválido'
        podeAdicionar = false

    }

    // importa na tabela

    if ( podeAdicionar == true ){

        adicionaPacienteNaTabela(novoPaciente)
        form.reset()

    }

});