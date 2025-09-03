/* Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas. O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
a) O nome da pessoa mais velha
b) O nome da mulher mais jovem
c) A média de idade do grupo
d) Quantos homens tem mais de 30 anos
e) Quantas mulheres tem menos de 18 anos */

let result = document.querySelector('.resultado');

let soma = 0;
let flag = true;
let mais_velha = null;
let nome_velha = "";
let mais_nova = null;
let nome_jovem = "";
let pessoas = 0;
let homensMais_30 = 0;
let mulheresMenos_18 = 0;

while (flag) {
    let nome = prompt('Digite o nome:');

    if (nome === "") {
        alert('Informe o nome corretamente!');
        continue;
    }

    let idade = parseInt(prompt('Informe a idade da pessoa:'));

    if (isNaN(idade) || idade === "" || idade < 0) {
        alert('Informe uma idade válida!');
        continue;
    }

    let sexo = prompt("Digite o sexo da pessoa (M/F):").toUpperCase();

    if (!(sexo === "F" || sexo === "M")) {
        alert('Informe o sexo corretamente! Digite apenas F ou M');
        continue;
    }

    let continuar = prompt('Deseja continuar o cadastro? S/N').toUpperCase();

    if (!(continuar === 'S' || continuar === 'N')) {
        alert('Informação inválida! Digite apenas S ou N');
        continue;
    }

    if (mais_velha === null || idade > mais_velha) {
        mais_velha = idade;
        nome_velha = nome;
    }

    if (mais_nova === null || idade < mais_nova) {
        mais_nova = idade;
        nome_jovem = nome;
    }

    if (sexo === 'M' && idade > 30) {
        homensMais_30++;
    }

    if (sexo === 'F' && idade < 18) {
        mulheresMenos_18++;
    }

    if (continuar === 'N') {
        flag = false
    }

    soma += idade;
    pessoas++;
}

let media_grupo = soma / pessoas;

result.innerHTML = `A média de idade do grupo: ${media_grupo.toFixed(1)} \nNome da pessoa mais velha: ${nome_velha} \nNome da mulher mais jovem: ${nome_jovem} \n${homensMais_30} homens tem mais de 30 anos. \n${mulheresMenos_18} mulheres tem menos de 18 anos.`;