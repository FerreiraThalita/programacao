let result = document.querySelector('.resultado');

let cont = 30;
let mostrar = '';
let divisor4 = 0;

while (cont >= 1) {
    if (cont % 4 === 0) {
        mostrar += `(${cont}) `;
    } else {
        mostrar += cont + " ";
    }
    cont--;
}

result.textContent = `${mostrar}`;