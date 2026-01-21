function quandoChegarDeBomdia(){
    console.log("bom dia")
}

function executar(){
    quandoChegarDeBomdia()
}

executar(quandoChegarDeBomdia)


// exemplo 2

function apresentar(nome){
    console.log("ola," + nome)
}

function callback(callback){
    callback("Jailson")
}

callback(apresentar)