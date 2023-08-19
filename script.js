let num1=0
let num2=0
let operator='';

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
const btn0 = document.querySelector('#btn0');
const btnDecimal = document.querySelector('#btnDecimal');
const btnEqual = document.querySelector('#btnEqual');
const resultBox = document.querySelector('#resultBox');
const numberButtons = document.querySelectorAll('.number-ops');
const operatorButtons = document.querySelectorAll('.classic-operator');

const resultText = document.createElement('p');
resultText.style.cssText = "margin-right: 10px; margin-left: auto;";
resultBox.appendChild(resultText);

//resultText.textContent = "Hello";

numberButtons.forEach(button => {
    if (operator!==''){
        resultText.textContent = '';
        button.addEventListener('click', (e) => {
            resultText.textContent += button.textContent;
        });  
    } else {
        button.addEventListener('click', (e) => {
            resultText.textContent += button.textContent;
        })
    };
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
    num1 = parseFloat(resultText.textContent);
    operator = button.textContent;
    resultText.textContent = button.textContent;
    });
});

btnAC.addEventListener('click', (e) => {
    resultText.textContent='';
    num1=0;
    num2=0;
    operator='';
});











