let pontuacao_jogador = 0;
let pontuacao_maquina = 0;

const imagens = {
    pedra: "imagens/pedra.png",
    papel: "imagens/papel.png",
    tesoura: "imagens/tesoura.png"
};

function iniciarJogo() {
    const input = document.getElementById('nomeJogador');
    const nome = input.value.trim()

    if (!nome) {
        alert("Digite um nome válido!")
        input.focus();
        return;
    }

    // Mostra o nome no placar
    document.getElementById('nome_exibido').textContent = nome;

    // Esconde a tela de início e mostra o jogo
    document.getElementById("tela_nome").style.display = "none";
    document.getElementById("area_jogo").style.display = "block";
}

function jogar(escolha_jogador) {
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
    if (escolha_jogador === escolha_maquina) {
        result.textContent = "Empate!";
        result.style.color = '#FF9800';
        pontuacao_jogador++;
        pontuacao_maquina++;
    } else if (escolha_jogador === 'pedra' && escolha_maquina === 'tesoura' || escolha_jogador === 'papel' && escolha_maquina === 'pedra' || escolha_jogador === 'tesoura' && escolha_maquina === 'papel') {
        result.textContent = "Você Ganhou!";
        result.style.color = "#00FF9C";
        pontuacao_jogador++;
        
    } else {
        result.textContent = "Você perdeu!";
        result.style.color = "#FF0000";
        pontuacao_maquina++;
    }

    // Atualiza o placar
    document.getElementById('pontuacao_jogador').textContent = pontuacao_jogador;
    document.getElementById('pontuacao_maquina').textContent = pontuacao_maquina;
}

function resetar() {
      document.getElementById("botoes_escolha").style.display = "flex";
      document.getElementById("area_resultado").style.display = "none";
      document.getElementById("Jogar_Novamente").style.display = "none";
      document.getElementById("resultadoTexto").textContent = "";
}

function reiniciar() {
    pontuacao_jogador = 0;
    pontuacao_maquina = 0;
    document.getElementById('pontuacao_jogador').textContent = pontuacao_jogador;
    document.getElementById('pontuacao_maquina').textContent = pontuacao_maquina;

    // Limpa as imagens das escolhas
    document.getElementById("img_jogador").src = "";
    document.getElementById("img_maquina").src = "";

    // Limpa o texto do resultado
    document.getElementById("resultadoTexto").textContent = "";

    // Volta para o estado inicial
    document.getElementById("botoes_escolha").style.display = "flex";
    document.getElementById("area_resultado").style.display = "none";
    document.getElementById("Jogar_Novamente").style.display = "none";
}