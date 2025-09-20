// Função de soma
function soma(valor1, valor2){
    return valor1 * valor2;
}

document.getElementById("texto").innerHTML = soma(3,5);

var total = soma(2, 5);
alert(total);

// Exemplo 2


// função de cotação do dolar
function RealparaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var res = RealparaDolar(valorReal, cotacao);

console.log(`O valor em Real é R$: ${res}`);

// Exemplo 3

function alertaHello(){
    alert("Olá pessoal");
}

// Exemplo 4

function paraCelsius(valorFahrenheit){
    return(5/9) * (valorFahrenheit-32);
}

var x = paraCelsius(77);

document.getElementById("Paragrafo").innerHTML = `A temperatura e de ${x} graus celsius`