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

//console.log(imcpaciente);

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
    alert("Olá eu fui clicado");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;


    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = 0;

    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");    
    imcTd.classList.add("info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    pacienteTr.classList.add("paciente");
    
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr);


    calculaImc();

});
calculaImc();