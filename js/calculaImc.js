var titulo = document.querySelector("#titulo");
/*console.log(titulo);
console.log(titulo.textContent);

*/

function validaImc(peso, altura) {
    var mensagem = "";
    var pesoEhValido = true;
    var alturaEhValida = true;
    var imc;
    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        mensagem += "Peso inválido ";
    }

    if (altura <= 0 || altura >= 3) {
        alturaEhValida = false;
        mensagem += "Altura inválida";
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        imc = imc.toFixed(2);
        return imc;
    }
    imc = mensagem;
    
    return imc;
}

titulo.textContent = "Aparecida Nutricionista";
function calculaImc() {
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(function (paciente, i) {
        var tdpeso = paciente.querySelector(".info-peso");
        var peso = tdpeso.textContent;

        var tdaltura = paciente.querySelector(".info-altura");
        var altura = tdaltura.textContent;

        var imc = validaImc(peso, altura);
        if(isNaN(imc)){
            paciente.classList.add("paciente-invalido");
        }
        var imcpaciente = paciente.querySelector(".info-imc");
        imcpaciente.textContent = imc;
    });
}



calculaImc();