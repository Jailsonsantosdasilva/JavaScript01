const pessoa = {
    nome: "Jailson",
    sobrenome:"silva",
    idade: 20,
    hobbies: ["filmes", "jogar", "ler"],
};

// diminui os const e melhora o codigo
const {nome, sobrenome, hobbies} = pessoa;

console.log(nome);
console.log(sobrenome);
console.log(hobbies);

console.log(hobbies[1])

// adiciona nova propriedade no Objeto
pessoa.pet = "gato"

console.log(pessoa.pet)