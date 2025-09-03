
nome = "";
rodada = 1;
pont_jog = 0;
pont_rob = 0;

const imagens = {
    num1: "imagens/num_1.png",
    num2: "imagens/num_2.png",
    num3: "imagens/num_3.png",
    num4: "imagens/num_4.png",
    num5: "imagens/num_5.png",
    num6: "imagens/num_6.png",
    num7: "imagens/num_7.png",
    num8: "imagens/num_8.png",
    num9: "imagens/num_9.png",
    num10: "imagens/num_10.png",
    num11: "imagens/num_11.png",
    num12: "imagens/num_12.png"
};

function esconderTelas() {
    document.querySelector('.inicio').style.display = "none";
    document.querySelector('.nome').style.display = "none";
    document.querySelector('.instruções').style.display = "none";
    document.querySelector('.jogo').style.display = "none";
    document.querySelector('.titulo').style.display = "none";
    document.querySelector('.rodada').style.display = "none";
    document.querySelector('.placar').style.display = "none";
    document.querySelector('.escolhas').style.display = "none";
    document.querySelector('.resultado').style.display = "none";
    document.querySelector('.resultadoText').style.display = "none";
    document.getElementById('tela-final').style.display = "none";
    document.querySelector('.continuar').style.display = "none";
    document.querySelector('.botões').style.display = "none";
    document.querySelector('.reiniciar').style.display = "none";
    document.querySelector('.jogarNov').style.display = "none";
}

function iniciar() {
    esconderTelas();
    document.querySelector('.nome').style.display = "block";
}

function preparar() {
    nome = document.getElementById('inome').value;
    document.querySelector('.jog1').textContent = nome;

    if (!nome.trim()) { // Verifica não apenas se a string está vazia (""), mas também se ela contém só espaços em branco.
        alert('😅 Opa! Você precisa digitar seu nickname antes de seguir.')
        return;
    }

    rodada = 1;
    pont_jog = 0;
    pont_rob = 0;

    esconderTelas();
    document.querySelector('.instruções').style.display = "block";
}

function jogar() {
    esconderTelas();
    document.querySelector('.jogo').style.display = "block";
    document.querySelector('.titulo').style.display = "block";
    document.querySelector('.rodada').style.display = "block";
    document.querySelector('.placar').style.display = "block";
    document.querySelector('.escolhas').style.display = "grid";
    document.querySelector('.resultado').style.display = "none";    
    document.querySelector('.resultadoText').style.display = "none";

    document.querySelector('.rodada').textContent = `Rodada ${rodada}`;
}

function iniciarJogo(escolha_jogador) {
    result = document.querySelector('.resultadoText');
    opcoes = ['num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'num7', 'num8', 'num9', 'num10', 'num11', 'num12'];
    const escolha_robo = opcoes[Math.floor(Math.random() * 12)];

    if (escolha_jogador === escolha_robo) {
            esconderTelas();
            document.getElementById('tela-final').style.display = "block";
            document.querySelector('.msg_final').innerHTML = "🎉 Parabéns!"
            document.querySelector('.msg_final').style.color = '#064232';
            document.querySelector('.text_final').innerHTML = "Você acertou o número do robô e venceu o jogo!"

            document.querySelector('.botões').style.display = "block";
            document.querySelector('.reiniciar').style.display = "inline-block";
            document.querySelector('.jogarNov').style.display = "inline-block";
        } else {
            result.textContent = "Não foi dessa vez! 🤡"
            result.style.color = "#CB0404";
            pont_rob++;

            esconderTelas();
            document.querySelector('.jogo').style.display = "block";
            document.querySelector('.titulo').style.display = "none";
            document.querySelector('.rodada').style.display = "block";
            document.querySelector('.placar').style.display = "none";
            document.querySelector('.escolhas').style.display = "none";
            document.querySelector('.resultado').style.display = "flex";
            document.querySelector('.resultadoText').style.display = "block";

            document.querySelector('.resultJogador').src = imagens[escolha_jogador];
            document.querySelector('.resultRobo').src = imagens[escolha_robo];

            document.querySelector('.pont_jog').textContent = pont_jog;
            document.querySelector('.pont_rob').textContent = pont_rob;

            document.querySelector('.continuar').style.display = "block";
        }

}

function continuar() {
        
    if (rodada == 4) {
        esconderTelas();
        document.getElementById('tela-final').style.display = "block";

        document.querySelector('.msg_final').innerHTML = "🕹️ GAME OVER"
        document.querySelector('.msg_final').style.color = '#CB0404';
        document.querySelector('.text_final').innerHTML = "Você usou todas as tentativas."

        document.querySelector('.botões').style.display = "block";
        document.querySelector('.reiniciar').style.display = "inline-block";
        document.querySelector('.jogarNov').style.display = "inline-block";
    } else {
        // Volta para a tela inicial para nova tentativa
        rodada++;
        esconderTelas();
        document.querySelector('.jogo').style.display = "block";
        document.querySelector('.titulo').style.display = "block";
        document.querySelector('.rodada').style.display = "block";
        document.querySelector('.placar').style.display = "block";
        document.querySelector('.escolhas').style.display = "grid";
        document.querySelector('.resultado').style.display = "none";
        document.querySelector('.resultadoText').style.display = "none";
        document.querySelector(".rodada").textContent = `Rodada ${rodada}`
    }

}

function jogarNov() {
    rodada = 1;
    pont_jog = 0;
    pont_rob = 0;

    document.querySelector(".rodada").textContent = `Rodada ${rodada}`;
    document.querySelector('.pont_jog').textContent = pont_jog;
    document.querySelector('.pont_rob').textContent = pont_rob;

    document.querySelector('.resultJogador').src = "";
    document.querySelector('.resultRobo').src = "";

    esconderTelas();
    document.querySelector('.jogo').style.display = "block";
    document.querySelector('.titulo').style.display = "block";
    document.querySelector('.rodada').style.display = "block";
    document.querySelector('.placar').style.display = "block";
    document.querySelector('.escolhas').style.display = "grid";
    document.querySelector('.resultado').style.display = "none";
    document.querySelector('.resultadoText').style.display = "none";
}

function reiniciar() {
    rodada = 1;
    pont_jog = 0;
    pont_rob = 0;

    document.getElementById('inome').value = "";
    document.querySelector(".rodada").textContent = `Rodada ${rodada}`;
    document.querySelector('.pont_jog').textContent = pont_jog;
    document.querySelector('.pont_rob').textContent = pont_rob;

    document.querySelector('.resultJogador').src = "";
    document.querySelector('.resultRobo').src = "";

    esconderTelas();
    document.querySelector('.inicio').style.display = "flex";
}