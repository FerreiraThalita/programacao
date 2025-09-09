/* Faça um programa que possua uma função chamada Potencia(), que vai receber dois parâmetros numéricos (base e expoente) e vai calcular o resultado da exponenciação. 
Ex: Potencia(5,2) vai calcular 52 = 25 */

let result = document.querySelector('#resultado');

let base = parseInt(prompt('Qual número você deseja elevar? (Base)'));
let expoente = parseInt(prompt('A qual potência deseja elevar esse número? (Expoente)'));

function potencial(num, potencia) {
    return num ** potencia;
}

result.textContent = ` ${base} elevado a ${expoente} é igual a ${potencial(base, expoente)}`;