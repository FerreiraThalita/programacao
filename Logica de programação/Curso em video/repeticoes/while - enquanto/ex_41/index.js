// Desenvolva um programa que mostre na tela a seguinte contagem: 100 95 90 85 80 ... 0 Acabou!

let result = document.querySelector('.resultado');

let mostrar = "";
let cont = 100;

while (cont >= 0) {
    console.log(cont);
    mostrar += cont + " ";
    cont -= 5;
}                                                                       

result.textContent = `${mostrar} Acabou!`;