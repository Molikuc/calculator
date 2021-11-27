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

