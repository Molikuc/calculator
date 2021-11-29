const number = document.querySelectorAll('#number');
const displayResult = document.getElementById('display');
const operator = document.querySelectorAll('#operator');
const equal = document.getElementById("equal");
const clear = document.querySelector("#clear");
const percent = document.querySelector('#percent');
const backspace = document.querySelector("#backspace");
let displayValue = "0";
let ope;
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result= null;



/* different function for different operator */
function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        return "STAHP";
    } else {
        return a/b;
    }
}

/* function for putting everything together */
function operate(a,b,op){
    if(op === "+"){
        return add(a,b);
    }
    else if(op === "-"){
        return substract(a,b);
    }
    else if(op === "*"){
        return multiply(a,b);
    }
    else if(op === "/"){
        return divide(a,b);
    }
}


function updateDisplay(){
    const display = displayResult;
    display.innerText = displayValue;
    if(displayValue.length > 10){
        display.innerText = displayValue.substring(0,10);
    }
}

updateDisplay();

/* Goes to every button on click and get the function needed (equals, operator , etc...) */
number.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;
        inputOperand(value);
        updateDisplay();
    });
});

operator.forEach((button) => {
    button.addEventListener('click', () => {
        ope = button.value;
        inputOperator(ope);
        updateDisplay();
    });
});

equal.addEventListener('click', () => {
    equals();
    updateDisplay();
});

clear.onclick = () => {
    clearDisplay(); 
    updateDisplay()
};

percent.onclick = () =>{
    inputPercent(displayValue);
    updateDisplay();
};

backspace.onclick = () =>{
    backDelete();
    updateDisplay();
}

window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    console.log(key);
    key.click();
});

/* Get the operand and set the display on screen */
function inputOperand(operand){
    if(firstOperator === null){
        if(displayValue === "0" || displayValue === 0){
            displayValue = operand;
        } else if(displayValue === firstOperand){
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if(displayValue === firstOperand){
            displayValue = operand;
        } else{
            displayValue += operand;
        }
    }
}

/* Get the operator for the first and more operation and set the result of every operation */
function inputOperator(operator){
    if(firstOperator != null && secondOperator === null){
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand),Number(secondOperand),firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    }else if(firstOperator != null && secondOperator != null){
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    }
    else{
        firstOperator = operator;
        firstOperand = displayValue;
    }

}


/* Get the result of the total operation when the button equal is pressed */
function equals(){
    if(firstOperator === null){
        displayValue = displayValue;
    } else if(secondOperator != null){
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if(result === "STAHP"){
            displayValue = "STAHP";
        } else{
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            firstOperator = null;
            secondOperand = null;
            secondOperator = null;
            result = null;
        }
    }else{
        secondOperand = displayValue;
        result = operate(Number(firstOperand),Number(secondOperand), firstOperator);
        if(result === "STAHP"){
            displayValue = "STAHP";
        } else{
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            firstOperator = null;
            secondOperand = null;
            result = null;
        }
    }
}

function clearDisplay(){
    displayValue = "0";
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function inputPercent(num){
    displayValue = (num/100);
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}

function backDelete(){
    displayValue = displayValue.toString().slice(0, -1);
    if(displayValue === ""){
        displayValue = "0";
    }
    console.log(displayValue);
};