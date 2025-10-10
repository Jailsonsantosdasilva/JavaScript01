class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

const Carro1 = new Carro("Fiat", "uno", 2001);
const Carro2 = new Carro("HB20", "honda", 2015);

console.log(Carro1)
console.log(Carro2)