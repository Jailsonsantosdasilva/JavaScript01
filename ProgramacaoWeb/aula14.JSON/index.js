

function buscarCEP(){
    let campoTexto = document.getElementById("CEP").value;

    const ajax = new XMLHttpRequest();
ajax.open('GET', `https://viacep.com.br/ws/${campoTexto}/json/`);
ajax.send();

ajax.onload = function(){
    document.getElementById("texto").innerHTML = this.responseText;
}
}