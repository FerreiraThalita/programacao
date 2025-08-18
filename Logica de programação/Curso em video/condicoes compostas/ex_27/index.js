function calculando() {
    let inota1 = document.getElementById("inota1");
    let inota2 = document.getElementById("inota2");
    let result = document.getElementById("resultado");

    let nota_1 = Number(inota1.value);
    let nota_2 = Number(inota2.value);
    let media = (nota_1 + nota_2) / 2;

    if (nota_1 == "" || nota_2 == "" || isNaN(nota_1) || isNaN(nota_2)) {
        alert('Informe os dados corretamente...');
    } else if (media <= 4.9){
        result.textContent = `Média - ${media} \nReprovado!`;
        result.style.color = "red";
    } else if (media >= 5 & media <= 6.9) {
        result.textContent = `Média - ${media} \nRecuperação!`;
        result.style.color = "#FFE100";
    } else {
        result.textContent = `Média - ${media} \nAprovado!`;
        result.style.color = "green";
    }
}