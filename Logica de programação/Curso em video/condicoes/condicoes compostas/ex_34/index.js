function calculandoMassa() {
    let ialtura = document.getElementById("ialtura");
    let ipeso = document.getElementById('ipeso');
    let result = document.getElementById('resultado');

    let altura = Number(ialtura.value);
    let peso = Number(ipeso.value);

    let imc = peso / (altura * altura);

    if (altura == 0 || peso == 0 || isNaN(altura) || isNaN(peso)) {
        alert('Informe os dados corretamente...')
    } else if (imc < 18.5) {
        result.textContent = ` Seu IMC é ${imc} \nAbaixo do peso`;
        result.style.color = "#C51605";
    } else if (imc > 18.5 & imc < 25) {
        result.textContent = ` Seu IMC é ${imc} \nPeso ideal`;
        result.style.color = "#72BF78";
    } else if (imc > 25 & imc < 30) {
        result.textContent = ` Seu IMC é ${imc} \nSobrepeso`;
        result.style.color = "#FFE700";
    } else if (imc > 30 & imc < 40) {
        result.textContent = ` Seu IMC é ${imc} \nObesidade`;
        result.style.color = "#FD8D14";
    } else {
        result.textContent = ` Seu IMC é ${imc} \nObesidade mórbida`;
        result.style.color = "#C51605";
    }
}