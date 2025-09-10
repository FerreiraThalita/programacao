let result = document.querySelector('.resultado');

let vetor = [];

for (let i = 0; i < 10; i++) {
    vetor[i] = 9 - i;
}

result.textContent = vetor.join(" ");