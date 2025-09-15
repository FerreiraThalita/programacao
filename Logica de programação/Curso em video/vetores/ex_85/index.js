/* Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e guarde esses dados em três vetores. No final, mostre uma listagem contendo apenas os dados das funcionárias mulheres que ganham mais de R$5 mil. */

let result = document.querySelector('#tela');

let nomes = [];
let generos = [];
let salarios = [];
let nomeM5 = [];
let salarioM5 = [];

for (let i = 1; i <= 5; i++) {
    let nome = prompt(`Nome da ${i}ª pessoa`);
    nomes.push(nome);

    let sexo = prompt(`Sexo da ${i}ª pessoa \nF / M`).toUpperCase();
    
    if (!(sexo === "F" || sexo === "M")) {
        alert('Erro! Utilize apenas F OU M')
        i--; // voltar o contador para repetir essa iteração
        continue;
    }

    generos.push(sexo);
    
    let salario = parseFloat(prompt(`Salário da ${i}ª pessoa`));

    if (isNaN(salario) || salario === '') {
        alert('Erro! Inform um salário válido!');
        i--;
        continue;
    }

    salarios.push(salario);

    if (sexo === "F" && salario > 5000) {
        nomeM5.push(nome);
        salarioM5.push(salario);
    }
}

let saida = "Mulheres que ganham mais de R$5 mil \n+------------==========------------+\n";

for (let i = 0; i < nomeM5.length; i++) {
    saida += `${nomeM5[i]} - ${salarioM5[i].toFixed(2)} \n`;    
}

result.textContent = saida;