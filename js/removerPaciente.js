var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event){
    var alvoEvento = event.target;
    var paiDoEvento = alvoEvento.parentNode;
    paiDoEvento.remove();
});
console.log(pacientes);
