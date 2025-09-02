// Funçaõ void 
function DigaMeuNome(){
    const name = 'Jailson jj'
    console.log(name)
}

DigaMeuNome()

// Parãmetros

function DigaqulquerNome(nome){
    console.log(nome)
}

DigaqulquerNome("JairJair")


// Outro exemplo

function soma(numero1, numero2){
    const res = numero1 + numero2
    console.log(res)
}

soma(3,3)
soma(10,10)

// Função Return

function soma(numero1, numero2){
    const resultado = numero1 + numero2
    return resultado
}

const resultado = soma(2,2)
console.log(resultado)

// Arrow function

const DigaMeuNome2 = () =>{
   console.log("jj")
}
DigaMeuNome2()