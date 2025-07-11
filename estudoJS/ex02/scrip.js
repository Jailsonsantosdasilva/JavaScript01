/*Arquivos JS aula 04 Arrays*/ 
let produtos = ['arroz', 'feijao', 'leite']
var codigos = Array(10, 20 ,30)
let meses = ['jan', 'fev', 'mar', 'abr']

//  ADICIONAR no final push = empurre
produtos.push('Açucar')
codigos.push(40, 50, 60, 70)
meses.push('mai', 'jun', 'agr', '07')

// REMOVE do final pop = estouro
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'maça')

// REMOVER do inicio shift
produtos.shift()