function calculandoAlguel() {
    let tipo_carro = document.getElementById("icarro").value;
    let idias = document.getElementById('idias');
    let ikms = document.getElementById('ikms');
    let result = document.getElementById('resultado');

    let dias = Number(idias.value);
    let kms = Number(ikms.value);
    let aluguel = 0;
    let valor_kms = 0;

    if (tipo_carro == "" || dias == 0 || kms == 0 || isNaN(dias) || isNaN(kms)) {
        alert('Informe os dados corretamente...');
        return;
    } 

    switch (tipo_carro) {
        case 'popular':
            aluguel = 90 * dias;
            if (kms <= 100) {
                valor_kms = kms * 0.20;
            } else {
                valor_kms = kms * 0.10;
            }
            break;

        default:
            aluguel = 150 * dias;
            if (kms <= 200) {
                valor_kms = kms * 0.30;
            } else {
                valor_kms = kms * 0.25;
            }
            break;
    }

    valor_total = aluguel + valor_kms;
            
    result.textContent = `O valor do aluguel é R$${valor_total.toFixed(2)}`;
}