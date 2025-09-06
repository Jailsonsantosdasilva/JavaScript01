const p1 = [
    {nome:'luna', age:20,},
    {nome:'luca', age:23,},
    {nome:'leo', age:13,}
]

p1.forEach(function(item, index, array){
    if(item.age < 18){
        console.log(`o cliente ${item.age}, posicao ${index} e menor de idade`)
    }
});