function calcular() {
    distance = document.getElementById("inputDistancia").value
    tempo = document.getElementById("inputTempo").value
    valorCorrida = 2 + distance*1.4 + tempo*0.26
    botaoCalcular.innerHTML = `valor da corrida é: R$${valorCorrida.toFixed(2).replace(".", ",")}`
  
  }