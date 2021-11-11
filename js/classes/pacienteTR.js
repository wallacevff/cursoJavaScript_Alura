class PacienteTR {
    pacienteTr;
    nomeTd;
    pesoTd;
    alturaTd;
    gorduraTd;
    imcTd;

    constructor(paciente) {
        this.pacienteTr = document.createElement("tr");
        this.nomeTd = document.createElement("td");
        this.pesoTd = document.createElement("td");
        this.alturaTd = document.createElement("td");
        this.gorduraTd = document.createElement("td");
        this.imcTd = document.createElement("td");

        this.nomeTd.textContent = paciente.nome;
        this.pesoTd.textContent = paciente.peso;
        this.alturaTd.textContent = paciente.altura;
        this.gorduraTd.textContent = paciente.gordura;
        this.imcTd.textContent = paciente.imc;

        this.nomeTd.classList.add("info-nome");
        this.pesoTd.classList.add("info-peso");
        this.alturaTd.classList.add("info-altura");
        this.gorduraTd.classList.add("info-gordura");
        this.imcTd.classList.add("info-imc");

        this.pacienteTr.appendChild(this.nomeTd);
        this.pacienteTr.appendChild(this.pesoTd);
        this.pacienteTr.appendChild(this.alturaTd);
        this.pacienteTr.appendChild(this.gorduraTd);
        this.pacienteTr.appendChild(this.imcTd);
        
        this.pacienteTr.classList.add("paciente");

        if(isNaN(paciente.imc)){
            this.pacienteTr.classList.add("paciente-invalido");
        }
    }

    adicionaPaciente(){
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(this.pacienteTr);
    }
}