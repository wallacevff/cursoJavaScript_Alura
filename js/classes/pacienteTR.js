class PacienteTR {
    pacienteTr;
    nomeTd;
    pesoTd;
    alturaTd;
    gorduraTd;
    imcTd;

    constructor(paciente) {           
        this.montaTr(paciente, "paciente");  
    }

    adicionaPaciente(){
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(this.pacienteTr);
    }

    montaTd(dado, classe){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }

    montaTodosOsTd(paciente){
        this.nomeTd = this.montaTd(paciente.nome, "info-nome");
        this.pesoTd = this.montaTd(paciente.peso, "info-peso");
        this.alturaTd = this.montaTd(paciente.altura, "info-altura");
        this.gorduraTd = this.montaTd(paciente.gordura, "info-gordura");
        this.imcTd = this.montaTd(paciente.imc, "info-imc");     
    }

    montaTr(paciente, classe){
        this.pacienteTr = document.createElement("tr");
        this.montaTodosOsTd(paciente)
        this.pacienteTr.appendChild(this.nomeTd);
        this.pacienteTr.appendChild(this.pesoTd);
        this.pacienteTr.appendChild(this.alturaTd);
        this.pacienteTr.appendChild(this.gorduraTd);
        this.pacienteTr.appendChild(this.imcTd);
        this.pacienteTr.classList.add(classe);

        if(isNaN(paciente.imc)){
            this.pacienteTr.classList.add("paciente-invalido");
        }

    }

}