
/*
 criação dos Graus--------------------------
const grausEsfericos = listarGrausEsfericos();
const grausCilindricos = listarGrausCilindricos();

function listarGrausEsfericos() {
    const opcoes = [];

    for (let i = -15; i <= 0; i = i + 0.25) {
        opcoes.push(i);
    }
    return opcoes;
};

function listarGrausCilindricos() {
    const opcoes = [];

    for (let i = -6; i <= 0; i = i + 0.25) {
        opcoes.push(i);
    }
    return opcoes;
};
--------------------------------------
*/

function buscarLentesDisponiveis(esfericoEsquerdo, esfericoDireito, cilindricoEsquerdo, cilindricoDireito) {

    const esfericoMaximoDaLentePrime = (cilindricoEsquerdo < 0 || cilindricoDireito < 0) ? -10 : -12;
    if (
        (esfericoEsquerdo <= -3 && esfericoEsquerdo >= esfericoMaximoDaLentePrime) &&
        (esfericoDireito <= -3 && esfericoDireito >= esfericoMaximoDaLentePrime) &&
        (cilindricoEsquerdo >= -2 && cilindricoDireito >= -2)
    ) {
        document.getElementById("result").innerHTML = "<h1>Lente Prime</h1>"

    } else if (cilindricoEsquerdo >= -5 && cilindricoDireito >= -5) {
        document.getElementById("result").innerHTML = "<h1> Lente Vision</h1>"

    } else {
        document.getElementById("result").innerHTML = "<h1> Nenhuma lente encontrada</h1>"
    }
}
function chamar() {
    let esfericoEsquerdo = document.getElementById("esfericoOE").value;
    let esfericoDireito = document.getElementById("esfericoOD").value;
    let cilindricoEsquerdo = document.getElementById("cilindricoOE").value;
    let cilindricoDireito = document.getElementById("cilindricoOD").value;
    buscarLentesDisponiveis(esfericoEsquerdo, esfericoDireito, cilindricoEsquerdo, cilindricoDireito)
}