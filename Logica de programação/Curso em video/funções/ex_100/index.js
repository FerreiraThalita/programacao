/* Melhore o exercício 96, criando além da função Media() uma outra função chamada Situacao(), que vai retornar para o programa principal se o aluno está APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como parâmetro o resultado retornado pela função Media(). */

let result = document.querySelector('#resultado');

let nota1 = parseInt(prompt('Informe a PRIMEIRA nota do aluno:'));
let nota2 = parseInt(prompt('Informe a SEGUNDA nota do aluno:'));


function media(a, b) {
    return (a + b) / 2;
}

function situacao(n1, n2) {
    if (media(n1, n2) >= 6) {
        return `APROVADO!`;
    } else {
      return `REPROVADO!`;
    }
}

let resultadoFinal = media(nota1, nota2);
let condicao = situacao(nota1, nota2);

result.textContent = `A media é ${resultadoFinal} \n${condicao}`;