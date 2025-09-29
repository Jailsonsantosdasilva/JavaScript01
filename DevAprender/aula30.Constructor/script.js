// Constructor function
// Criar um objeto postagem
// titulo,mensagem,autor,vizualizaçoes,comentario,esta ao vivo

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = visualizacoes = 0,
    this.comentario = comentario = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem)