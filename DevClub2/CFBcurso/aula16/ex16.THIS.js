function aluno(nome, nota){
    this.nome=nome
    this.nota=nota

    this.dados_anonimo=function(){
        setTimeout(function(){
            this.nome="j"
            this.nota=20
            console.log(this.nome)

            console.log(this.nota)
        },2000)
    }
}

const all = new aluno("jj", 999)  
all.dados_anonimo()