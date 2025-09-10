/* Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.  */

let result = document.querySelector('#tela');

let numeros = [];
let par = [];
let mostrar = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Informe o ${i}º número: `));
    numeros.push(numero);

    if (numero % 2 == 0) {
        par.push(i);
        mostrar.push(numero);
    }
}

result.textContent = `Os números pares são : ${mostrar.join(" ")} \n\nEstão nas posições: ${par.join(" ")}`;

