function exibir(num){
    console.log("resultado: " + num)
}


function mutiplicasao(a,b, callback){
    let op = a * b;
    callback(op)
}

function soma (a,b, cb){
    let op = a + b;
cb(op)
}

soma(10, 10, exibir)
mutiplicasao(30,3, exibir)