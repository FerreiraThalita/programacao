let result = document.querySelector('.mostrar');

let vetor = [];

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        vetor[i] = 5;
    } else {
        vetor[i] = 3;
    }
}

result.textContent = vetor.join(" ");
