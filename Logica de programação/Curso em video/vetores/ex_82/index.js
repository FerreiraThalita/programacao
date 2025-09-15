/* Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
um vetor. No final, mostre:
a) Qual é a média da turma
b) Quantos alunos estão acima da média da turma
c) Qual foi a maior nota digitada
d) Em que posições a maior nota aparece */

let result = document.querySelector('#tela');

let notas = [];
let maiorN = null;
let posicaoN = 0;
let soma = 0;
let acimaM = 0;
let mediaT = 0;

for (let i = 1; i <= 10; i++) {
    let nota = parseInt(prompt(`Informe a nota do ${i}º aluno`));
    notas.push();

    if (maiorN === null || nota > maiorN) {
        maiorN = nota;
        posicaoN = i;
    }
    
    soma += nota;
    mediaT = soma / 10;

    if (nota > mediaT) {
        acimaM++;
    }
}

result.textContent = `Média da turma: ${mediaT} \nAlunos acima da média da turma: ${acimaM} 
\nMaior nota digitada: ${maiorN} \nPosição da maior nota: ${posicaoN}`;

