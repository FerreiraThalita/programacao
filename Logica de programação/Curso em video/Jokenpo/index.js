let pontuacao_jogador = 0;
let pontuacao_maquina = 0;
let rodadasMax = 3;
let rodadasGanhasJogador1 = 0;
let rodadasGanhasJogador2 = 0;

let jogo_escolhido = "";
let modo_jogo = ""; //  Pode ser 'PVP' ou 'CPU'

let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogadorAtual = "X"; // Define o Jogador 1 ou X como usuario
let nomes = { X: "", O: "" }; // Caso seja dois jogadores
let jogoFinalizado = false;

const imagens = {
    pedra: "imagens/pedra.png",
    papel: "imagens/papel.png",
    tesoura: "imagens/tesoura.png"
};

function esconderTodasTelas() {
    document.querySelector('.jogos').style.display = 'none';
    document.querySelector('.definir_partida').style.display = 'none';
    document.getElementById('telaNome').style.display = 'none';
    document.querySelector('.container').style.display = 'none';
}

function escolha_velha() {
    jogo_escolhido = 'velha';
    esconderTodasTelas();
    document.querySelector('.definir_partida').style.display = "block";

    // Mostra as duas opções do modo de jogo
    document.querySelector('.definir_partida button:nth-child(1)').style.display = "inline-block";
    document.querySelector('.definir_partida button:nth-child(2)').style.display = "inline-block";
}

function escolha_joken() {
    jogo_escolhido = 'joken';
    esconderTodasTelas();
    document.querySelector('.tela_nome').style.display = "block";

    contra_maquina();
}

function dois_jogadores() {
    modo_jogo = "PVP";
    console.log("Modo selecionado: Dois Jogadores");
    esconderTodasTelas();
    
    // Mostra o formulário 
    document.getElementById('telaNome').style.display = "block";
}

function contra_maquina() {
    modo_jogo = "CPU";
    console.log("Modo selecionado: Contra o Robô");
    esconderTodasTelas();

    // Mostra o formulário para apenas 1 jogador
    const form = document.getElementById('telaNome');
    form.style.display = "block";

    // Esconde o input do Jogador 2
    document.querySelector(".jogador2").style.display = "none";
}

function iniciar_jogo() {
    const nome1 = document.getElementById('inome1').value.trim();
    const nome2 = document.getElementById('inome2').value.trim() || "Robô";
    const qtdRodadas = parseInt(document.getElementById('irodadas').value);

    if (isNaN(qtdRodadas) || qtdRodadas < 1) {
        alert("Informe uma quantidade válida de rodadas (mínimo 1)");
        return;
    }

    if (!nome1) {
        alert('Digite o nome do jogador 1');
        return;
    }

    if (modo_jogo === "PVP" && !nome2) {
        alert('Digite o nome do jogador 2');
        return;
    }

    rodadasMax = qtdRodadas;

    rodadasGanhasJogador1 = 0;
    rodadasGanhasJogador2 = 0;

    esconderTodasTelas();
    document.querySelector('.container').style.display = "block";

    if (jogo_escolhido === "joken") {
        document.querySelector('.Jokenpo').style.display = "block";
        document.querySelector('.jogo_velha').style.display = "none";

        document.getElementById('jogador_1').textContent = nome1;
        document.getElementById('jogador_2').textContent = (modo_jogo === "CPU") ? "Robô" : nome2;

        // Apenas mostrar tela inicial do Jokenpô
        document.getElementById('botoes_escolha').style.display = 'flex';
        document.getElementById('area_resultado').style.display = 'none';
        document.getElementById('Jogar_Novamente').style.display = 'none';
    }

    if (jogo_escolhido === "velha") {
        document.querySelector('.Jokenpo').style.display = "none";
        document.querySelector('.jogo_velha').style.display = "block";

        document.getElementById('jogador1').textContent = nome1;
        document.getElementById('jogador2').textContent = (modo_jogo === "CPU") ? "Robô" : nome2;

        iniciarJogoVelha(nome1, nome2);
    }
}

function iniciarJogoVelha(nome1, nome2) {
    tabuleiro = ["", "", "", "", "", "", "", "", ""];
    jogadorAtual = "X";
    jogoFinalizado = false;

    nomes.X = nome1;
    nomes.O = (modo_jogo === "CPU") ? "Robô" : nome2;

    document.querySelectorAll(".celula").forEach((celula, i) => {
        celula.textContent = "";
    });  // Necessário para limpar o jogo antes da nova partida

    document.getElementById("mensagemVelha").textContent = `${nomes[jogadorAtual]} começa!`;
}

