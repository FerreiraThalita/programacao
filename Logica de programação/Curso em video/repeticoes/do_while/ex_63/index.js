/*  Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores
b) Qual foi o menor valor digitado
c) A média entre todos os valores
d) Quantos valores são pares */

let result = document.querySelector('.resultado');

let flag = true;
let menor = null;
let media = 0;
let pares = 0;
let nums = 0;
let soma = 0;

do {
    let num = parseFloat(prompt("Informe um número:"));

    if (isNaN(num) || num === "") {
        alert("Informe um número válido!");
        continue;
    }

    let continuar = prompt("Deseja continuar? S/N").toUpperCase();

    if (!(continuar === "S" || continuar === "N")) {
        alert("Informação inválida! Utilize apenas S ou N")
        continue;
    }

    if (menor === null || num < menor) {
        menor = num;
    }

    if (num % 2 == 0) {
        pares++;
    }

    if (continuar === 'N') {
        flag = false;
    }

    soma += num;
    nums++;
    
} while (flag);

media = soma / nums;

result.textContent = `Soma total = ${soma} \nO menor número = ${menor} \n${pares} são números pares \nA media dos números informados = ${media.toFixed(2)}`;