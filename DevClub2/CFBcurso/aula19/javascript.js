const caixa1 = document.querySelector("caaixa1")
const caixa2 = document.querySelector("caaixa2")
const btn = document.querySelector("btn-copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    
    console.log(cursosSelecionados)
})