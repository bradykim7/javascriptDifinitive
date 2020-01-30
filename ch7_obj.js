let book  = {};

// Object property
book.title = "JAVASCRIPT : The Definitive Guide";

book.chapter1 = new Object();
book.chapter1.title = "Introduction to JavaScript";
book.chapter1.pages =11;

book.chapter2 = {title:"Lexical Structure", pages:6};


function DisplayPropertyNames(obj){
    let names = "";
    for(let name in obj)
        names += name +'\n';
    console.log(names);
}

DisplayPropertyNames(book);


let o = new Object();

// not recommend because undefined can return
if ("x" in o )
    o.x = 1;
// alternative === 와 == 의 차이는 ===(!==) 은 null과 undefined를 구분하여 비교하는데 사용
if (o.x !== undefined)
    o.x = 1;

// property delete process
delete book.chapter2;

// property can express with array~
// object.property
// object["property"]
/*
let addr = "";
for(let i=0;i<4;i++){
    addr += customer["address" +i] + "\n";
}
console.log(addr);
*/

// toString() 함수는 문자열로써 변환시킨다.
let s= {x:1, y:1}.toString();
console.log(typeof(s));
console.log(s);

// Array Method
let a = [1,2,3];
let s = a.join();  // join method makes array => string
let r = a.reverse(); // r = [3,2,1]
let srt = a.sort(); // sort() 안에 아무값도 없으면 알파벳 순서 ; ()안의 값은 보통 함수로 사

