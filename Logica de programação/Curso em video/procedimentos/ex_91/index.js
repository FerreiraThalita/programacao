/* Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses valores para um procedimento Maior() que vai verificar qual deles é o maior e mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem informando essa característica. */

let result = document.querySelector('.mostrar');

function maior() {
    let maior = null;
    let primeiro = null;
    let segundo = null;

    for (let i = 1; i <= 2; i++) {
        let num = parseInt(prompt('Digite um número:'));

        if (isNaN(num)) {
            alert('Informe um número válido!');
            continue;
        }

        if (i === 1) {
            primeiro = num;
            maior = num;
        } else {
            segundo = num;
            if (num > maior) {
                maior = num;
            }
        }
    }

    if (primeiro === segundo) {
        result.textContent = `Os dois números são iguais.`;
    } else {
        result.textContent = `O maior número é ${maior}`;
    }
}

maior();