function celular(){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("fazendo ligação...")
    }
}

const celular = new celular('asus', 5.5, 5000);
console.log(celular);