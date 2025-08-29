function calculandoPrestacao() {
    let ivalor = document.getElementById("ivalor");
    let isalario = document.getElementById('isalario');
    let itempo = document.getElementById('itempo');
    let result = document.getElementById('resultado');

    let valor_imovel = Number(ivalor.value);
    let salario = Number(isalario.value);
    let tempo_pag = Number(itempo.value);

    let valor_limite_parcela = salario * 0.3;
    let quantidade_parcela = tempo_pag * 12;
    let valor_mensal = valor_imovel / quantidade_parcela;

    if (valor_imovel == 0 || salario == 0 || tempo_pag == 0 || isNaN(valor_imovel) || isNaN(salario) || isNaN(tempo_pag)) {
        alert('Informe os dados pedidos corretamente!!!')
        ivalor.focus();
        return;
    } else if (valor_mensal > valor_limite_parcela) {
        result.textContent = `\nInfelizmente seu empréstimo foi NEGADO!`;
        result.style.color = "red";
    } else {
        result.textContent = `\nEmpréstimo APROVADO! \n\n${quantidade_parcela} parcelas mensais \nValor: R$${valor_mensal.toFixed(2)}`;
        result.style.color = "#08CB00";
    }

}