
let result = document.querySelector('.resultado');

let valores = [];
let contador = 1;
let maior = null;
let menor = null;

while (contador <= 8) {
    let entrada = prompt(`Digite o ${contador}º preço:`);
    let valor = parseFloat(entrada);

    if (isNaN(valor)) {
    alert("Digite um número válido.");
    continue; // volta e pede novamente sem avançar contador
    }

    // Define o primeiro valor como base
    if (maior === null || menor === null) {
        maior = valor;
        menor = valor;
    }

    if (valor > maior) {
        maior = valor;
    } else if (valor < menor) {
        menor = valor;
    }

    valores.push(valor);
    contador++;
}

result.textContent = `Dentre os valores informados: ${valores.join(', ')} \nO maior valor é ${maior} \nO menor valor é ${menor}`;