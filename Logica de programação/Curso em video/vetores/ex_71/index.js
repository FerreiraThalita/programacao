let result = document.querySelector('#resultado');
let mostrar = document.querySelector('#mostrar');

let vetor = [];

for (let i = 0; i < 8; i++) {
    vetor[i] = 999;
}

result.textContent = vetor.join(" ");
mostrar.textContent = vetor.map((_, i) => i.toString().padStart(3, " ")).join(" ");