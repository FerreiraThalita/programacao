/* Crie um programa que leia vários números pelo teclado e mostre no final o somatório entre eles.
Obs: O programa será interrompido quando o número 1111 for digitado */

let result = document.querySelector('.resultado');

let flag = true;
let soma = 0;

while (flag) {
    let numero = parseFloat(prompt('Digite um número ou 1111 para sair: '));

    if (isNaN(numero)) {
        alert('Digite um número valido!');
        continue;
    }

    if (numero === 1111) {
        flag = false;
    } else {
        soma += numero;
    }
}

result.textContent = `Dentre os números informados a soma é: ${soma}`;