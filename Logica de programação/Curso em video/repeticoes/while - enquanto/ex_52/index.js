/* Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
a) Qual é a média de idade do grupo
b) Quantas pessoas tem mais de 18 anos
c) Quantas pessoas tem menos de 5 anos
d) Qual foi a maior idade lida */

let result = document.querySelector('.resultado');

let idades = [];
let contador = 1;
let maior_18 = 0;
let menor_5 = 0;
let maior_idade = null;
let soma = 0;
let media = 0;

while (contador <= 10) {
    let entrada = prompt(`Digite a ${contador}º idade:`);
    let idade = parseInt(entrada);

    if (isNaN(idade) || idade < 0) {
        alert('Digite uma idade válida.');
        continue;
    }

    if (maior_idade === null) {
        maior_idade = idade;
    }

    if (idade > maior_idade ) {
        maior_idade = idade;
    }

    if (idade > 18) {
        maior_18++;
    } else if (idade < 5) {
        menor_5++;
    }

    idades.push(idade);
    soma += idade;
    media = soma / 8;
    contador++;
}

result.textContent = `Dentre as idades informadas: ${idades.join(', ')} \nA média das idades informadas foi ${media} \n${maior_18} pessoas são maiores de 18 anos \n${menor_5} pessoas são menores de 5 anos \nA maior idade informada foi ${maior_idade}`;
