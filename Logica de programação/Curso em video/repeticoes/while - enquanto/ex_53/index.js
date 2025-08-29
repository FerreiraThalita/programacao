/* Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
a) Quantos homens foram cadastrados
b) Quantas mulheres foram cadastradas
c) A média de idade do grupo
d) A média de idade dos homens
e) Quantas mulheres tem mais de 20 anos */

let result = document.querySelector(".resultado");

let contador = 1;
let soma = 0;
let homens = 0;
let mulheres = 0;
let media_grupo = 0;
let media_homens = 0;
let mulheres_20 = 0;
let soma_homens = 0;

while (contador <= 5) {
    let idade = parseInt(prompt(`Digite a idade da ${contador}ª pessoa:`));
    let sexo = prompt(`Digite o sexo da ${contador}ª pessoa (M/F):`).toUpperCase();

    if (isNaN(idade) || idade < 0) {
        alert('Idade inválida! Tente novamente.');
        continue;
    }

    if (sexo === "F") {
        mulheres++;
        if (idade > 20) {
            mulheres_20++;
        }
    } else if (sexo === "M") {
        homens++;
        soma_homens += idade;
    } else {
        alert("Sexo inválido. Use apenas M ou F.");
        continue;
    }

    soma += idade;
    media_grupo = soma / 10;
    media_homens = soma_homens / homens;
    contador++;
}

result.textContent = `Homens cadastrados: ${homens} \nMulheres cadastradas: ${mulheres} \nA média da idade do grupo: ${media_grupo} \nA media da idade dos homens: ${media_homens.toFixed(1)} \nMulheres com idade superior a 20: ${mulheres_20}`;

