async function escreverInformacaoPais(paisDesejado){
   const infor = await fetch('https://restcountries.com/v3.1/name/' + paisDesejado)
    console.log(await infor.json());
}
 
escreverInformacaoPais("Argentina");


