/*  Crie um programa que melhore o procedimento Gerador() da questão anterior para que mostre uma mensagem personalizada, passada como parâmetro. Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
+-------=======------+
Aprendendo Portugol
+-------=======------+ */

let result = document.querySelector('.resultado');

function gerador(msg) {
    result.textContent = `+----------=============----------+\n\t${msg}\n+----------=============----------+`;
}

gerador("Aprendendo Portugol");