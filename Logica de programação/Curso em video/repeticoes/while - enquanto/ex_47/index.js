let result = document.querySelector('.resultado');

let mostrar = "";
let soma = 0;
let cont = 500;

while (cont >= 0) {
    mostrar += cont + " ";

    if (cont + 50 <= 0) {
        mostrar += " + ";
    }

    soma += cont;
    cont -= 50;
}

result.textContent = `${mostrar} = ${soma}`;