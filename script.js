//precision is a billion
const scale = 1e10;

function add(num1, num2){
    return Math.round((num1 + num2) * scale) / scale;
}

function subtract(num1, num2){
    return Math.round((num1 - num2) * scale) / scale;
}

function multiply(num1, num2){
    return Math.round((num1 * num2) * scale) / scale;
}

function divide(num1, num2){
    return Math.round((num1 / num2) * scale) / scale;
}

