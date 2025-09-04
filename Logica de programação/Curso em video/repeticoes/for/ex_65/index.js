/* Desenvolva um programa usando a estrutura “para” que mostre na tela a seguinte contagem:
100 90 80 70 60 50 40 30 20 10 0 Acabou! */

let result = document.querySelector('.resultado');

let mostrar = "";

for (let i = 100; i >= 0; i -= 10) {
    mostrar += i + " ";
}

result.textContent = `${mostrar}Acabou!`;