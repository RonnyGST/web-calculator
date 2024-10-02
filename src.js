
let display = document.getElementById('display');

let num1Display = document.getElementById('number1');

let num2Display = document.getElementById('number2');

let operatorDisplay = document.getElementById('operator');

let resultDisplay = document.getElementById('result');


//Variáveis de checagem de qual operação está sendo realizada
let symbolPressed = false;
let dotPressed = false;

let addOperator = false;
let subOperator = false;
let multOperator = false;
let divOperator = false;
let percentOperator = false;
let powOperator = false;

//Variáveis que representam os números que serão calculados no back-end
let num1 = "";
let num2 = "";


function dot(){
    dotPressed = true;
    if (!symbolPressed) {
        if(dotPressed){
            num1 = num1 + `.`;
            num1Display.innerHTML = num1;
            dotPressed = false;
        }
    }else{
        if(dotPressed){
            num2 = num2 + `.`;
            num2Display.innerHTML = num2;
            dotPressed = false;
        }
    }
}

//Função que mostra os números ao digitar seus respectivos botões
function numbers(x){
    if (!symbolPressed) {
        num1 = num1 + `${x}`;
        num1Display.innerHTML = num1;
    } else {
        num2 = num2 + `${x}`;
        //Se estiver usando porcentagem
        if (percentOperator) {
            num2Display.innerHTML = `(${num2})`;
        } else {
            num2Display.innerHTML = num2;
        }
    }
}



//Funções dos operadores matemáticos
function add(){
    if (!symbolPressed) {
        addOperator = true;
        operatorDisplay.innerHTML = "+";
    }
    symbolPressed = true;
}

function subtract(){
     if (!symbolPressed) {
        subOperator = true;
        operatorDisplay.innerHTML = "-";
    }
    symbolPressed = true;
}

function multiply(){
    if (!symbolPressed) {
        multOperator = true;
        operatorDisplay.innerHTML = "x";
    }
    symbolPressed = true;
}

function divide(){
    if (!symbolPressed) {
        divOperator = true;
        operatorDisplay.innerHTML = "÷";
    }
    symbolPressed = true;
}

function percent(){
    if (!symbolPressed) {
        percentOperator = true;
        operatorDisplay.innerHTML = "%";
    }
    symbolPressed = true;
}

function pow(){
    if (!symbolPressed) {
        powOperator = true;
        operatorDisplay.innerHTML = "^";
    }
    symbolPressed = true;
}
function powElev(x, y){
    let z = x;
    
    for (let i = 1; i < y; i++) {
        x *= z;
    }
    return x;
}


//Função que mostra o resultado
function showResult(){
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    let powResult = powElev(a, b);
    
    if (addOperator) {
        resultDisplay.innerHTML = a + b;
    } else if (subOperator) {
        resultDisplay.innerHTML = a - b;
    } else if (multOperator) {
        resultDisplay.innerHTML = a * b;
    } else if (divOperator) {
        resultDisplay.innerHTML = a / b;
    } else if (percentOperator) {
        resultDisplay.innerHTML = (a*b)/100;
    } else if (powOperator) {
        resultDisplay.innerHTML = powResult;
    }
    
    symbolPressed = false;
    addOperator = false;
    subOperator = false;
    multOperator = false;
    divOperator = false;
    percentOperator = false;
    powOperator = false;
}



//Função que limpa o display
function clearDisplay(){
    num1 = "";
    num2 = "";
    num1Display.innerHTML = "";
    num2Display.innerHTML = "";
    operatorDisplay.innerHTML = "";
    resultDisplay.innerHTML = "";
    
    addOperator = false;
    subOperator = false;
    multOperator = false;
    divOperator = false;
    percentOperator = false;
    powOperator = false;
    
    symbolPressed = false;
}