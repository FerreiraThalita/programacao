/* [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci: 1 1 2 3 5 8 13 21... */

let result = document.querySelector('.resultado');

let termos = 10;
let a = 0; // primeiro termo
let b = 1; // segundo termo
mostrar = `${a} ${b} `;

for (let i = 2; i < termos; i++) {
    let proximo = a + b;
    mostrar += proximo + " "; 
    a = b;            // o segundo vira o primeiro
    b = proximo;      // o proximo vira o segundo
}

console.log(mostrar);
result.textContent = `${mostrar}`;