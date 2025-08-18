function classificarTerr() {
    let ilargura = document.getElementById('ilargura');
    let icomprimento = document.getElementById('icomprimento');
    let result = document.getElementById('resultado');

    let largura = Number(ilargura.value);
    let comprimento = Number(icomprimento.value);
    let metros_quadrados = (largura * comprimento) / 2;

    if (largura == "" || comprimento == "" || isNaN(largura) || isNaN(comprimento)) {
        alert('Informe os dados corretamente...');
        ilargura.focus();
        return;
    } else if (metros_quadrados < 100) {
        result.textContent = `Area - ${metros_quadrados} m² \nTERRENO POPULAR`;
    } else if (metros_quadrados >= 100 & metros_quadrados <= 500) {
        result.textContent = `Area - ${metros_quadrados} m² \nTERRENO MASTER`;
    } else {
        result.textContent = `Area - ${metros_quadrados} m² \nTERRENO VIP`;
    }
}