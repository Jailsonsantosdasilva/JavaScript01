const pessoa = {
    nome:"pedro",
    sobrenome:"Silva",
    idade:18,
    passaTempos:["musica", "filmes", "esportes"],
    endereco:{
        rua:"Avenida dos Craves",
        cidade:"vitoria",
        estado:"ES",
    }
}

console.log(`Seu nome e ${pessoa.nome} e seu Sobrenome e ${pessoa.sobrenome} sua idade e ${pessoa.idade} e voce mora em ${pessoa.endereco.estado} seu passa tempo favorito e assitir ${pessoa.passaTempos[1]}`)

// Definir uma nova propriedade
pessoa.email = "pedro@gmail.com";
console.log(pessoa)

const tarefa = [
        {
            id:1,
            texto:"tirar o lixo",
            completo:false,
        },

        {
            id:2,
            texto:"Varrer a casa",
            completo:true,
        },

        {
            id:3,
            texto:"lavar o carro",
            completo:false,
        }
]
// Acessar uma propriedade de um elemento especifico
console.log(tarefa[1].texto)
// Formata um objeto em formato JSON
console.log(JSON.stringify(tarefa));
console.log(JSON.stringify(pessoa));