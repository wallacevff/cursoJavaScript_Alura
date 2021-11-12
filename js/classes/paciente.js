class Paciente {
    nome;
    peso;
    altura;
    gordura;
    imc;
    mensagens;

    constructor(form) {
        this.mensagens = [];
        this.nome = form.nome.value;
        this.peso = form.peso.value;
        this.altura = form.altura.value;
        this.gordura = form.gordura.value;
        this.imc = this.valorImc(form.peso.value, form.altura.value);
        this.validarCampos();
    }
   

    calculaImc(peso, altura) {
        var imc = peso / (altura * altura);
        return imc;
    }

    valorImc(peso, altura) {
        var erroPeso = false;
        var erroAltura = false;

        if ((peso <= 0 || peso >= 1000) || isNaN(peso)) {
            erroPeso = true;
        }
        if ((altura <= 0 || altura >= 3) || isNaN(altura)) {
            erroAltura = true;
        }

        if (erroPeso && erroAltura) {
            return "Peso e altura inválidos";
        }
        else if (erroPeso) {
            return "Peso inválido";
        }
        else if (erroAltura) {
            return "Altura inválida";
        }
        else {
            return this.calculaImc(peso, altura).toFixed(2);
        }
    }
    validarCampos(){
        if (this.nome.length == 0) {
            this.mensagens.push("Nome inválido.");
        }
        if (this.peso <= 0 || this.peso >= 1000 || isNaN(this.peso)) {
            this.mensagens.push("Peso inválido.");
        }
        if (this.altura <= 0 || this.altura >= 3 || isNaN(this.altura)) {
            this.mensagens.push("Altura inválida.");
        }
        if (this.gordura < 1 || this.gordura > 100 || isNaN(this.gordura)) {
            this.mensagens.push("Gordura inválida.");
        }
    }
}