function fazerJogada(pos) {
    if (tabuleiro[pos] || jogoFinalizado) return;  /* tabuleiro[pos] → se a célula já estiver ocupada (com "X" ou "O"), a jogada é ignorada.
 
    jogoFinalizado → se o jogo já terminou, não permite mais jogadas. */

    tabuleiro[pos] = jogadorAtual; // atualiza o tabuleiro com o simbolo do jogador atual (X OU O)

    document.querySelectorAll(".celula")[pos].textContent = jogadorAtual; // atualiza o tabuleiro com o simbolo do jogador na célula clicada

    if (verificarVitoria(jogadorAtual)) {
        document.getElementById("mensagemVelha").textContent = `${nomes[jogadorAtual]} venceu!`;
        jogoFinalizado = true;
        return;
    } // verifica se o jogadorAtual venceu o jogo 

    if (!tabuleiro.includes("")) {
        document.getElementById("mensagemVelha").textContent = `Empate!`;
        jogoFinalizado = true;
        return;
    } // Verifica se teve empate

    jogadorAtual = (jogadorAtual === "X") ? "O" : "X"; // Alterna o jogador

    if (modo_jogo === "CPU" && jogadorAtual === "O") {
        setTimeout(jogadaComputador, 500); // Simula a vez do robo
    } else {
        document.getElementById("mensagemVelha").textContent = `Vez de ${nomes[jogadorAtual]}`;
    } // atualiza a msg mostrando de quem é a vez no modo PVP
}

// escolhe uma posição aleatoria entre as casas ainda vazias
function jogadaComputador() {
    let posicoesDisponiveis = tabuleiro.map((v, i) => v === "" ? i : null).filter(i => i !== null);
    let escolha = posicoesDisponiveis[Math.floor(Math.random() * posicoesDisponiveis.length)];
    fazerJogada(escolha);
} 

// Verifica qual jogador ganhou a partida
function verificarVitoria(simbolo) {
    const combinacoes = [
        [0,1,2], [3,4,5], [6,7,8], // linhas
        [0,3,6], [1,4,7], [2,5,8], // colunas
        [0,4,8], [2,4,6]           // diagonais
    ];

    return combinacoes.some(comb => comb.every(i => tabuleiro[i] === simbolo));
}

function iniciarJokenpo(escolha_jogador) {
    let result = document.getElementById('resultadoTexto');
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolha_maquina = opcoes[Math.floor(Math.random() * 3)];

    // Oculta os botões e mostra área de resultado
    document.getElementById('botoes_escolha').style.display = 'none';
    document.getElementById('area_resultado').style.display = 'flex';
    document.getElementById('Jogar_Novamente').style.display = 'inline-block';

    // Atualiza as imagens escolhidas
    document.getElementById("img_jogador").src = imagens[escolha_jogador];
    document.getElementById("img_maquina").src = imagens[escolha_maquina];

    // determina o resultado
    let vencedor = "";

    if (escolha_jogador === escolha_maquina) {
        result.textContent = "Empate!";
        result.style.color = '#FF9800';
    } else if ( (escolha_jogador === 'pedra' && escolha_maquina === 'tesoura') || (escolha_jogador === 'papel' && escolha_maquina === 'pedra') ||    (escolha_jogador === 'tesoura' && escolha_maquina === 'papel')) {
                    
            result.textContent = "Você Ganhou!";
            result.style.color = "#00FF9C";
            rodadasGanhasJogador1++;
            vencedor = "jogador";
    } else {
        result.textContent = "Você perdeu!";
        result.style.color = "#FF0000";
        rodadasGanhasJogador2++;
        vencedor = "maquina";
    }

    // Atualiza o placar
    document.getElementById('pontuacao_jogador').textContent = rodadasGanhasJogador1;
    document.getElementById('pontuacao_maquina').textContent = rodadasGanhasJogador2;

    // Verifica se alguém venceu o jogo por rodadas
    const rodadasNecessarias = Math.ceil(rodadasMax / 2);
    if (rodadasGanhasJogador1 === rodadasNecessarias || rodadasGanhasJogador2 === rodadasNecessarias) {
        let nome1 = document.getElementById('jogador_1').textContent;
        let nome2 = document.getElementById('jogador_2').textContent;

        let campeao = rodadasGanhasJogador1 > rodadasGanhasJogador2 ? nome1 : nome2;

        result.textContent = `${campeao} venceu a melhor de ${rodadasMax}!`;
        document.getElementById("botoes_escolha").style.display = "none"; // Impede mais jogadas
    }

}

function reiniciarJokenpo() {
    document.getElementById('botoes_escolha').style.display = 'flex';
    document.getElementById('area_resultado').style.display = 'none';
    document.getElementById('Jogar_Novamente').style.display = 'none';
}
