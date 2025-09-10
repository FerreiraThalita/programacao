let result = document.querySelector('.resultado');

let vetor = [];

for (let i = 0; i < 10; i++) {
    vetor[i] = (i + 1) * 5;
}

result.textContent = vetor.join(" ");