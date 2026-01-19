const lexical = 'oi lexico'

const safe = secret => ({

    getSecret: () => secret

})

const privadoDados = 'Dado privado'
const obj = safe(privadoDados)

console.log(obj.getSecret())