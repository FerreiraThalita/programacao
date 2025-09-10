/* Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um número (chave) e seu programa deve mostrar em que posições essa chave foi encontrada. Mostre também quantas vezes a chave foi sorteada. */

let result = document.querySelector('#tela');

let chave = 0;
let posicoes = [];
let vetor = [];

let num = parseInt(prompt('Digite um número (chave)'));

for (let i = 0; i < 30; i++) {
    let numeros = Math.floor(Math.random()* 15) + 1 ; // computador escolhe aleatoriamente entre 1 e 15
    vetor.push(numeros);  

    if (vetor[i] == num) {
        chave++;
        posicoes.push(i);
    }        
}

if (chave == 0) {
    result.textContent = `Os números sorteados foram: ${vetor.join(" ")} \nA chave informada não foi sorteada.`;
} else {
    result.textContent = `Os números sorteados foram: ${vetor.join(" ")} \nA chave foi sorteada ${chave}x e esta nas posições: ${posicoes.join(", ")}.`;
}

