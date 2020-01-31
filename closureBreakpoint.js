// this function is inspired of Steven
// trimBreakpoint

function inspect(inspector, title){
    let expression, result;

    if("ignore" in arguments.callee)
        return;

    while(ture){
        let message ="";
        if(title)
            message = title+ "\n";
        if(expression)
            message += "\n" +expression + "=>" +result +"\n";
        else
            expression = "";

        message += "Enter an expression to evaluate";

        //input
        expression = promptt(message, expression);
        if(!expression)
            return;

        result = inspector(expression);
    }
}