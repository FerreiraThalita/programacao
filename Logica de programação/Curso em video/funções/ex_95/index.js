/*  Refaça o exercício 90, só que agora em forma de função Somador(), que vai receber dois parâmetros e vai retornar o resultado da soma entre eles para o programa principal.  */

let result = document.querySelector("#resultado");

let num1 = parseInt(prompt('Digite um número: '));
let num2 = parseInt(prompt('Digite um número: '));

function somador(a, b) {
    return a + b;
}

result.textContent = `A soma de ${num1} + ${num2} = ${somador(num1, num2)}`;