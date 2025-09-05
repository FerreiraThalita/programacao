/* Crie um programa que melhore o procedimento Gerador() da questão anterior para que o programador possa escolher uma entre três bordas:
+-------=======------+ Borda 1     ~~~~~~~~:::::::~~~~~~~ Borda 2     <<<<<<<<------->>>>>>> Borda 3 
Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
~~~~~~~~:::::::~~~~~~~
 Portugol Studio
 Portugol Studio
 Portugol Studio
~~~~~~~~:::::::~~~~~~~ */

let result = document.querySelector('.resultado');

function gerador(msg, vs, borda) {
    let topo, base;

    switch (borda) {
        case 1:
            topo = "+----------========----------+" ;
            base = "+----------========----------+" ;
            break;
        
        case 2:
            topo = "~~~~~~~~~~::::::::::~~~~~~~~~~" ;
            base = "~~~~~~~~~~::::::::::~~~~~~~~~~" ;
            break;

        case 3:
            topo = "<<<<<<<<<<---------->>>>>>>>>>" ;
            base = "<<<<<<<<<<---------->>>>>>>>>>" ;
            break;

        default:
            topo = "**********¨¨¨¨¨¨¨¨¨¨**********" ;
            base = "**********¨¨¨¨¨¨¨¨¨¨**********" ;
            break;
    }

    result.textContent = `${topo}\n`;

    for (let i = 0; i < vs; i++) {
        result.textContent += `\t${msg}\n`;
    }

    result.textContent += base;
}

gerador("Portugol Studio", 3, 2);