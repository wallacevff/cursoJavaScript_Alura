var titulo = document.querySelector("#titulo");
/*console.log(titulo);
console.log(titulo.textContent);

*/
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function (paciente, i) {
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    var mensagem = "";

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso Inválido");
        pesoEhValido = false;
        mensagem += "Peso inválido ";
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaEhValida = false;
        mensagem += "Altura inválida";
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        imc = imc.toFixed(2);
    }
    else {
        imc = mensagem;
    }


    var imcpaciente = paciente.querySelector(".info-imc");
    imcpaciente.textContent = imc;
});

//console.log(imcpaciente);