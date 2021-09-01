const numeros = document.querySelectorAll ('[id*=numero]');
const operadores = document.querySelectorAll ('[id*=operador]');
const display = document.querySelector ('#display');
const botaoCalcular = document.querySelector ('#botaoCalcular');

const ponto = document.querySelector ('#ponto');
const virgula = document.querySelector ('#virgula');

const apagarDigito = document.querySelector ('#apagarDigito');
const c = document.querySelector ('#c');
const copiar = document.querySelector ('#copiar');

let textoCopiado = '';

function registrarNumero (evento){

    display.value.toLocaleString ('BR');

    display.value += evento.target.textContent;

}

function registrarOperador (evento){

    display.value +=  ` ${evento.target.textContent} `;

}

function calcularResultado (){

    parseFloat (display.value);

    for (let i = 1; i <= 499; i++){

        display.value = display.value.replace (',','.');

    }

    display.value = eval (display.value).toLocaleString ('BR');

}

function backspace (){

    display.value = display.value.slice (0, -1)

}

function limparDisplay (){

    display.value = '';

}

function copiarTexto (){

    //copia o texto contido no display para a área de transferencia
    textoCopiado = navigator.clipboard.writeText (display.value);

}

//organiza o que as teclas vão executar
const mapaTeclado = {

    '0'         : 'numeroZero',
    '1'         : 'numeroUm',
    '2'         : 'numeroDois',
    '3'         : 'numeroTres',
    '4'         : 'numeroQuatro',
    '5'         : 'numeroCinco',
    '6'         : 'numeroSeis',
    '7'         : 'numeroSete',
    '8'         : 'numeroOito',
    '9'         : 'numeroNove',
    '/'         : 'operadorDividir',
    '*'         : 'operadorMultiplicar',
    '-'         : 'operadorSubtrair',
    '+'         : 'operadorAdicionar',
    '='         : 'botaoCalcular',
    'Enter'     : 'botaoCalcular',
    'Backspace' : 'apagarDigito',
    'c'         : 'c',
    'Escape'    : 'limparCalculo',
    ','         : 'virgula',
    '.'         : 'ponto',
}

//eventos de todos os elementos html

//evento dos números
numeros.forEach (evento => {

    evento.addEventListener ('click', registrarNumero);

});

//evento dos operadores
operadores.forEach (evento => {

    evento.addEventListener ('click', registrarOperador);

});

ponto.addEventListener ('click', registrarNumero);

virgula.addEventListener ('click', registrarNumero);

botaoCalcular.addEventListener ('click', calcularResultado);

apagarDigito.addEventListener ('click', backspace);

c.addEventListener ('click', limparDisplay);

copiar.addEventListener ('click', copiarTexto);

const eventoTeclado = (evento) => {

    const key = evento.key;
    const teclaPermitida = () => Object.keys (mapaTeclado).indexOf (tecla) !== -1;
    if (teclaPermitida()) document.getElementById (mapaTeclado[key]).click ();

}

document.addEventListener ('keydown', mapearTeclado);