/* Crie um programa que mostre na tela a seguinte contagem, usando a estrutura “faça enquanto”
0 3 6 9 12 15 18 21 24 27 30 Acabou! */

let result = document.querySelector('.resultado');

contador = 0;
mostrar = '';

do {
    mostrar += contador + " ";
    contador += 3;
} while (contador <= 30);

result.textContent = `${mostrar}`;