/* Desenvolva um programa usando a estrutura “para” que mostre na tela a seguinte contagem:
0 5 10 15 20 25 30 35 40 Acabou! */

let result = document.querySelector('.resultado');

let mostrar = "";

for (let i = 0; i <= 40; i += 5) {
    mostrar += i + " ";
}

result.textContent = `${mostrar}Acabou!`;