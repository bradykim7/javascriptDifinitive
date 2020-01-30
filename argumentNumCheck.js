// Caution argument is not a Array , is Object
let foo = function (x,y,z ){
    if (arguments.length != 3 ){
        throw new Error("function foo called with " + arguments.length + "arguments, but need it expects 3 ");
    }
    console.log(x+y+z+'\n');
}

//foo(1,2,);

foo(1,'a','b');

// 전달인자들에 대해 검사후 함수를 실행하는 함수
// 아래의 함수에서 알 수 있듯이 , 객체는 배열의 유사한 형태를 가질 수 있는데 그 조건이 , length를 가지게 되버리면 ~
function sum (a){
    if ((a instanceof Array) // 배열이거나
        || (a && typeof a == "object") && "length" in a){ // 배열과 유사한 형태의 객체이거나

        let total = 0;
        for(let i=0;i<a.length;i++){
            let element =a[i];
            if(!element)
                continue;
            if(typeof element == "number")
                total += element;
            else
                throw new Error("sum : Argument must be Array");
        }
    }

}


// Flexible Function Examples
// Very difficult part !!!
function flexisum(a){
    let total = 0;
    console.log("[argument]" );
    console.log(a);
    console.log("argument type "+typeof(a));
    console.log("argument length"+arguments.length);
    for (let i =0; i< arguments.length; i++){
        let element = arguments[i];

        console.log("[element]");
        console.log(element);
        if(!element)    // 즉 Argument 값이  null or undefined 면 무시 하고 진행
            continue;
        let n ;

        switch(typeof element){
            case "number":
                n= element;
                break;
            case "object":
                if(element instanceof Array) {
                    n = flexisum.apply(this, element); // 배열의 처리를 위한 recursive calling
                }
                else
                    n = element.valueOf();
                break;
            case "function":
                n= element();
                break;
            case "string":
                n =parseInt(element);
                break;
            case "boolean":
                n = NaN;
                break;
        }
        if (typeof n =="number" && !isNaN(n))
            total +=n;
        else
            throw new Error("sum(): "+element +"숫자로 변환하는데 실패했음");
    }
    return total;
}
let abc = flexisum([1,2,3]);
console.log(abc);