/* Crie um programa que tenha uma função Media(), que vai receber as 2 notas de um aluno e retornar a sua média para o programa principal. */

let result = document.querySelector('#resultado');

let nota1 = parseFloat(prompt('Informe a 1ª nota: '));
let nota2 = parseFloat(prompt('Informe a 2ª nota: '));

function media(a, b) {
    return (a + b) / 2;
}

result.textContent = `A média das notas é igual a ${media(nota1, nota2)}`;