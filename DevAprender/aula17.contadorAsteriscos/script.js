exibirastericos(10);

function exibirastericos(linhas){
    let padrao = '';
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}