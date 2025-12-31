let numero = [2, 3, 4, 9, 12];

numero.forEach((valor, indice, array)=>{
    array[indice] = valor * 3;


})

numero.forEach(valor =>{
    console.log(valor)
})