// 함수 f를 객채 o의 메소드로 하여 호출하는 독립형 함수를 반환 시키는 함
// 메소드를 함수에 전달하려고 할떄 유용한 코드
// 함수를 그 함수의 객체와 연결하지 않으면, 그 연관 관계는 소실되며 전달한 메서드는 일반 함수처럼 호출 된다 .

function bindMethod(/* object */ o, /* function */ f){
    return function(){return f.apply(o,arguments)};
    // f.apply(o,arguments) == o.m(arguments) 와 같은 표현 기억하자 !
}

function bindArguments(/*function */ f, /* initial arguments */ ){
    let boundArgs = arguments;
    return function(){
        let args = [];

        for(let i =1; i<boundArgs.length; i++){
            args.push(boundArgs[i]);
        }
        for(let i =0; i<arguments.length; i++){
            args.push(arguments[i]);

        }
        return f.apply(this, args);
    }
}


function x (a ){
    return a;
}
console.log(bindArguments(x(1).arguments));
