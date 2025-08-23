pontuação_Jog = 0;
pontuação_Rob = 0;
rodada = 1;

const imagens = {
    num1: imagens/num_1.png,
    num2: imagens/num_2.png,
    num3: imagens/num_3.png,
    num4: imagens/num_4.png,
    num5: imagens/num_5.png,
    num6: imagens/num_6.png
};

function esconderTelas() {
    document.querySelector('.tela_inicial').style.display = 'none';
    document.querySelector('.iniciar').style.display = 'none';
    document.querySelector('.nome').style.display = 'none';
    document.querySelector('.jogo').style.display = 'none';
    document.querySelector('.jogNov').style.display = 'none';
    document.querySelector('.continuar').style.display = 'none';
}

function iniciar() {
    esconderTelas();
    document.querySelector('.nome').style.display = 'block';
}

function jogar() {
    let nome = document.getElementById('nick').value;
    document.querySelector('.jog1').textContent = nome;

    if (nome = "") {
        alert('Digite o nome do jogador!')
        return;
    }

    rodada = 1;
    pontuação_Jog = 0;
    pontuação_Rob = 0;

    esconderTelas();
    document.querySelector('.jogo').style.display = "block";
    document.querySelector(".infoRodada").textContent = `Rodada ${rodada}`
}

function iniciarJog() {
    
}