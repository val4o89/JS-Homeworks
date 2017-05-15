function round(params) {
    let number = params[0];
    let round = Number(params[1]) <= 15 ? Number(params[1]) : 15;

    indexOfDot = number.indexOf('.');

    let afterDot = number.substr(indexOfDot);

    let parsedNumber = Number(number);

    if(afterDot.length > round){
        console.log(parsedNumber.toFixed(round));
    }
    else{
        console.log(parsedNumber);
    }

}

round(['10.5', '3']);