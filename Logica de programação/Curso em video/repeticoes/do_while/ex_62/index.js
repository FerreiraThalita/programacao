/* Faça um programa usando a estrutura “faça enquanto” que leia a idade de várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou não continuar a digitar dados. No final, quando o usuário decidir parar, mostre na tela:
a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas tem 21 anos ou mais. */

let result = document.querySelector('.resultado');

let flag = true;
let idades = 0;
let soma = 0;
let media = 0;
let mais_21 = 0;

do {
    let idade = parseInt(prompt('Digite a idade:'));

    if (isNaN(idade) || idade === "" || idade < 0) {
        alert("Informe uma idade válida!");
        continue;
    }

    let continuar = prompt('Deseja continuar? S/N').toUpperCase();

    if (!(continuar === 'S' || continuar === 'N')) {
        alert('informação inválida! Utilize apenas S ou N')
        continue;
    }

    if (idade >= 21) {
        mais_21++;
    }

    if (continuar === "N") {
        flag = false
    }

    soma += idade;
    idades++;

} while (flag);

media = soma / idades;

result.textContent = `Foram digitadas ${idades} idades. \n${mais_21} pessoas tem 21 anos ou mais. \nMédia entre as idades digitadas: ${media}`;