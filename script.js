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