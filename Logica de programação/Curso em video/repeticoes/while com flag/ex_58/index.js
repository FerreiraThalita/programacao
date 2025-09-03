/* Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa vai parar quando for digitada a idade 999. No final, mostre quantos alunos existem na turma e qual é a média de idade do grupo. */

let result = document.querySelector('.resultado');

let continuar = true;
let contador = 0;
let soma = 0;

while (continuar) {
    let idade = parseInt(prompt('Informe a idade do aluno(a) ou 999 para sair:'));

    if (isNaN(idade) || idade === "") {
        alert("Informe a idade corretamente!");
        continue;
    }

    if (idade === 999) {
        continuar = false;
    } else {
        soma+= idade;
        contador++;
    }
    
}

let media = soma / contador;

result.textContent = `Existem ${contador} alunos na turma. \nA média de idade do grupo é ${media}`;
