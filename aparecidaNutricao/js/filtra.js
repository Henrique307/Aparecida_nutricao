var inputDePesquisa = document.querySelector('#pesquisa-tabela')

inputDePesquisa.addEventListener('input',function(){
    var pacientes = document.querySelectorAll('.paciente')


    if(this.value.length > 0){

        for(var i = 0; i < pacientes.length;i++){
            var paciente = pacientes[i]
            var nomeDoPaciente = paciente.querySelector('.info-nome').textContent
            var expressao = new RegExp(this.value,"i")
    
            if (!expressao.test(nomeDoPaciente)){
                paciente.classList.add('invisivel')
            }
        }
    }else{
        for(var i = 0; i < pacientes.length;i++){
            var paciente = pacientes[i]
            paciente.classList.remove('invisivel')
        }

    }

})