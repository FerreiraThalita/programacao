/*  Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
final, mostre: a) Qual é a média de idade das pessoas cadastradas
b) Em quais posições temos pessoas com mais de 25 anos
c) Qual foi a maior idade digitada (podem haver repetições)
d) Em que posições digitamos a maior idade  */

let result = document.querySelector('#tela');

let idades = [];
let soma = 0;
let maior = null;
let maiorP = [];
let mais25 = [];

for (let i = 1; i <= 8; i++) {
    let idade = parseInt(prompt(`Informe a idade da ${i}ª pessoa`));
    idades.push(idade);

    if (idade > 25) {
        mais25.push(i);
    }
    
    if (maior === null || idade > maior) {
        maior = idade;
        maiorP = i;
    }

    soma += idade;  
}

let media = soma / 8;

result.textContent = `Média de idade das pessoas cadastradas: ${media.toFixed(0)} \nPosições onde temos pessoas com mais de 25 anos: ${mais25.join(", ")} \nA maior idade digitada: ${maior} \nPosição onde a maior idade foi digitada: ${maiorP}`;


