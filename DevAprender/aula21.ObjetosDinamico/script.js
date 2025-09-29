// javascript - Natureza Dinâmica de Objetos
const mouse = {
    cor: 'red',
    marca: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function (){
    console.log("mudando DPI");
}
delete mouse.trocarDPI
console.log(mouse);