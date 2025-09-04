/*  [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência. */

let result = document.querySelector('.resultado');

let a1 = parseInt(prompt('Digite o primeiro termo (a1):'));
let r = parseInt(prompt('Digite a razão (r):'));
let mostrar = "";

for (let i = 0; i < 10; i++) {
    let termo = a1 + i * r;
    mostrar += termo + " ";
}

let an = a1 + 9 * r;
let soma = (a1 + an) * 10 / 2;

result.textContent = `Os 10 primeiros termos são: ${mostrar}\nA soma de todos os valores da sequência = ${soma}`;