function contando() {
    let result = document.querySelector('.resultado');
    let num = Number(document.getElementById('inum').value);

    let mostrar = "";
    let cont = 1;

    if (num <= 0) {
        alert('Informe o valor corretamente! \nObs: no minimo 1');
        return;
    } else {
        while (cont <= num) {
        console.log(cont);
        mostrar += cont + " ";
        cont++;
        }
    }

    result.textContent = `${mostrar} Acabou!`;
}