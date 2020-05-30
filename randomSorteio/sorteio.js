var numeroCerto = Math.ceil(Math.random()*10)
console.log(numeroCerto)

function iniciarsorteio(){
 var valor = 9/*prompt("Digite um valor de 0 a 10 para o sorteio:")*/
 paragrafoResultado.innerHTML = `${sorteio(valor)}`
}

function sorteio(escolhido){
 var resultado
 
 //alert(numeroCerto)
 if(escolhido >=0 && escolhido <=10){
   if(escolhido == numeroCerto){
     resultado = "Você acaba de ganhar uma corrida de GRAÇA!!"
     paragrafoResultado.style.backgroundColor = "green"
     paragrafoResultado.style.fontWeight = "bold"
     paragrafoResultado.style.fontSize = "30px"
     paragrafoResultado.style.border = "10px solid limegreen"
   } else {
     resultado = "Que pena!! não foi desta vez..."
     paragrafoResultado.style.backgroundColor = "red"
     paragrafoResultado.style.fontWeight = "bold"
     paragrafoResultado.style.fontSize = "25px"
     paragrafoResultado.style.border = "10px solid #ffaaaa"
   }
 } else{
     resultado = "Selecione um valor entre 0 e 10"
     paragrafoResultado.style.backgroundColor = "lightgrey"
     paragrafoResultado.style.fontWeight = "bold"
     paragrafoResultado.style.fontSize = "15px"
     paragrafoResultado.style.border = "10px solid black"
 }
 
 return resultado
}