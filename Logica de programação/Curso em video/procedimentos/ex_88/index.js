/*  Crie um programa que melhore o procedimento Gerador() da questão anterior para que mostre uma mensagem vário  Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
+-------=======------+
 Aprendendo Portugol
 Aprendendo Portugol
 Aprendendo Portugol
 Aprendendo Portugol
+-------=======------+ */

let result = document.querySelector('.resultado');

function gerador(msg, vs) {
    result.textContent = `+----------=============----------+\n`;

    for (let i = 0; i < vs ; i++) {
        result.textContent += `\t${msg}\n`;
    }

    result.textContent += `+----------=============----------+`;
}
    
gerador('Aprendendo Portugol', 4);