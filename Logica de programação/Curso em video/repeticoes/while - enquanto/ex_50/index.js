function sortear() {
    let result = document.querySelector('.resultado');

    let numeros = [];
    let contador = 0;
    let maior_5 = 0;
    let div3 = 0;

    while (contador < 20) {
        let numero = Math.floor(Math.random() * 101)  // de 0 a 100 inclusivo

        if (numero > 5) {
            maior_5++;
        } else if (numero % 3 === 0) {
            div3++;
        }

        numeros.push(numero);
        contador++;
    }

    result.textContent = `Números sorteados: ${numeros.join(', ')} \n\nDesses números ${maior_5} são maiores que 5 \n\n${div3} dos números é divisível por 3.`;
}