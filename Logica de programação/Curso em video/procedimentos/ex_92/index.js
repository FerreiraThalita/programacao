/* Crie uma lógica que leia um número inteiro e passe para um procedimento ParOuImpar() que vai verificar e mostrar na tela se o valor passado como parâmetro é PAR ou ÍMPAR. */

let result = document.querySelector("#resultado");

let num = parseInt(prompt('Digite um número:'));

function parOuImpar(A) {
    if (A % 2 == 0) {
        result.textContent = `O número ${A} é Par`;
    } else {
        result.textContent = `O número ${A} é Impar`;
    }
}

parOuImpar(num);
