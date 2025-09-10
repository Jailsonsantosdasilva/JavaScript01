const objs1 = document.querySelectorAll("div");
const objs2 = [...document.querySelectorAll("div")];

objs2.forEach(Element =>{
    Element.innerHTML= "curso"
})

console.log(objs1.forEach)
console.log(objs2)