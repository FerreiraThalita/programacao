/*  Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura “para”. No final, mostre na tela:    a) Quantas mulheres foram cadastradas
b) Quantos homens pesam mais de 100Kg
c) A média de peso entre as mulheres
d) O maior peso entre os homens */

let result = document.querySelector('.resultado');

let mulheres = 0;
let soma_mul = 0;
let maior_pesoH = null;
let homens_mais100 = 0;

for (let i = 1; i <= 8; i++) {
    let peso = parseInt(prompt(`Informe o peso da ${i}ª pessoa:`));

    if (isNaN(peso) || peso < 0 || peso === "") {
        alert('Erro: o peso deve ser um número positivo. Tente novamente.');
        continue;
    }

    let sexo = prompt(`Informe o sexo da ${i}ª pessoa F/M`).toUpperCase();

    if (!(sexo === "F" || sexo === "M")) {
        alert('Informação Inválida! Utilize apenas F ou M');
        continue;
    }

    if (sexo === "F") {
        mulheres++;
        soma_mul += peso;
    }

    if (sexo === "M" && peso > 100) {
        homens_mais100++;
    }

    if (maior_pesoH === null || peso > maior_pesoH) {
        maior_pesoH = peso;
    }
    
}

let media_mul = soma_mul / mulheres;

result.textContent = `Foram cadastradas ${mulheres} mulheres. \nA média de peso entre as mulheres = ${media_mul.toFixed(1)}Kg \nO maior peso entre os homens = ${maior_pesoH}Kg \n${homens_mais100} homens pesam mais de 100Kg`;