function isInside(args) {
    let x1 = Number(args[0]);
    let x2 = Number(args[1]);
    let y1 = Number(args[2]);
    let y2 = Number(args[3]);
    let z1 = Number(args[4]);
    let z2 = Number(args[5]);

    if((x1 >= y1 && x1 <= y2) && (x2 >= z1 && x2 <= z2)) {
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}

isInside(['8', '-1', '2', '12', '-3','3']);