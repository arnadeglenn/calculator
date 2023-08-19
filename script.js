let num1
let num2
let operator

function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    if (b===0) {
        return "Your Brain DNE!"
    } else {
        return a/b;
    };
};

function remainder(a,b) {
    if (b===0) {
        return "Your Brain DNE!"
    } else {
        return a%b;
    };
}

function operate (numA,oper,numB) {
    if (oper === "+") {
        return add(numA,numB);
    } else if (oper === "-") {
        return subtract(numA,numB);
    } else if (oper === '*') {
        return multiply(numA,numB);
    } else if (oper === '/') {
        return divide(numA,numB);
    } else if (oper === '%') {
        return remainder(numA,numB);
    } else {
        return "OOPS! Pick an operator!"
    }
};

const btnAC = document.querySelector('#btnAC');
const btnNeg = document.querySelector('#btnNeg');
const btnRemain = document.querySelector('#btnRemain');
const btnAdd = document.querySelector('#btnAdd');
const btn9 = document.querySelector('#btn9');
const btn8 = document.querySelector('#btn8');
const btn7 = document.querySelector('#btn7');
const btnSubtract = document.querySelector('#btnSubtract');
const btn6 = document.querySelector('#btn6');
const btn5 = document.querySelector('#btn5');
const btn4 = document.querySelector('#btn4');
const btnMultiply = document.querySelector('#btnMultiply');
const btn3 = document.querySelector('#btn3');
const btn2 = document.querySelector('#btn2');
const btn1 = document.querySelector('#btn1');
const btnDivide = document.querySelector('#btnDivide');
const btn0 = document.querySelector('#btn0');
const btnDecimal = document.querySelector('#btnDecimal');
const btnEqual = document.querySelector('#btnEqual');
const resultBox = document.querySelector('#resultBox');

const resultText = document.createElement('p');
resultText.style.cssText = "margin-right: 10px; margin-left: auto;";
resultBox.appendChild(resultText);


resultText.textContent = "Hello";


