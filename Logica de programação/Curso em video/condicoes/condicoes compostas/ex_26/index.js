function comparacaoNum() {
    let ivalo1 = document.getElementById("ivalor1");
    let ivalo2 = document.getElementById("ivalor2");
    let result = document.getElementById("resultado");

    let valor_1 = Number(ivalo1.value);
    let valor_2 = Number(ivalo2.value);

    if (valor_1 == "" || valor_2 == "" || isNaN(valor_1) || isNaN(valor_2)) {
        alert("Informe os dados corretamente...");
        ivalo1.focus();
        return;
    } else if (valor_1 > valor_2) {
        result.textContent = "O primeiro valor é o maior!";
    } else if (valor_1 < valor_2) {
        result.textContent = "O segundo valor é o maior!";
    } else {
        result.textContent = "Não existe valor maior, os dois são iguais";
    }
}