// Crie um aplicativo que mostre na tela a seguinte contagem: 0 3 6 9 12 15 18 Acabou!

let result = document.querySelector('.resultado');

let cont = 0;
let mostrar = "";

while (cont <= 18) {
    console.log(cont);
    mostrar += cont + " ";
    cont += 3;
}

result.textContent = `${mostrar} Acabou!`;