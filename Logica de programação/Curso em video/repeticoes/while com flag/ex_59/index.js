
/*  Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
a) qual é a maior idade lida
b) quantos homens foram cadastrados
c) qual é a idade da mulher mais jovem
d) qual é a média de idade entre os homens */

let result = document.querySelector('.resultado');

flag = true;
maiorI = null;
homens = 0;
mulher_jovem = null;
media_homens = 0;

while (flag) {
    let idade = parseInt(prompt('Informe a idade da pessoa:'));

    if (isNaN(idade) || idade === "") {
        alert("Informe uma idade válida!");
        continue;
    }

    let sexo = prompt('Digite o sexo do funcionário (M/F):').toUpperCase();

    if (!(sexo === 'M' || sexo === 'F')) {
        alert('Informe o sexo corretamente! Digite apenas F ou M');
        continue;
    } 

    let sair = prompt('Deseja continuar? S/N').toUpperCase();

    if (!(sair === 'S' || sair === 'N')) {
        alert('Informação inválida! Digite apenas S ou N');
        continue;
    }

    if (maiorI === null) {
        maiorI = idade;
    } else if (idade > maiorI) {
        maiorI = idade;
    }

    if (sexo === 'M') {
        homens++;
        media_homens += idade;
    }
    
    if (mulher_jovem === null) {
        mulher_jovem = idade;
    } else if ( sexo === 'F' && idade < mulher_jovem) {
        mulher_jovem = idade;
    }

    if (sair === 'N') {
        flag = false;
    }

}

let media = media_homens / homens;

result.textContent = `Maior idade informada: ${maiorI} \n${homens} homens foram cadastrados. \nA mulher mais jovem tem ${mulher_jovem} anos. \nA média de idade entre os homens: ${media.toFixed(1)} `;