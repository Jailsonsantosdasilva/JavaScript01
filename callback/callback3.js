// exemplo de callback
// função que faz uma pizza 

// function fazerPizza(sabor, callback){

//     console.log(`fazendo uma pizza de ${sabor}`)

//     setTimeout(() => {
//         callback()
//     }, 1500)

// }

// function pizzarPronta() {
//     console.log("pizzar pronta")
// }

// fazerPizza("calabresa", pizzarPronta)


function carrPag(callback){
    console.log("carregando pagina...")

    setTimeout(() => {
        callback()
    }, 2000)
}

function paginaCarr(){
    console.log("pagina carregada com sucesso!")
}

carrPag(paginaCarr)