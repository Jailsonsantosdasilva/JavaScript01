// map
const numeros = [1, 4 ,5 ,9 , 14, 23];

// Dobra os numeros de array

// const doblaValor = numeros.map(function(elem){
//     return elem * 2
// })


// console.log(doblaValor)

// function dobraValor(elem){
//     return elem * 2
// }

// const total = numeros.map(dobraValor)

// console.log(total)

// Fahrenheit para Ceilsius
const Fahrenheit = [25, 85, 98, 45 ,50];

const paracelsius = Fahrenheit.map(function(far){
    return (far -32) * 5/9;
})

console.log(paracelsius)