
function calculandoReajuste() {
    let nome = document.getElementById('inome').value;
    let salario = document.getElementById('salario');
    let tempo = document.getElementById('anos');
    let sexo = document.querySelector('input[name="genero"]:checked');
    let result = document.querySelector('.resultado');

    let sal_inicial = Number(salario.value);
    let anos = Number(tempo.value);
    let genero = sexo ? sexo.value : '';
    let salario_ajustado = "";

    if (nome === "" || sal_inicial <= 0 || isNaN(sal_inicial) || genero === '') {
        alert('Preencha todos os campos corretamente!')
        return;
    }

    if (genero === "feminino") {
        if (anos < 15) {
            salario_ajustado = sal_inicial * 1.05;
        } else if (anos >= 15 && anos <= 20) {
            salario_ajustado = sal_inicial * 1.12;
        } else {
            salario_ajustado = sal_inicial * 1.23;
        }
        
    } else if (genero === 'masculino') {
        if (anos < 20) {
            salario_ajustado = sal_inicial * 1.03;
        } else if (anos >= 20 && anos <= 30) {
            salario_ajustado = sal_inicial * 1.13;
        } else {
            salario_ajustado = sal_inicial * 1.25;
        }
    }

    result.textContent = `${nome}, seu novo salário é R$${salario_ajustado}`;
}