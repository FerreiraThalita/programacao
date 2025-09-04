/* Faça um programa usando a estrutura “para” que leia um número inteiro positivo e mostre na tela uma contagem de 0 até o valor digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM! */

let result = document.querySelector('.resultado');

let mostrar = "";
let num = parseInt(prompt('Até qual número quer contar?'));

for (let i = 0; i <= num; i++) {
    mostrar += i + ", ";
}

result.textContent = `${mostrar}Fim!`;