const arr = [5,1,2]
const newArr = [3, ...arr]

function soma(a,b,c){
    return a+b+c
}

console.log(soma(...arr))