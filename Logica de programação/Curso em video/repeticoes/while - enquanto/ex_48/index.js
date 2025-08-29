// Faça um programa que leia 7 números inteiros e no final mostre o somatório entre eles.

let result = document.querySelector('.resultado');

let soma = 0;
let contador = 1;

while (contador <= 7) {
    let entrada = prompt(`Digite o ${contador}º número:`);
    let numero = parseInt(entrada);

    if (isNaN(numero)) {
        alert('Por favor, digite um número inteiro válido.');
        continue; // Pede o mesmo número novamente
    }

    soma += numero;
    contador++;
}

result.textContent = `A soma dos números é ${soma}`;