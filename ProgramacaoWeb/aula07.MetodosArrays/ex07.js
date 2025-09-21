 pessoa.shift(); //Remove o primeirto item do Array
 pessoa.unshift();//adiciona algo no primeiro item do Array
 delete pessoa[0];//Remove o  item, mas não a posição dele "undefined"
 pessoa.splice(1.0);//adiciona mais de um itens por vez
pessoa.sort();//deixa em orden alfabetica
pessoa.reverse();//deixa orden alfabetica reverso

 // exemplo de como concatena 2 matrizes
 const lista1 = ["exemplo", "exemplo"]
 const lista2 = ["exemplo2", "exemplo2"]

 const superLista = lista1.concat(lista2);
 
 document.getElementById("teste").innerHTML = superLista;