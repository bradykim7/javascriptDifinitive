function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

function operate(operator, operand1, operand2){
    return operator(operand1.operand2)
}

let i = operate(add, operate(add,2,3),operate(multiply,4,5);

let operators ={
    add : function(x,y){
        return x+y;
    },
    subtract : function (x,y) {
        return x-y;
    },
    multiply : function (x,y){
        return x*y;
    },
    divide : function(x,y){
        return x/y;
    },
    pow : Math.pow

};

function operate2(op_name, operand1, operand2){
    if(typeof operators[op_name] == "function")
        return operators[op_name](operand1, operand2);
    else
        throw "unknown operator"
};

let v = operate2("add", "hello",operate2("add"," ","World"));

let k  =operate2("pow",10,2);