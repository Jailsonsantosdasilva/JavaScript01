// Filter

const numeroDuplo = [2, 3 ,4 ,5 ,4 ,12 , 19, 7 , 2 ,5];


const removeDuplo = numeroDuplo.filter((elem, index, arr)=> arr.indexOf(elem)==index)

console.log(removeDuplo)