// Variaveis gerais do Jokenpo
let jogo_escolhido = ""; // 'velha' ou 'joken'
let modo_jogo = ""; // 'PVP' ou 'CPU'

let pontuacao_Alvo = 0;
let rodadaAtual = 1;
let pontuacao_jogador = 0;
let pontuacao_maquina = 0;
let jog_vencedor = "";

const imagens = {
    pedra: "imagens/pedra.png",
    papel: "imagens/papel.png",
    tesoura: "imagens/tesoura.png"
};

// Variaveis gerais do Jogo da velha 
let jogadorAtual = "X";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let pontuacaoX = 0;
let pontuacaoO = 0;
let jogoAtivo = true;

function esconderTodasTelas() {
    document.querySelector('.tela_inicial').style.display = 'none';
    document.querySelector('.definir_partida').style.display = 'none';
    document.querySelector('.nomes').style.display = "none";
    document.querySelector('.jogos').style.display = "none";
    document.querySelector('.jokenpo').style.display = "none";
    document.querySelector('.telaInicial').style.display = "none";
    document.querySelector('.trocarJogadores').style.display = "none";
    document.querySelector('.jogarNov').style.display = "none";
}

function escolha_velha() {
    jogo_escolhido = 'velha';
    esconderTodasTelas();
    document.querySelector('.definir_partida').style.display = "block";
}

function jogadores() {
    modo_jogo = "PVP";
    esconderTodasTelas();
    document.querySelector('.nomes').style.display = "block";
}

function escolha_joken() {
    jogo_escolhido = 'joken';
    contra_robo();
    document.getElementById('voltar').style.display = "none";
}

function contra_robo() {
    modo_jogo = "CPU";
    esconderTodasTelas();

    const titulo = document.getElementById("titulo");
    titulo.innerHTML = "Escolha o nome do jogador";

    const form = document.querySelector('.nomes');
    form.style.display = "block"

    document.getElementById('jogador_2').style.display = "none";
}

function voltar() {
    esconderTodasTelas();
    document.querySelector('.definir_partida').style.display = "block";
}

function iniciarJogo() {
    let nome1 = document.getElementById("nome1").value;
    let nome2 = document.getElementById('nome2').value || "Robô";
    let qtdPontos = parseInt(document.querySelector('[name="rodadas"]').value);

    if (!nome1) {
        alert('Digite o nome do jogador 1');
        return;
    } else if (modo_jogo === "PVP" && !nome2) {
        alert('Digite o nome do jogador 2');
        return;
    } else if (isNaN(qtdPontos) || qtdPontos == 0) {
        alert('Informe uma quantidade válida de rodadas (mínimo 1)')
        return;
    }

    jog_vencedor = nome1 || nome2;
    pontuacao_Alvo = qtdPontos;
    rodadaAtual = 1;
    pontuacao_jogador = 0;
    pontuacao_maquina = 0;
    esconderTodasTelas();
    document.querySelector('.jogos').style.display = "block";

    if (jogo_escolhido === 'joken') {
        // Troca o nome JOGADOR 1 pelo nome escolhido
        document.querySelector('.jog1').textContent = nome1;

        // Troca o nome JOGADOR 2 por Robô
        document.querySelector('.jog2').textContent = "Robô";

        mostrarTelaJoken();

    } else if (jogo_escolhido === 'velha') {
        document.querySelector('.jokenpo').style.display = "none";
        document.querySelector('.jogo_velha').style.display = "block";

        document.querySelector('.jog1').textContent = nome1;
        document.querySelector('.jog2').textContent = (modo_jogo === "CPU") ? "Robô" : nome2;

        iniciarJogoVelha(nome1, nome2);
    }
}

function mostrarTelaJoken() {
    document.querySelector('.jokenpo').style.display = 'block';
    document.querySelector('.jogo_velha').style.display = 'none';
    document.querySelector('.telaInicial').style.display = 'inline-block';
    document.querySelector('.trocarJogadores').style.display = 'inline-block';

    document.getElementById("infoRodada").textContent = `Rodada ${rodadaAtual}`;
}

function jogar(escolha_jogador) {
    let result = document.getElementById('resultadoRodada');
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolha_maquina = opcoes[Math.floor(Math.random() * 3)];

    // determina o resultado
    if (escolha_jogador === escolha_maquina) {
        result.textContent = "Empate!";
        result.style.color = '#FF9800';
    } else if (escolha_jogador === 'pedra' && escolha_maquina === 'tesoura' || escolha_jogador === 'papel' && escolha_maquina === 'pedra' || escolha_jogador === 'tesoura' && escolha_maquina === 'papel') {
        result.textContent = "Você Ganhou!";
        result.style.color = "#4A9782";
        pontuacao_jogador++;
        
    } else {
        result.textContent = "Você perdeu!";
        result.style.color = "#FF0000";
        pontuacao_maquina++;
    }

    // Oculta os botões e mostra área de resultado
    document.querySelector('.botoes_joken').style.display = 'none';
    document.querySelector('.areaResultado').style.display = 'flex';

    // Atualiza as imagens escolhidas
    document.getElementById("img_jogador").src = imagens[escolha_jogador];
    document.getElementById("img_maquina").src = imagens[escolha_maquina];

    // Atualiza o placar
    document.querySelector('.pontuacao_jogador').textContent = pontuacao_jogador;
    document.querySelector('.pontuacao_maquina').textContent = pontuacao_maquina;

    document.querySelector('.Continuar').style.display = 'block';
    document.querySelector('.telaInicial').style.display = 'none';
    document.querySelector('.trocarJogadores').style.display = 'none';
}

