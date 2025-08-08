let notas = []; // Array para armazenar todas as notas

function adicionandoNota() {
    let inota = document.getElementById("inota");
    let result = document.getElementById("resultado");

    let nota = Number(inota.value);

    if (inota.value === "" || isNaN(nota)) {
        alert("Informe a nota corretamente...");
        inota.focus();
        return;
    }

    notas.push(nota); // Armazena a nota
    result.textContent += `Nota: ${nota}\n`;
    result.style.whiteSpace = "pre" // necessario para exibir a quebra de linha

    inota.value = "";
    inota.focus();
}

let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionandoNota);

function calculandoMedia() {
    let result = document.getElementById("resultado");

    if (notas.length === 0) {
        result.textContent = "Nenhuma nota foi adicionada.";
        return;
    }

    let soma = notas.reduce((acc, val) => acc + val, 0);
    let media = soma / notas.length;

    if (media > 6) {
        result.textContent += `\nMédia: ${media.toFixed(2)} — Estudante APROVADO! 🎉`;
        result.style.color = "green";
    } else {
        result.textContent += `\nMédia: ${media.toFixed(2)} — Estudante REPROVADO 😢`;
        result.style.color = "red";
    }
}

let btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calculandoMedia);