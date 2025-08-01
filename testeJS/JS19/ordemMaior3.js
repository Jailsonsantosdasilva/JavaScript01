const tarefas = [
    {
        id:1,
        texto: "estudar",
        completo:false,
    },
    {
        id:2,
        texto:"trabalha",
        completo:false,
    },
    {
        id:3,
        texto:"limpar a casa",
        completo:true,
    },
]

tarefas.forEach(function(tarefa, indice, MinhasTarefa){
    console.log(`${indice +1}; ${tarefas.text} `)
})
console.log(MinhasTarefa)
// ESTA DANDO ERRO
