import { nome } from "./nome.js";
import { soma, subtracao, adicao } from "./calculo.js"
import { Carror } from "./carro.js";

const eu = nome("Jailson", "Silva", 20)
const resultadoA = soma(10,10)
const resultadoB = subtracao(10,4)
const resultadoC = adicao(15,10)
const car = new Carror("uno", "corsa", 2005)

console.log(eu)
console.log(resultadoA)
console.log(resultadoB)
console.log(resultadoC)
console.log(car);
console.log(car.modelo);
console.log(car.marca);
console.log(car.ano);
