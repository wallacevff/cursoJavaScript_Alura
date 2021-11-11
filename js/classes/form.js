class Form {
    f;

    constructor() {
        this.f = document.querySelector("#form-adiciona");
    }

    insere() {
        var paciente = new Paciente(this.f);
        var pacienteTr = new PacienteTR(paciente);
        var msg = new Mensagem();
        console.log(paciente.mensagens);
        if(paciente.mensagens.length > 0){
            msg.exibeMensagens(paciente.mensagens);
            this.f.reset();
            return;
        }
        msg.exibeMensagens(paciente.mensagens);
        pacienteTr.adicionaPaciente();
        this.f.reset();
    }
}





