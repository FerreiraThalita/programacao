let jogo_escolhido = ""; // 'velha' ou 'joken'
let modo_jogo = ""; // 'PVP' ou 'CPU'

function esconderTodasTelas() {
    document.querySelector('.tela_inicial').style.display = 'none';
    document.querySelector('.definir_partida').style.display = 'none';
    document.querySelector('.nomes').style.display = "none";
    document.querySelector('.jogos').style.display = "none";
    document.querySelector('.jokenpo').style.display = "none";
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
    let qtdRodadas = parseInt(document.querySelector('[name="rodadas"]').value);

    if (!nome1) {
        alert('Digite o nome do jogador 1');
        return;
    } else if (modo_jogo === "PVP" && !nome2) {
        alert('Digite o nome do jogador 2');
        return;
    } else if (isNaN(qtdRodadas) || qtdRodadas == 0) {
        alert('Informe uma quantidade válida de rodadas (mínimo 1)')
        return;
    }

    esconderTodasTelas();
    document.querySelector('.jogos').style.display = "block";

    if (jogo_escolhido === 'joken') {
        document.querySelector('.jokenpo').style.display = "block";
        document.querySelector('.jogo_velha').style.display = "none";

        // Troca o nome JOGADOR 2 por Robô
        document.getElementById('jogador_2').innerHTML = "Robô";

    } else if (jogo_escolhido === 'velha') {
        document.querySelector('.jokenpo').style.display = "none";
        document.querySelector('.jogo_velha').style.display = "block";

        document.getElementById('jogador1').textContent = nome1;
        document.getElementById('jogador2').textContent = (modo_jogo === "CPU") ? "Robô" : nome2;

        iniciarJogoVelha(nome1, nome2);
    }
}