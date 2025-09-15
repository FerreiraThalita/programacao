/* Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. */

let result = document.querySelector('#tela');

let nomes = [];
let idades = [];
let menoresN = [];
let menoresI = [];

for (let i = 1; i <= 9; i++) {
    let nome = prompt(`Nome da ${i}ª pessoa`);
    nomes.push(nome);

    let idade = parseInt(prompt(`Idade da ${i}ª pessoa`));
    idades.push(idade);
    
    if (idade < 18) {
        menoresN.push(nome);
        menoresI.push(idade);
    }
}

let saida = "Listagem (menores de idade)\n";
saida += "+---------========---------+\n";

for (let i = 1; i < menoresN.length; i++) {
    saida += `${menoresN[i]} \t ${menoresI[i]} anos\n`;
}

result.textContent = saida;