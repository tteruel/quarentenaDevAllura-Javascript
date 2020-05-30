//2+ distancia * 1.4 + minutos* 0.26

function calc() {
    var distancia = document.getElementById('distancia').value
    var kml = document.getElementById('autonomia').value
    var gas = document.getElementById('valorcombustivel').value
    granaTotal = (distancia/kml)*gas
    dinheiro.innerHTML = granaTotal
  }