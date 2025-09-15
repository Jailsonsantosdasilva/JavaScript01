// criar um elemento <li> no texto
// cria o no do texto

// var elemento = document.createElement('li')
// var texto = document.createTextNode('item da lista adicionado')
// elemento.appendChild(texto);

// recuperando o elemento lista e anexando o elemento <li> no final da lista

// var lista = document.getElementsByTagName('ul')[0];

// lista.appendChild(elemento);

// insertBefore
var lista = document.getElementsByTagName('ul')[0];
var itens = lista.getElementsByTagName('li');

// criando o elemento
var elemento = document.createElement('li')
elemento.textContent = 'outros itens';

// inserido valor em posicao especifica
lista.insertBefore(elemento, itens[1]);

// removerchild
lista.removeChild(itens[2]);