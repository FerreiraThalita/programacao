let result = document.querySelector('.resultado');
let mostrar = '';
let contador = 6;

while (contador <= 11) {
    mostrar += contador + " ";
    console.log(contador);
    contador++;
}

mostrar += 'Acabou!';
result.textContent = `${mostrar}`;