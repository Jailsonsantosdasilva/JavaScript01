const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 1
    if(soma === 2){
        resolver("tudo certo")
    } else {
        reject("Deu Ruim")
    }
})

console.log('esperando promise...')

umaPromessa.then((resultado)=>{
    console.log(`Valor do then: ${resultado}`)
}).catch((erro)=>{
    console.log(`Valor do catch: ${erro}`)
}).finally(()=>{
    console.log(`independe do resoltado eu sempre estarei aqui`)
})