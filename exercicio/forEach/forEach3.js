let produtos = [
    {
        Nome: "feijao",
        valor:2.00
    },
    {
        Nome: "arroz",
        valor:4.00
    },
    {
        Nome: "macarrao",
        valor:1.50
    },
    {
        Nome: "farinha",
        valor:1.00
    }
]

produtos.forEach((valor, indice)=>{
    console.log(valor.Nome, indice)
})