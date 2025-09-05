/* Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses valores para um procedimento Somador() que vai calcular e mostrar a soma entre eles. */

let result = document.querySelector('.resultado');

let pNum = parseInt(prompt('Digite um número:'));
let sNum = parseInt(prompt('Digite outro número:'));

somador(pNum, sNum);


function somador(a, b) {
    result.textContent = `A soma de ${a} e ${b} = ${a + b}`;
}

