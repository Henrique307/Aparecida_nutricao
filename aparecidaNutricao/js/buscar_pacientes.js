var botaoBusca = document.querySelector('#buscar_pacientes')
var mensagemDeErro = document.querySelector('.erro-de-busca')

botaoBusca.addEventListener('click', function(){
     var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){

            var resposta = xhr.responseText
            var pacientesJSON = JSON.parse(resposta)
            pacientesJSON.forEach(function(paciente){
                var pacienteTr = jasonEmTr(paciente)
                var pacientePronto = adicionaClasses(pacienteTr)
                adicionaPacienteNaTabela(pacientePronto)
            });

            mensagemDeErro.classList.add('invisivel')

        }else{
            mensagemDeErro.textContent = 'Achei nn mano'
            mensagemDeErro.classList.add('mensagem-erro')
        }

    })

    xhr.send()
})