function soma(n1,n2){
    return n1+n2
}


console.log(soma(5,5))

function soam2(...valores){
    let tem = valores.length;
    let res = 0;
    for(let i=0;i<tem;i++){
        res=valores[i]
    }
    return res
}

console.log(soam2(10,5,2,8,15))