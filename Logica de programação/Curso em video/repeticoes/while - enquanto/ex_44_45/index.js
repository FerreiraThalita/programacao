function contar() {
    let inicia = parseInt(document.getElementById('numInicial').value);
    let finaliza = parseInt(document.getElementById('numFinal').value);
    let pulo = parseInt(document.getElementById('incremento').value);
    let result = document.querySelector('.resultado');

    let mostrar = '';

    if (inicia > finaliza) {
        while (inicia >= finaliza) {
            mostrar += inicia + " ";
            inicia -= pulo;
        }
    } else {
        while (inicia <= finaliza) {
            mostrar += inicia + " ";
            inicia += pulo;
        }
    }

    result.textContent = `${mostrar} Acabou!`;
}