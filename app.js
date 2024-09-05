
function sortear() {

    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    let numerosAleatorios = [];
    let numero;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = obterNumerosAleatorios(doNumero, ateNumero);

        while (numerosAleatorios.includes(numero)) {
            numero = obterNumerosAleatorios(doNumero,ateNumero);
        }

        numerosAleatorios.push(numero);
    }

    let texto = document.getElementById('resultado');

    if (quantidadeDeNumeros > 1) {
        texto.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosAleatorios}</label>`;
    } else {
        texto.innerHTML = `<label class="texto__paragrafo">Número sorteado: ${numerosAleatorios}</label>`;
    }

    alterarStatusReiniciar();

    console.log(numerosAleatorios);
}

function obterNumerosAleatorios(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function alterarStatusReiniciar() {
    const reiniciar = document.getElementById('btn-reiniciar')
    if(reiniciar.classList.contains('container__botao-desabilitado')) {

        reiniciar.classList.remove('container__botao-desabilitado');
        reiniciar.classList.add('container__botao');

    } else {

        reiniciar.classList.remove('container__botao');
        reiniciar.classList.add('container__botao-desabilitado');

    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';

    document.getElementById('resultado').inner = `<label class="texto__paragrafo">Número(s) sorteado(s):  nenhum até agora</label>`;

    alterarStatusReiniciar();
}

