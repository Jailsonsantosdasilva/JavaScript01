function*  cores(){
    yield "vemelhor"
    yield "verde"
    yield "azul"
}

const itc=cores()
console.log(itc.next().value)

console.log(itc.next().value)

console.log(itc.next().value)

function* perguntas(){
    const nome = yield 'Qual seu nome'
    const esport = yield 'qual esport favorito'
    return `Seu nome ${nome} seu esport favorito e ${esport}`
}

const itp = perguntas()
console.log(itp.next('jj').value)

console.log(itp.next('correr').value)