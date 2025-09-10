let result = document.querySelector('#resultado');

let vetor = [];

for (let i = 0; i < 7; i++) {
    let numAleatorio = Math.floor(Math.random()* 20) + 1 ;
    vetor.push(numAleatorio);  
}

result.textContent = `Números gerados: ${vetor.join(" ")} `;