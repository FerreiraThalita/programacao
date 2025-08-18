function analisandoTri() {
    let ilado1 = document.getElementById("ilado1");
    let ilado2 = document.getElementById("ilado2");
    let ilado3 = document.getElementById("ilado3");
    let result = document.getElementById("resultado");

    let lado_1 = Number(ilado1.value);
    let lado_2 = Number(ilado2.value);
    let lado_3 = Number(ilado3.value);

    if (lado_1 > lado_2 + lado_3 || lado_2 > lado_3 + lado_1 || lado_3 > lado_1 + lado_2 ) {
        alert("Os valores informados não formam um triângulo!");
        ilado1.focus();
        return;
    } else if (lado_1 == lado_2 & lado_2 == lado_3) {
        result.textContent = "Todos os lados são iguais. \nEntão temos um triangulo: Equilátero";
        result.style.color = "#932F67"
    } else if (lado_1 == lado_2 & lado_2 != lado_3 || lado_2 == lado_3 & lado_3 != lado_1 || lado_1 == lado_3 & lado_1 != lado_2) {
        result.textContent = "Dois dos lados são iguais. \nEntão temos um triangulo: Isósceles";
        result.style.color = "#D92C54"
    } else {
        result.textContent = "Todos os lados são diferentes. \nEntão temos um triangulo: Escaleno";
        result.style.color = "#8ABB6C"
    }
}