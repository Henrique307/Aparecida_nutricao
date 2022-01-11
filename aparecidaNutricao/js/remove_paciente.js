var tabela = document.querySelector('#tabela-pacientes')
var pacientes = document.querySelectorAll('.paciente')

tabela.addEventListener('dblclick', function(event){

    event.target.parentNode.classList.add('fadeOut')
    setTimeout(function(){event.target.parentNode.remove()},500)

})

// colore de vermelho o paciente

// pacientes.forEach(function(paciente){

//     console.log(paciente)

//     paciente.addEventListener('mouseenter', function(event){
//         event.target.classList.add('mouseIn')
//     })

//     paciente.addEventListener('mouseout', function(event){
//         event.target.parentNode.classList.remove('mouseIn')
//     })
    
// })



///var pacientes = document.querySelectorAll('.paciente')
// remove cada paciente mas nao remove adicionados pelo botão
// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick', function(){
//         this.remove(paciente)
//     })
// })

