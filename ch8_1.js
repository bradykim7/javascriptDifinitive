// return 문이 없는 함수로써 반환하는 값은 undefined 이다
function print(msg){
    document.write(msg, "<br>");
}

//  두점의 좌표 구하느 ㄴ함수
function distance (x1, y1, x2, y2){
    let dx = x2-x1;
    let dy = y2-y1;

    return Math.sqrt(dx*dx , dy*dy);
}

// factorial 연산

function factorial(x){
    if(x <= 1)
        return 1;
    return x * factorial(x-1);
}

// argument  생략가능한 전달인자

function copyPropertNamesToArray(o, /* optional */ a){
    // a = a || []; 와 같은 표현
    if (!a) // a == undifiend or a == null 이면
        a=[];
    for (let property in o ){
        a.push(property);
    }

    return a;
}
// use

copyPropertNamesToArray(o);
copyPropertNamesToArray(p ,a );