function continuarRodada() {
    rodadaAtual++;

    // Verifica se alguém venceu
    if (pontuacao_jogador >= pontuacao_Alvo || pontuacao_maquina >= pontuacao_Alvo) {
        mostrarResultadoFinal();
    } else {
        document.querySelector('.jokenpo').style.display = 'block';
        document.querySelector('.jogo_velha').style.display = 'none';

        document.querySelector(".botoes_joken").style.display = "block";
        document.querySelector(".areaResultado").style.display = "none";
        document.getElementById("infoRodada").textContent = `Rodada ${rodadaAtual}`;
        document.getElementById("resultadoRodada").textContent = "";
        document.querySelector(".Continuar").style.display = "none";
        document.querySelector('.telaInicial').style.display = 'inline-block';
        document.querySelector('.trocarJogadores').style.display = 'inline-block';
    }
}

function mostrarResultadoFinal() {
    let resultFinal = document.getElementById("resultadoFinal");

    if (pontuacao_jogador > pontuacao_maquina) {
        resultFinal.textContent = `${jog_vencedor} venceu a partida!`;
        resultFinal.style.color = "#4A9782";
    } else if (pontuacao_jogador < pontuacao_maquina) {
        resultFinal.textContent = "Robô venceu a partida!";
        resultFinal.style.color = "#FF0000";
    } else {
        resultFinal.textContent = "A partida terminou empatada!";
        resultFinal.style.color = "#FF9800";
    }

    esconderTodasTelas();
    document.querySelector(".Continuar").style.display = "none";
    document.querySelector('.tela_final').style.display = 'block';
    document.querySelector('.telaInicial').style.display = "inline-block";
    document.querySelector('.trocarJogadores').style.display = "inline-block";
    document.querySelector('.jogarNov').style.display = "inline-block";
    document.getElementById('resultadoFinal').style.display = 'block';
}

function tela_Inicial() {
    esconderTodasTelas();
    document.querySelector('.tela_inicial').style.display = 'block';
    document.getElementById('resultadoFinal').style.display = 'none';
}

function trocar_Jogadores() {
    rodadaAtual = 1;
    pontuacao_jogador = 0;
    pontuacao_maquina = 0;
    jog_vencedor = "";

    esconderTodasTelas();

    // Limpa os dados de entrada
    document.getElementById("nome1").value = "";
    document.getElementById("nome2").value = "";
    document.querySelector('[name="rodadas"]').value = "";

    // Limpa o placar 
    document.querySelector('.pontuacao_jogador').textContent = "0";
    document.querySelector('.pontuacao_maquina').textContent = "0";

    // Limpa as imagens e resultado anterior
    document.getElementById('img_jogador').textContent = '';
    document.getElementById('img_maquina').textContent = '';
    document.getElementById('resultadoRodada').textContent = '';

    // Oculta área de resultado e mostra os botões de escolha
    document.querySelector('.areaResultado').style.display = 'none';
    document.querySelector('.botoes_joken').style.display = 'block';
    document.querySelector('.Continuar').style.display = 'none';

    // Oculta o resultado Final
    document.getElementById('resultadoFinal').textContent = "";
    document.getElementById('resultadoFinal').style.display = 'none';

    if (jogo_escolhido === 'joken') {
        document.querySelector('.nomes').style.display = "block";
    } else if (jogo_escolhido === 'velha') {
        document.querySelector('.definir_partida').style.display = 'block';
    }
    
}

function reiniciarJoken() {
    // Zera as variáveis globais 
    jogo_escolhido = "";
    modo_jogo = "";
    pontuacao_Alvo = 0;
    rodadaAtual = 1;
    pontuacao_jogador = 0;
    pontuacao_maquina = 0;
    jog_vencedor = "";

    // Limpa campos de entrada
    document.getElementById('nome1').value = "";
    document.getElementById('nome2').value = "";
    document.querySelector('[name="rodadas"]').value = "";

    // Limpa placar e imagens
    document.querySelector('.pontuacao_jogador').textContent = '';
    document.querySelector('.pontuacao_maquina').textContent = '';
    document.getElementById('img_jogador').textContent = '';
    document.getElementById('img_maquina').textContent = '';
    document.getElementById('resultadoRodada').textContent = '';
    document.getElementById('resultadoFinal').textContent = '';

    // Oculta área de resultado e mostra os botões de escolha
    document.querySelector('.areaResultado').style.display = 'none';
    document.querySelector('.botoes_joken').style.display = 'block';

    tela_Inicial();
}

function jogar_Nov() {
    rodadaAtual = 1;
    pontuacao_jogador = 0;
    pontuacao_maquina = 0;

    esconderTodasTelas();
    document.querySelector('.jogos').style.display = "block";

    // Limpa o placar 
    document.querySelector('.pontuacao_jogador').textContent = "0";
    document.querySelector('.pontuacao_maquina').textContent = "0";

    // Limpa as imagens e resultado anterior
    document.getElementById('img_jogador').textContent = '';
    document.getElementById('img_maquina').textContent = '';
    document.getElementById('resultadoRodada').textContent = '';

    // Oculta área de resultado e mostra os botões de escolha
    document.querySelector('.areaResultado').style.display = 'none';
    document.querySelector('.botoes_joken').style.display = 'block';
    document.querySelector('.Continuar').style.display = 'none';

    // Oculta o resultado Final
    document.getElementById('resultadoFinal').textContent = "";
    document.getElementById('resultadoFinal').style.display = 'none';

    if (jogo_escolhido === 'joken') {
        mostrarTelaJoken();
    } else if (jogo_escolhido === 'velha') {
        document.querySelector('.jogo_velha').style.display = "block";
        iniciarJogoVelha(document.querySelector('.jog1').textContent, document.querySelector('.jog2').textContent);
    }
}