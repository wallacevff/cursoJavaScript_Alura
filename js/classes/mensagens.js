class Mensagem {
    ul;

    constructor() {
        this.ul = document.querySelector("#mensagem-erro");
        this.ul.innerHTML = "";
        //this.exibeMensagens(mensagens);
    }

    montaLi(mensagens) {
        var ul = this.ul;
        var li;
        mensagens.forEach(function (mensagem){
            li = document.createElement("li");
            li.textContent = mensagem;
            ul.appendChild(li);
        });
        this.ul = ul;        
    }

    verificaMensagens(mensagens) {
        if (mensagens.length > 0) {
            return true;
        }
        return false;
    }

    exibeMensagens(mensagens) {
        if (this.verificaMensagens(mensagens)) {
            this.montaLi(mensagens);
        }
    }
}