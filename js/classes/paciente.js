class Paciente {
    nome;
    peso;
    altura;
    gordura;
    imc;

    constructor(form) {
        this.nome = form.nome.value;
        this.peso = form.peso.value;
        this.altura = form.altura.value;
        this.gordura = form.gordura.value;
        this.imc = this.valorImc(form.peso.value, form.altura.value);
    }

    calculaImc(peso, altura) {
        var imc = peso / (altura * altura);
        return imc;
    }

    valorImc(peso, altura) {
        var erroPeso = false;
        var erroAltura = false;

        if ((peso <= 0 || peso >= 1000) || isNaN(peso)) {
            console.log("Peso Inválido");
            erroPeso = true;
        }
        if (altura <= 0 || altura >= 3 || isNaN(altura)) {
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
}
