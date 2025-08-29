/* Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
no final:
a) Qual foi a média de altura do grupo
b) Quantas pessoas pesam mais de 90Kg
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg. */

let result = document.querySelector('.resultado');

let contador = 1;
let soma = 0;
let mais_90 = 0;
let media_altura = 0;
let menos50_alt16 = 0;
let alt19_mais100 = 0;

while (contador <= 7) {
    let peso = parseFloat(prompt(`Informe o peso da ${contador}ª pessoa`));
    let altura =  parseFloat(prompt(`Informe a altura da ${contador}ª pessoa`));

    if (isNaN(peso) || isNaN (altura)) {
        alert('Digite as informações corretamente!')
        continue;
    }

    if (peso > 90) {
        mais_90++;
    } 
    
    if (peso < 50 && altura < 1.60) {
        menos50_alt16++;
    } 
    
    if (peso > 100 && altura > 1.90) {
        alt19_mais100++;
    }

    soma += altura;
    contador++;
}

media_altura = soma / 7;

result.textContent = `A média de altura do grupo: ${media_altura.toFixed(2)} \n${mais_90} pessoas pesam mais de 90Kg \n${menos50_alt16} pessoas que pesam menos de 50Kg e tem menos de 1.60m \n${alt19_mais100} pessoas que medem mais de 1.90m pesam mais de 100Kg`;