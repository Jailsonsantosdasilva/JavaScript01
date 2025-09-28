function Mtaboada() {
    let numero = prompt("digite um numero");

    Ltaboada()

    numeroI = parseFloat(numero);

    let i = 1;

    while (i <= 20) {
        mensagem += `${numeroI} X ${i} = ${numeroI * i} <br>`;
        i++;
    }

    output.innerHTML = mensagem;
}

function Ltaboada(){
    mensagem = '';
    output.innerHTML = mensagem;
}

let output = document.getElementById("output");

let mensagem = '';