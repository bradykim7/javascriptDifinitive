function makefunc(x){
    return function (){return x};
}

let a = [makefunc(0),makefunc(1),makefunc(2)];

console.log(a[0]); // [Function]
console.log(a[0]()); // 0
console.log(a[1]()); // 1
console.log(a[2]()); // 2

// 호출 될때 마다 다른 정수값을 반환
// closure x
// callee == 현재 실행 중인 함수 , es6에 삭제 될꺼라고 했는데 결과를 모름 ...
let uniqueID = function(){
    if(!arguments.callee.id)
        arguments.callee.id =0;
    return arguments.callee.id++;
}
a = []
a.push(uniqueID());
a.push(uniqueID());
a.push(uniqueID());
console.log(a);

// closure o
let uniqreIDclosure = (function(){
    let id = 0;

    return function() { return id++};
})

// closure 를 사용한 private property
// closure를 사용하는 이유는 은닉 때문에 그런 것같다. 보통 함수 안에서의 함수 호출을 하는걸 의미한다고한다.
function makeProperty(o, name , predicate){
    let value; // property

    o["get" + name] = function() {
        return value;
    }

    o["set"+ name] = function(v) {
        if(predicate && !predicate(v))
            throw new Error("set"+ name +": invalid value " + v);
        else
            value = v;
    }
}

let o ={};
makeProperty(o, "Name", function(x) {return typeof x == "string";} );
console.log(o);
o.setName("Frank"); // property setting
// v == Frank

console.log(o.getName()); // property reading
o.setName(0); // wrong data type property setting
