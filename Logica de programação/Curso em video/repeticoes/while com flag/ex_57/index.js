/*  Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salários pagos aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário. */

let result = document.querySelector('.resultado');

let continuar = true;
let soma_homens = 0;
let soma_mulheres = 0;

while (continuar) {
    let salario = parseFloat(prompt('Digite o salário do funcionário:'));

    if (isNaN(salario) || salario <= 0 || salario === "") {
        alert('Digite o valor corretamente!');
        continue;
    }

    let sexo = prompt('Digite o sexo do funcionário (M/F):').toUpperCase();

    if (sexo === "F") {
        soma_mulheres += salario;
    } else if (sexo === "M"){
        soma_homens += salario;
    } else {
        alert('Informe o sexo corretamente! Digite apenas F ou M');
        continue;
    }
    
    let resposta = prompt('Deseja continuar? (S/N)').toUpperCase();

    while (resposta !== "S" && resposta !== "N") {
        alert("Resposta inválida. Digite apenas S ou N.");
        resposta = prompt("Deseja cadastrar outro funcionário? (S/N)").toUpperCase().trim();
    }

    if (resposta === "N") {
        continuar = false;
    }

}

result.textContent = `Total pago as mulheres: ${soma_mulheres.toFixed(2)} \nTotal pago aos homens: ${soma_homens.toFixed(2)}`;