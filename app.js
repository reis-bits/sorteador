// Função que sorteia os número com base nos valores obtidos no HTML.
function sortear() {

    // Declara, a quantidade dos números, de qual número e até qual número vamos sortear.
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    // Valida se a quantidade de números ou o intervalo não foram preenchidos
    if (isNaN(quantidadeDeNumeros) || isNaN(doNumero) || isNaN(ateNumero)) {
        alert('Insira uma quantidade de números e um espaço amostral válido!');
        return;
    }

    // Array vazio que eventualmente receberá os números aleatórios.
    let numerosAleatorios = [];
    // Variável com o número obtido através do laço abaixo
    let numero;

    // Declara um índice como zero, e dá a condição de que, enquanto o índice for menor que a quantidade de números, adicionar mais um ao valor do índice a cada iteração até que fique igual a quantidade de números.
    for (let i = 0; i < quantidadeDeNumeros; i++) {

        // Obtém um número com a função que obtém os números aleatórios do número escolhido até o numero escolhido no espaço amostral.
        numero = obterNumerosAleatorios(doNumero, ateNumero);

        // Enquanto a lista (array) de números incluir o número pego, a função deve se repetir até tirar um número diferente.
        while (numerosAleatorios.includes(numero)) {
            numero = obterNumerosAleatorios(doNumero,ateNumero);
        }

        // Por fim, empurra o número obtido dentro do Array.
        numerosAleatorios.push(numero);
    }

    // Declara a variável "texto" que recebe o resultado.
    let texto = document.getElementById('resultado');

    // E se, a quantidade de números for maior que um, o texto recebe uma frase no plural, do contrário, recebe no singular.
    if (quantidadeDeNumeros > 1) {
        texto.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosAleatorios}</label>`;
    } else {
        texto.innerHTML = `<label class="texto__paragrafo">Número sorteado: ${numerosAleatorios}</label>`;
    }

    // Por fim, chama a função alterarStatusReiniciar
    alterarStatusReiniciar();

    // Informações do dev
    console.log(numerosAleatorios);
}

function obterNumerosAleatorios(min, max) {
    // Gera um número decimal aleatório entre 0 (inclusivo) e 1 (exclusivo)
    // Multiplica esse número pelo intervalo (max - min + 1) para cobrir todo o intervalo desejado
    // Adiciona 'min' para ajustar o intervalo de [0, max-min+1) para [min, max+1)
    // 'parseInt' arredonda para baixo para obter um número inteiro no intervalo [min, max]
    return parseInt(Math.random() * (max - min + 1) + min);
}

// Função que altera o status do botão reiniciar.
function alterarStatusReiniciar() {
    
    // Declara o botão de reiniciar.
    const reiniciar = document.getElementById('btn-reiniciar')

    // Condicionais que dizem que, se um botão contém a classe de desabilitado, que esta deve ser removida, e adicionada a de habilitado.
    if(reiniciar.classList.contains('container__botao-desabilitado')) {

        reiniciar.classList.remove('container__botao-desabilitado');
        reiniciar.classList.add('container__botao');

    } else {
        // Do contrário, ele faz o processo inverso
        reiniciar.classList.remove('container__botao');
        reiniciar.classList.add('container__botao-desabilitado');

    }
    // Essa função é chamada no uso do botão de sortear e no do reiniciar, porque é responsável por habilitar e desabilitar o botão de reiniciar.
}


// Reinicia as variáveis do JavaSript e limpa o HTML, bloco de código maçante que já vi em todos esses exercícios.
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';

    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Número(s) sorteado(s):  nenhum até agora</label>`;

    alterarStatusReiniciar();
}

