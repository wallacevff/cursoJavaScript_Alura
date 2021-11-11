var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Declaração da classe paciente e suas funções



//Função que retorna um objeto paciente sem declarar a classe
function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    /*
   var paciente = new Paciente();
       paciente.nome = form.nome.value;
       paciente.peso = form.peso.value;
       paciente.altura = form.altura.value;
       paciente.gordura = form.gordura.value;
  
       var paciente = new Paciente(
           form.nome.value,
           form.peso.value,
           form.altura.value,
           form.gordura.value
       );
    */
    return paciente;
}

botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = new Paciente(form);
    var pacienteTr = new PacienteTR(paciente);
    pacienteTr.adicionaPaciente();
    form.reset();

});