// Objeto carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
// converteu para texto JSON
let texto = JSON.stringify(carro)
// colocou o texto no nosso HTML
document.getElementById("area").innerHTML = texto
// converteu texto em Objeto
let obj = JSON.parse(texto)
// pegamos o valor desse objeto
console.log(obj.modelo)