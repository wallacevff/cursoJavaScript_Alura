var titulo = document.querySelector("#titulo");
/*console.log(titulo);
console.log(titulo.textContent);

*/
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var imc = peso / (altura * altura);
console.log(imc);