const pessoa = ["jailson", "silva", 20, "aluno"];


pessoa.splice(2,0, "item add 1", "item add 2", "item add 3")

// console.log(pessoa)

// join - troca os separador do array

// pop - remove o ultimo item do array

// push - adiciona  novo item no array

// shift - remove o primeiro item do array

// unshift - adiciona o item no inicio do array

// delete - apaga um item pela valor na posição

// splice - adiciona item ('posição' 'elemento removido'  'valore para adicionar')








// para juntar varias matrizes em uma
//  usando o "CONCAT()"

const lista1 = [ "arroz", "feijão", "leite", "macarrão"];

const lista2 = ["suco", "refrigerante", "carner"];

const juntarLista = lista1.concat(lista2);

// console.log(juntarLista)





// aprenda a fatia uma matriz

// slice - fatia matrizes de um determinado valor

// sort - deixa o array em orden alfabetica

const jogadores = [
    "bir bir",
    "ribamar",
    "pele", 
    "maradona",
    "neymar",
    "CR7",
    "vampeta",
    "Jailson"
];

const jgdrOrdem = jogadores.sort();

const txt = ["f", "e", "d", "c","b","a"];

const txtordem = txt.sort()
txtordem.reverse()



const numeros = [
    20,
    45,
    89,
    120,
    500
]

// para encontrar o menor numero do array

// filtrar as matrizes de um array

const maior20 = numeros.filter(filtragem);


function filtragem(value, indice, arr){
    return value > 89
}

console.log(maior20)