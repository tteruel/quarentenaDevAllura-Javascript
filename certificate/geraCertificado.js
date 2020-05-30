function gerar(){ 
    count = 1000000
    while(count >= 0){
     retornoHTML = emitirCertificado(inputNome.value)
     count--
    }
     var aulas = ["01#IMC", 
                  "02#Média de idade", 
                  "03#Idade da Vó da Maria", 
                  "03#Exercícios", 
                  "04#Exercícios", 
                  "05#Calculadora - Desafio Art", 
                  "05#Layout aulas", 
                  "05#Pokeball Color Change", 
                  "06#IMC", 
                  "06#Dizendo o mês",
                  "07#Desafio Paulo e Art",
                  "08#Botão Like Facebook",
                  "08#Conta Olímpiadas",
                  "08#Até 1milhão",
                  "08#Números Pares",
                  "08#Desafio Randômico",
                  "09#Desafio do Art"]
     var links = ["https://codepen.io/tteruel/pen/vYOPJwr",
                 "https://codepen.io/tteruel/pen/JjdzxXO",
                 "https://codepen.io/tteruel/pen/BaNbMKe",
                 "https://codepen.io/tteruel/pen/xxGvBLL",
                 "https://codepen.io/tteruel/pen/BaNXEeR",
                 "https://codepen.io/tteruel/pen/QWjLGxV",
                 "https://codepen.io/tteruel/pen/gOaYzPN",
                 "https://codepen.io/tteruel/pen/VwvZdMa",
                 "https://codepen.io/tteruel/pen/zYvOQEX",
                 "https://codepen.io/tteruel/pen/BaoBgmG",
                 "https://codepen.io/tteruel/pen/KKdKPVZ",
                 "https://codepen.io/tteruel/pen/KKdKvRa",
                 "https://codepen.io/tteruel/pen/JjYjppg",
                 "https://codepen.io/tteruel/pen/qBOBoGP",
                 "https://codepen.io/tteruel/pen/PoPoBbQ",
                 "https://codepen.io/tteruel/pen/LYpYByb",
                 "https://codepen.io/tteruel/pen/PoPoxgx"]
     
     counter = 0
     postLinkComHtml = ""
     while(counter < links.length){
           postLinkComHtml = postLinkComHtml + `<li><a href="${links[counter]}">${aulas[counter]}</a></li>`
           
           counter++
           }
     document.body.innerHTML = 
        `${retornoHTML}
        <ol>
           ${postLinkComHtml}
        </ol>
        `
  }
  
  