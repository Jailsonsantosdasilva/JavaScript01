let promise = new Promise((resolve, reject) => {
    let resultado = false

    setInterval(() => {
        if(resultado){
            resolve("deu certo")
        }else{
            reject("deu errado")
        }
    }, 3000)
})

promise.then((retorno) => {
    console.log(retorno)
})

promise.catch((retorno) => {
    console.log(retorno)
})