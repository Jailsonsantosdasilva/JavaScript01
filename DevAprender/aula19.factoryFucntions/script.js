// javascript - factory funtionc (funções de fabrica)
function criarCelular(marcaCelular,tamanhotela,capacidadebateria){
    return{
        marcaCelular,
        tamanhotela,
        capacidadebateria,
        ligar() {
            console.log('faznedo ligação...')
        }
    }
}

const celular =  criarCelular('Xiaome', 6.0, 7000);
console.log(celular)
