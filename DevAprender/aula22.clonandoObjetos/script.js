const celular = {
    marcaCelular: 'asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log("fazendo ligação...")
    }
}

const novoObjeto = Object.assign({},celular);
console.log(novoObjeto)