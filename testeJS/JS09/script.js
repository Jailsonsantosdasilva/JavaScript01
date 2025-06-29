

function calcular(){
  var vel = document.querySelector('input#ivel')
  var res = document.querySelector('div#res')
  var vel = Number(vel.value)
    res.innerHTML = `sua velocidade é de <p><strong>${vel} km/h</strong></p>`
    if(vel >= 60){
    res.innerHTML += `vocé foi <p><strong>MULTADO</strong></p> por exesso de velocidade`
    }
    res.innerHTML += `use sempre sinto de segurança`
}