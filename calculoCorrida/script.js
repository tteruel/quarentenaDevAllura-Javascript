//2+ distancia * 1.4 + minutos* 0.26

distancia = prompt("Qual a distância do seu trajeto em km?")
min = prompt("Quantos minutos durou o trajeto?")

valorCorrida = 2 + distancia*1.4 + min*0.26

document.write("O Valor da sua corrida é de: R$ " + valorCorrida.toFixed(2))