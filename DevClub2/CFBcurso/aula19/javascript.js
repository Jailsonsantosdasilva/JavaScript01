const elem = [...document.querySelectorAll(".curso")];
const btn = document.querySelector("input");

elem.map((e)=>{
    e.addEventListener('click',(evt)=>{
        console.log(evt.target);
        evt.target.classList.toggle("selecionado");
    })
})

btn.addEventListener("click",(evt)=>{
    console.log(evt);
    const t = [...document.querySelectorAll(".selecionado")];
    const a = document.querySelector(".output");
    const b = document.querySelector(".input");
    t.map((el)=>{
        a.appendChild(el);
    })
    const c = [...a.childNodes];
    c.map((e)=>{
        console.log(e);
        if(e.classList.contains("selecionado") === false){
            b.appendChild(e);
        }
        console.log(e.classList.contains("selecionado"));
    })
})