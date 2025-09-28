// velocidade Máxima de até 70
// a cada 5km acima do limite vocé ganha 1 ponto
// Math.floor()
// caso pontos maior que 12 -> "Carteira Suspensa"
verificaVelocidade(130);

function verificaVelocidade(velocidade){
    const valorMaxima = 70;
    const kilometrosPontos = 5;
    if(velocidade <= valorMaxima)
        console.log('ok');
    else{
       const pontos = Math.floor(((velocidade - 70) / kilometrosPontos));
        if(pontos >= 12){
            console.log('carteira Suspensa')
        }else{
            console.log(`pontos, ${pontos}`)
        }

    }
}
