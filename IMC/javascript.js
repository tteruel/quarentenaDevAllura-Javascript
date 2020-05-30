function calcularIMC() {
    var Peso = document.getElementById("peso").value
    var Altura = document.getElementById("altura").value
    IMC = Peso / (Altura * Altura)
    results.innerHTML = 
      `<li>Peso: ${Peso} KG!</li>
       <li>Altura: ${Altura} !</li>
       <li>IMC: ${IMC.toFixed(1)}</li>
       <li>${printIMC(IMC)}</li>`
  }
  
  function printIMC(imc) {
    var resultado
    if (IMC < 17) {
        resultado = "Muito abaixo do peso"
      } else if (IMC < 18.5) {
          resultado = "Abaixo do peso"
        } else if (IMC < 25) {
           resultado = "Peso normal"
        } else if (IMC < 30) {
            resultado = "Acima do peso"
          } else if (IMC < 35) {
              resultado = "Obesidade I"
               } else {
                    resultado = "Obesidade II"
                 }
      return resultado
  }
  