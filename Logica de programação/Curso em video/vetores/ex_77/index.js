/* Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados. */

let result = document.querySelector('#lista');

let nomes = [];

for (let i = 0; i < 7; i++) {
    let nome = prompt(`Informe o ${i}º nome:`);
    nomes[i] = nome;
}

result.textContent = `\tListagem \n+-------========-------+ \n\t${nomes.reverse().join('\n\t')}`;