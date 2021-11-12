var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        if(xhr.status != 200){
            alert("Deu merda!");
            return;
        }
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente) {
            var pacienteTr = new PacienteTR(paciente);
            pacienteTr.adicionaPaciente();            
        });
    });

    xhr.send();
});
