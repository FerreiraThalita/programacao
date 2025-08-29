

let result = document.querySelector('.resultado');

let par = 0;
let soma = 0;
let impar = 0;
let contador = 1;

while (contador <= 6) {
    let entrada = prompt(`Digite o ${contador}º número:`);
    let numero = parseInt(entrada);

    if (isNaN(numero)) {
        alert('Por favor, digite um número inteiro válido!');
        continue;
    } else {
        if (numero % 2 === 0) {
            par++;
        } else {
            impar++;
        }
    }

    soma += numero;
    contador++;
}

result.textContent = `A soma dos números é ${soma} \n${par} desses números são pares e ${impar} são impares.`;