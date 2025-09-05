/* Faça um programa que tenha um procedimento chamado Contador() que recebe três valores como parâmetro: o início, o fim e o incremento de uma contagem. O programa principal deve solicitar a digitação desses valores e passá-los ao procedimento, que vai mostrar a contagem na tela.
Ex: Para os valores de início (4), fim (20) e incremento(3) teremos Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >> FIM */

let result = document.querySelector('#resultado');
let mostrar = "";


let a1 = parseInt(prompt('Digite o primeiro número:'));
let an = parseInt(prompt('Digite o último número:'));
let r = parseInt(prompt('Digite o incremento:'));

function contador(inicio, fim, incremento) {
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i += incremento) {
            mostrar += i + " >> ";
            result.textContent = `${mostrar}Fim!`;
        }  
    } else {
         for (let i = inicio; i >= fim; i -= incremento) {
            mostrar += i + " >> ";
            result.textContent = `${mostrar}Fim!`;
        }   
    }
}

contador(a1, an, r);