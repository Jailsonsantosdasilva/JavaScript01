const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas);

    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 70) return 'C';
    if(media < 89) return 'B';
    return 'A'
}

function calcularMedia(array){
    let soma = 0;
    for(let nota of array){
        soma += nota;
    }
    return media = soma/(array.length);
}