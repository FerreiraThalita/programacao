let result = document.querySelector('.resultado');

let mostrar = '';
let contador = 10;

while (contador >= 3) {
    mostrar += contador + ' ';
    console.log(contador);
    contador--;
}

mostrar += "Acabou!";
result.textContent = `${mostrar}`