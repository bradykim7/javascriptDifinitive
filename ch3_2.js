// 변수 xmas는 생성된 객체 자체를 담지 않고, 그 객체에 대한 참조를 담는다.
let xmas = new Date(2020,12,25);

// 이제 두 변수 모두 같은 객체값을  "" 참조 "" 한다.
let solstice = xmas;

solstice.setDate(21);

// 원본 값인 25 를 반환하는게 아닌 21을 반환 한다 . 객체를 참조 했기 때문
xmas.getDate();


// 객체나 배열이 함수에 전달되는 경우에도 동일하게 적용
// 아래의 함수는 배열의 각 원소에 어떤 값을 더한다.
// 함수에 배열의 복사본이 아닌 배열에 대한 참조가 전달
// 따라서 함수는 참조를 통해 배열의 내용을 변경할 수 있고,
// 변경된 사항은 함수 종료후에도 보인다.
function add_to_totals(totals, x){

    totals[0] = totals[0] + x;
    totals[1] = totals[1] + x;
    totals[2] = totals[2] + x;
}

// 아래의 함수는 제대로 작동 하지 않는 함수
// 이유는 배열의 그 자체를 변경하는 것이 아닌, 참조를 변경하려고 하기 때문 !!!!
function add_to_totals2(total, x){
    newtotal = new Array(3);
    totals[0] = totals[0] + x;
    totals[1] = totals[1] + x;
    totals[2] = totals[2] + x;
}

// 참조에 의한 비교
(xmas == solstice) // true 반환

let xmas = new Date(2020,12,25);
let solstice_plus_4 = new Date(202,12,25);

(xmas != solstice_plus_4); // 이제 서로 참조하는 값이 다르므로 내용이 같지만 ,서로 다른 값을 가진것 따라서 true