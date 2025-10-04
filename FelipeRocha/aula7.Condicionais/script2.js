// pronucia È
// &&
// proncuia OU
// ||


// exemplo &&
const sum1 = 2 + 2;
const sum2 = 3 + 3;

if ((sum1 === 4) && (sum2 === 6)){
    console.log("sum1 igual a 4")
}else{
    console.log("nada encontrado")
}


if ((sum1 === 9) || (sum2 === 6)){
    console.log("sum1 são iguais")
}else{
    console.log("nada encontrado")
}

let number = sum1 === 2 ? 2 : 4;

if (sum1 === 2){
    number = 2;
}else{
    number = 4;
}

console.log(number);