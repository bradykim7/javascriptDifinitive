function getPropertyNames (/* object */ o){
    let r= [];
    for(name in o){
        r.push(name);
    }
    return r;
}

function copyProperites(/* object */ from, /* optional object */ to,){

    // 아래의 방식이 함수의 argument들의 갯수를 유동적으로 할 수 있게 하는 방법.
    if(!to)
        to={};
    // p == properties
    for (p in from)
        to[p] =from[p];

    return to;
}

function copyUndefinedProperties(/* object */ from, /* object */ to) {
    for( p in from){
        if(!p in to){
            to[p] = from[p];
        }
    }

}