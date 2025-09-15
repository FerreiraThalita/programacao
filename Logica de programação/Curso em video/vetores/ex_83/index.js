/*  [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

let result = document.querySelector('#tela');

let vetor = [];

for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 99) + 1; // computador escolhe aleatoriamente de 1 a 99
    vetor.push(num);
}

/* Usar uma função de comparação para ordenar os números corretamente: vetor.sort((a, b) => a - b) */
result.textContent = `${vetor.join(" ")} \n\n${vetor.sort((a, b) => a - b).join(" ")}`;