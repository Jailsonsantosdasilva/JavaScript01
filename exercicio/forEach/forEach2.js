// let pessoa = ["joao", "maria", "jose"];

// pessoa.forEach((ValorAtual, indice, arrayCompleto)=>{
//     console.log(ValorAtual, indice, arrayCompleto )
// })


// let produtos = [
    
//     {
//         nomeProduto: "celular",
//         valorProduto: 1200.00,
//         porcentagemDesconto:0.20
//     },

//     {
//         nomeProduto: "Notebook",
//         valorProduto: 2500.00,
//         porcentagemDesconto:0.30
//     },

//     {
//         nomeProduto: "Televisão",
//         valorProduto: 3500.00,
//         porcentagemDesconto:0.35
//     }
// ]

// produtos.forEach((produtos)=>{
//     console.log(produtos.nomeProduto)
// })

let produtos = [
    
    {
        nomeProduto: "celular",
        valorProduto: 1200.00,
        porcentagemDesconto:0.20
    },

    {
        nomeProduto: "Notebook",
        valorProduto: 2500.00,
        porcentagemDesconto:0.30
    },

    {
        nomeProduto: "Televisão",
        valorProduto: 3500.00,
        porcentagemDesconto:0.35
    }
]

produtos.forEach((produtos)=>{
  let valorDesconto = produtos.valorProduto * produtos.porcentagemDesconto;

  let valorTotal = produtos.valorProduto - valorDesconto;

  produtos.valorTotalProduto = valorTotal

    console.log(produtos)
})