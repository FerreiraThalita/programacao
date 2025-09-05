/*  [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos termos da sequência serão mostrados na tela. O seu procedimento deve receber esse valor e mostrar a quantidade de elementos solicitados.
Obs: Use os exercícios 70 e 75 para te ajudar na solução
Ex: Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM */

let result = document.querySelector('#resultado');

let a1 = 0;
let a2 = 1;
let mostrar = `${a1} >> ${a2} >> `;

function Fibonacci() {
    for (let i = 2; i <= termos; i++) {
        let proximo = a1 + a2;
        mostrar += proximo + " >> ";
        a1 = a2;
        a2 = proximo;
    }

    result.textContent = `${mostrar}Fim!`;
}

let termos = parseInt(prompt('Sequência de Fibonacci \nInforme quantos termos quer que mostre na tela:'));

if (!isNaN(termos) && termos > 0) {
    Fibonacci();
} else {
    alert('Digite um número inteiro positivo!');
}


