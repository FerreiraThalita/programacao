pontuação_Jog = 0;
pontuação_Rob = 0;
pontuacao_Alvo = 0;
rodada = 1;

const imagens = {
    num1: "imagens/num_1.png",
    num2: "imagens/num_2.png",
    num3: "imagens/num_3.png",
    num4: "imagens/num_4.png",
    num5: "imagens/num_5.png",
    num6: "imagens/num_6.png"
};

function esconderTelas() {
    document.querySelector('.tela_inicial').style.display = 'none';
    document.querySelector('.nome').style.display = 'none';
    document.querySelector('.area_resultado').style.display = "none";
    document.querySelector('.inic_Jog').style.display = 'none';
    document.querySelector('.jogNov').style.display = 'none';
    document.querySelector('.reiniciar').style.display = 'none';
    document.querySelector('.continuar').style.display = 'none';
    document.querySelector('.resultadoText').style.display = "none";
}

function iniciar() {
    esconderTelas();
    document.querySelector('.nome').style.display = 'block';
}

function jogar() {
    let nome = document.getElementById('nick').value;
    document.querySelector('.jog1').textContent = nome;
    let qtdPontos = parseInt(document.getElementById("pontuacao").value);

    if (nome === "") {
        alert('Digite o nome do jogador!')
        return;
    } else if (qtdPontos <= 0 || isNaN(qtdPontos)) {
        alert('Digite a pontuação! O minimo é 1')
        return;
    }

    rodada = 1;
    pontuação_Jog = 0;
    pontuação_Rob = 0;
    pontuacao_Alvo = qtdPontos;

    esconderTelas();
    document.querySelector('.inic_Jog').style.display = 'block';
    document.querySelector('.area_resultado').style.display = "none";
    document.querySelector(".infoRodada").textContent = `Rodada ${rodada}`
}

function iniciarJog(escolha_jogador) {
    let result = document.querySelector('.resultadoText');
    let opcoes = ['num1', 'num2', 'num3', 'num4', "num5", 'num6'];
    const escolha_maquina = opcoes[Math.floor(Math.random() * 6)];

    if (escolha_jogador === escolha_maquina) {
        result.textContent = "Você Ganhou!";
        result.style.color = "#08CB00";
        pontuação_Jog++;
    } else {
        result.textContent = "O Robô Ganhou!";
        result.style.color = "#CB0404";
        pontuação_Rob++;
    }

    esconderTelas();

    //Mostra apenas a area de resultado
    document.querySelector('.inic_Jog').style.display = 'none';
    document.querySelector('.area_resultado').style.display = "flex";
    document.querySelector('.tela_final').style.display = "none";
    document.querySelector('.resultadoText').style.display = "block";

    // mostra a imagem correspondente as escolhas feitas
    document.querySelector('.img_jogador').src = imagens[escolha_jogador];
    document.querySelector('.img_robo').src = imagens[escolha_maquina];

    // atualiza o placar
    document.querySelector('.pont_jog').textContent = pontuação_Jog;
    document.querySelector('.pont_robo').textContent = pontuação_Rob;

    document.querySelector('.continuar').style.display = "inline-block";
    document.querySelector('.jogNov').style.display = "inline-block";
    document.querySelector('.reiniciar').style.display = "inline-block";

}

function continuar() {
    rodada++;

    if (pontuação_Jog === pontuacao_Alvo || pontuação_Rob === pontuacao_Alvo) {
        telaFinal();
    } else {
        esconderTelas();
        document.querySelector('.inic_Jog').style.display = 'block';
        document.querySelector('.area_resultado').style.display = 'none';
        document.querySelector('.tela_final').style.display = 'none';

        document.querySelector('.resultadoText').textContent = '';
        document.querySelector('.continuar').style.display = 'none';
    }
}

function reiniciar() {
    esconderTelas();
    document.querySelector('.tela_inicial').style.display = "flex";

    pontuação_Jog = 0;
    pontuação_Rob = 0;
    rodada = 1;

    // Limpa o nome, pontuação, placar e msg
    document.getElementById('nick').value = "";
    document.getElementById('pontuacao').value = "";
    document.querySelector('.resultadoText').textContent = "";
    document.querySelector('.resultFinal').textContent = "";
    document.querySelector('.pont_jog').textContent = "0";
    document.querySelector('.pont_robo').textContent = "0";

    // Limpa as imagens escolhidas
    document.querySelector('.img_jogador').src = "";
    document.querySelector('.img_robo').src = "";
}

function jogarNov() {
    esconderTelas();
    document.querySelector('.inic_Jog').style.display = "block";
    document.querySelector('.area_resultado').style.display = 'none';
    document.querySelector('.tela_final').style.display = 'none';
    document.querySelector('.continuar').style.display = "none";

    pontuação_Jog = 0;
    pontuação_Rob = 0;
    rodada = 1;

    document.querySelector('.resultadoText').textContent = "";
    document.querySelector('.pont_jog').textContent = "0";
    document.querySelector('.pont_robo').textContent = "0";
    document.querySelector('.img_jogador').src = "";
    document.querySelector('.img_robo').src = "";
    document.querySelector('.resultFinal').textContent = "";
}

function telaFinal() {
    esconderTelas();
    document.querySelector('.inic_Jog').style.display = 'none';
    document.querySelector('.area_resultado').style.display = 'none';
    document.querySelector('.tela_final').style.display = 'block';

    let resultFinal = document.querySelector('.resultFinal');

    if (pontuação_Jog > pontuação_Rob) {
        resultFinal.textContent = `Você venceu a partida! \u{1F3C6}`;
        resultFinal.style.color = "#08CB00";
    } else if (pontuação_Jog < pontuação_Rob) {
        resultFinal.textContent = `Robô venceu a partida! \u{1F3C6}`;
        resultFinal.style.color = "#CB0404";
    }

    document.querySelector('.resultadoText').textContent = "";

    document.querySelector('.continuar').style.display = 'none';
    document.querySelector('.jogNov').style.display = 'inline-block';
    document.querySelector('.reiniciar').style.display = 'inline-block';
}