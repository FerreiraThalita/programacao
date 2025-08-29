let result = document.querySelector('.resultado');

let soma = 0;
let mostrar = "";
let cont = 6;

while (cont <= 100) {
    mostrar += cont;

    // Adiciona "+" se ainda não for o último número
    if (cont + 2 <= 100) {
        mostrar += " + ";
    }
    
    soma += cont;
    cont += 2;
}

result.textContent = `${mostrar} = ${soma}`;