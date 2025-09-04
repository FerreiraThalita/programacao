/* Escreva um programa que leia um número qualquer e mostre a tabuada desse número, usando a estrutura “para”.   Ex: Digite um valor: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15 ...  */

let result = document.querySelector('.resultado');

let mostrar = "";
let num = parseInt(prompt('Informe um número:'));

for (let i = 0; i <= 10 ; i++) {
    mostrar += num + " x " + i + " = " + num * i + "\n"; 
}

result.textContent = `${mostrar}`;