/* Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o maior entre eles. */

let result = document.querySelector('#resultado');

function maior() {
    let maior = null;
    let primeiro = 0;
    let segundo = 0;
    let terceiro = 0;

    for (let i = 1; i <= 3; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número:`));
        
        if (isNaN(num)) {
            alert('Erro! Informe um número válido!')
            continue;
        }

        if (i === 1) {
            primeiro = num;
            maior = num;
        } else if (i === 2) {
            segundo = num;
            if (num > maior) {
                maior = num;
            }
        } else {
            terceiro = num;
            if (num > maior) {
                maior = num;
            }
        }
    }

    if (primeiro === segundo && segundo === terceiro) {
        result.textContent = `Os números são iguais.`;
    } else {
        result.textContent = `O maior número é ${maior}`;
    }
}

maior();