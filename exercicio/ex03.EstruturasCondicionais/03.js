const x =30;
const y = 10;

// if (x == y) {
//     console.log("x e igual a y")
// } else{
//     console.log("x não e igual a y")
// }

if (x < y) {
    console.log("x e menor do que ");
} else if (x > y){
    console.log("x e maior do y")
} else {
    console.log("x é igual a y")
}
// Comando Switch
const cor = "verde";

switch (cor) {
    case "vermeho":
        console.log("a cor e vermelho")
        break;
    case "verde":
        console.log("a cor e verde")
        break;
    case "azul":
        console.log("a cor e azul")
        break;
    default:
        console.log("nenhuma cor encontrada")
}
 
//Operador ternario
let numero = cor == "vermelho" ? 10:20;
console.log(numero);
