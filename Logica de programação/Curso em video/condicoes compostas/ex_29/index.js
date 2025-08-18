function calculandoAumento() {
    let nome = document.getElementById("inome").value;
    let isalario = document.getElementById("isalario");
    let itempo = document.getElementById("itempo");
    let result = document.getElementById("resultado");

    let salario = Number(isalario.value);
    let tempo = Number(itempo.value);
    let aumento_sal = 0;
    let novo_sal = 0;

    if (nome == "" || salario == 0 || tempo == 0 || isNaN(tempo) || isNaN(salario)) {
    alert("Informe os dados corretamente... \nOBS: Caso seu tempo de empresa seja 0 anos não existe aumento!")
    return;
    }

    switch (tempo) {
    case 1:
    case 2:
    case 3:
        aumento_sal = salario * 0.03;
        break;

    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        aumento_sal = salario * 0.125;
        break;

    default:
        aumento_sal = salario * 0.2;
        break;
    }

    novo_sal = aumento_sal + salario;

    result.textContent = `Com o reajuste, ${nome}, seu novo salario é R$${novo_sal.toFixed(2)}`;
}