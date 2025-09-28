// criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'vingadores',
    ano: 2018,
    diretor: 'robin',
    personagem: 'thor'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof prop === 'string')
            console.log(prop,obj[prop])
}