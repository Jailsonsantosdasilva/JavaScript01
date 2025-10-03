let numero = [1, 2, 3, 4, 5];

let numeros = numero.map(function(n){
    return n * 2;
})

const ages = [8, 13, 27, 30, 22, 40];

// let agesPares = ages.filter(function(ages){
//     return ages % 2 === 0;
// });

const somaages = ages.reduce(function(ages, accumulator){
    return accumulator + ages;
},0)

console.log(somaages)