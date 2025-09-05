/* Crie um programa que tenha um procedimento Gerador() que, quando chamado, mostre a mensagem "Olá, Mundo!" com algum componente visual (linhas)     Ex: Ao chamar Gerador() aparece:
+-------=======------+
 Olá, Mundo!
+-------=======------+ */

let result = document.querySelector('.resultado');

function gerador(msg) {
    result.textContent = `+----------========----------+\n\t  ${msg}\n+----------========----------+`;
}

gerador("Olá,Mundo!");

