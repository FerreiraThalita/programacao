function calcularPontos() {
    let ihoras = document.getElementById('ihoras');
    let result = document.getElementById('resultado');

    let horas = Number(ihoras.value);
    let pontos = 0;
    let dinheiro = 0;

    if (horas == 0 || isNaN(horas)) {
        alert('Informe os dados corretamente...')
        ihoras.focus();
        return;
    }

    switch (horas) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            pontos = horas * 2;
            break;
                
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            pontos = horas * 5;
            break;

        default:
            pontos = horas * 10;
            break;
            }

dinheiro = pontos * 0.05;

result.textContent = `Horas totais: ${horas} \nPontos Ganhos: ${pontos} \nValor em R$ ${dinheiro.toFixed(2)}`;
}