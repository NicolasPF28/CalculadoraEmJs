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

let teclaClicada = false;

function teclaClicadaFalse (){

    teclaClicada = false;

}

function registrarNumero (evento){

    display.value.toLocaleString ('BR');

    if (teclaClicada == false){

        console.log ('1° if')

        display.value += evento.target.textContent;

    }
    else{

        display.value += evento.key;

        console.log ('2° if')

    }

}

function registrarOperador (evento){

    //sucesso
    if (teclaClicada == false && evento.key != '='){

        display.value +=  ` ${evento.target.textContent} `;

        teclaClicada == false;

        console.log ('1° if')

    }
    //confusão que a combinação das teclas shift e 187 resulta
    else if (evento.key == '='){

        calcularResultado ();

        teclaClicada == true;

        console.log ('2° if')
        
    }
    //sucesso
    else{

        teclaClicada == false;
        display.value += ` ${evento.key} `;

        console.log ('3° if');

    }
}

function calcularResultado (){

    parseFloat (display.value);

    for (let i = 1; i <= 10; i++){

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

    teclaClicada = false;

    //copia o texto contido no display para a área de transferencia
    textoCopiado = navigator.clipboard.writeText (display.value);

}

//organiza o que as teclas vão executar
const keydown = (evento) => {

    switch (evento.key){

        //numeros
        case '0':

            teclaClicada = true;
            registrarNumero (evento);
            break;

        case '1':

            teclaClicada = true;
            registrarNumero (evento);
            break;

        case '2':

            teclaClicada = true;
            registrarNumero (evento);
            break;

           
        case '3':

            teclaClicada = true;
            registrarNumero (evento);
            break;
        
        case '4':

            teclaClicada = true;
            registrarNumero (evento);
            break;
        
        case '5':

            teclaClicada = true;
            registrarNumero (evento);
            break;
        
        case '6':
        
            teclaClicada = true;
            registrarNumero (evento);      
            break;
        
        case '7':

            teclaClicada = true;
            registrarNumero (evento);
            break;

        case '8':

            teclaClicada = true;
            registrarNumero (evento);
            break;

        case '9':

            teclaClicada = true;
            registrarNumero (evento);
            break;

        
        //operadores
        case '+': // adição 

            teclaClicada = true;
            registrarOperador (evento);
            break;

        case '-': //subtração

            teclaClicada = true;
            registrarOperador (evento);
            break;

        case '*': //multiplicar

            teclaClicada = true;
            registrarOperador (evento);
            break;
        
        case '/': //dividir

            teclaClicada = true;
            registrarOperador (evento);
            break;

        case '=':

            teclaClicada = true;
            registrarOperador (evento);
            break;
        

        case 'Shift' && '8': //multiplicar

            teclaClicada = true;
            registrarOperador (evento);
            break;
        

        case 'Enter':

            teclaClicada = true;
            calcularResultado ();
            break;
        
        case '=': 

            teclaClicada = true;
            calcularResultado ();
            break;

        case 'Backspace':

            teclaClicada = true;
            backspace ();
            break;

        case '.':

            teclaClicada = true;
            registrarNumero (evento);
            break;

        case ',':

            teclaClicada = true;
            registrarNumero (evento);
            break;
        
        case 'c':
        
            teclaClicada = true;
            limparDisplay ();
            break;
        
    }

    teclaClicada == true;

    console.log (evento.key);
    console.log (evento.keyCode);
    
}

function mouseenter (evento){

    evento.target.style.backgroundColor = 'black';
    evento.target.style.color = 'yellow';
    evento.target.style.borderColor = 'yellow';

}

function mouseout (evento){

    evento.target.style.backgroundColor = 'yellow';
    evento.target.style.color = 'black';
    evento.target.style.borderColor = 'black';

}

//eventos de todos os elementos html

//evento dos números
numeros.forEach (evento => {

    evento.addEventListener ('click', teclaClicadaFalse);
    evento.addEventListener ('click', registrarNumero);

});

numeros.forEach (evento => {

    evento.addEventListener ('mouseenter', mouseenter);

});

numeros.forEach (evento => {

    evento.addEventListener ('mouseout', mouseout);

});

//evento dos operadores
operadores.forEach (evento => {

    evento.addEventListener ('click', teclaClicadaFalse);
    evento.addEventListener ('click', registrarOperador);

});

operadores.forEach (evento => {

    evento.addEventListener ('mouseenter', mouseenter);

});

operadores.forEach (evento => {

    evento.addEventListener ('mouseout', mouseout);

});


ponto.addEventListener ('click', registrarNumero);
ponto.addEventListener ('click', teclaClicadaFalse);
ponto.addEventListener ('mouseenter', mouseenter);
ponto.addEventListener ('mouseout', mouseout);

virgula.addEventListener ('click', registrarNumero);
virgula.addEventListener ('click', teclaClicadaFalse);
virgula.addEventListener ('mouseenter', mouseenter);
virgula.addEventListener ('mouseout', mouseout);

botaoCalcular.addEventListener ('click', calcularResultado);
botaoCalcular.addEventListener ('click', teclaClicadaFalse);
botaoCalcular.addEventListener ('mouseenter', mouseenter);
botaoCalcular.addEventListener ('mouseout', mouseout);

apagarDigito.addEventListener ('click', backspace);
apagarDigito.addEventListener ('click', teclaClicadaFalse);
apagarDigito.addEventListener ('mouseenter', mouseenter);
apagarDigito.addEventListener ('mouseout', mouseout);

c.addEventListener ('click', limparDisplay);
c.addEventListener ('click', teclaClicadaFalse);
c.addEventListener ('mouseenter', mouseenter);
c.addEventListener ('mouseout', mouseout);

copiar.addEventListener ('click', copiarTexto);
copiar.addEventListener ('click', teclaClicadaFalse);
copiar.addEventListener ('mouseenter', mouseenter);
copiar.addEventListener ('mouseout', mouseout);

document.addEventListener ('keydown', keydown);