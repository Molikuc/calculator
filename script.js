const number = document.querySelectorAll('#number');
const result = document.getElementById('display');
let displayValue = "0";

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
    const display = result;
    display.innerText = displayValue;
}

updateDisplay();

number.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;
        inputOperand(value);
        updateDisplay();
    });
});

function inputOperand(operand){
    if(displayValue === "0" || displayValue === 0){
        displayValue = operand;
    } else {
        displayValue += operand;
    }
}