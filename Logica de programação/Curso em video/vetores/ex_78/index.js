/* Escreva um programa que leia 15 números e guarde-os em um vetor. No final, mostre o vetor inteiro na tela e em seguida mostre em que posições foram digitados valores que são múltiplos de 10. */

let result = document.querySelector('#resultado');

let numeros = [];
let mult10 = [];

for (let i = 0; i < 15; i++) {
    let numero = parseInt(prompt(`Informe o ${i}º número: `));
    numeros.push(numero); // adiciona cada número no final do vetor

    if (numero % 10 == 0) {
        mult10.push(i);
    }
}

// Criar uma nova lista formatada, colocando {} nos múltiplos de 10
let exibicao = numeros.map(num => {
    if (num % 10 === 0) {
        return `{${num}}`; // envolve entre chaves
    } else {
        return num;
    }
});

result.textContent = `${exibicao.join(" ")} \n\nOs valores multiplos de 10 estão na posição: ${mult10.join(" ")}`;
