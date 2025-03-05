const screen = document.querySelector(".screen");
let expression = createExpression();
const buttons = document.querySelector(".buttons");
const scale = 1e10;

function createExpression(){
    return {
        num1: null,
        operator: null,
        num2: null,
    };
}

function display(result){
    screen.innerText = result;
}

function clear(){
    screen.innerText = "";
}

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

function operate(operator, num1, num2){
    let result;
    switch(operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            break;
    }

    return result;
}

buttons.addEventListener("click", function(event){
    let id = event.target.id;
    switch(id){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if(expression.operator === null){
                expression.num1 = +expression.num1 + id;
                display(+expression.num1);
            }
            else{
                expression.num2 = +expression.num2 + id;
                display(+expression.num2);
            }
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            if(expression.operator !== null && expression.num2 !== null){
                const result = operate(expression.operator, +expression.num1, +expression.num2);
                display(result);
                expression.num1 = result;
                expression.num2 = null;
            }
            expression.operator = id;
            break;
        case "=":
            if(expression.operator !== null && expression.num2){
                let result = operate(expression.operator, +expression.num1, +expression.num2);
                display(result);
                expression.num1 = result;
                expression.num2 = null;
            }
            break;
        case "AC":
            clear();
            expression = null;
            expression = createExpression();
            expression.num1 = 0;
            display(expression.num1);
            break;
        case ".":
            break;
    }
});




