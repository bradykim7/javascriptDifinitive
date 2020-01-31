function filterArray(/* array */ a, /* Boolean Function */ predicate){
    let result =[];

    let length = a.length; // 배열의 길이

    for (let i = 0;i<length;i++){
        let element = a[i];
        if (predicate(element))
            results.push(element);
    }

    return results;
}

function mapArray(/* array */ a, /* function */ f){

    let r = [];
    let length = a.length;
    for (let i = 0; i<length ; i++){
        r[i] = f(a[i]);
    }

    return r;
}