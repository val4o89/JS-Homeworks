function calculate(input){
    let grad = Number(input[0]);
    let constant = 360 / 400;

    let result = grad * constant;

    result = result % 360;

    if(result < 0){
        result = 360 - Math.abs(result);
    }
    console.log(result);
}

calculate(['-50']);