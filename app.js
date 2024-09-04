
function sortear() {

    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document .getElementById('ate').value);

    let numerosAleatorios = [];
    let numero;
    
    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = obterNumerosAleatorios(doNumero, ateNumero);
        numerosAleatorios.push(numero);
    }

    console.log(numerosAleatorios);
}

function obterNumerosAleatorios(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}
