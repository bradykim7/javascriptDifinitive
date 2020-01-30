let calculator ={
    operand1: 1,
    operand2: 2,
    compute : function () {
        this.result = this.operand1 + this.operand2;
    }
};

calculator.compute();
console.log(calculator.result);