function average(params) {

    let averageNumber = 0;
    let strNumber = params[0];
    let charArrNumbers = strNumber.split("");


    while(averageNumber <= 5){

        let sum = 0;

        for (let i = 0; i < charArrNumbers.length; i++) {
            sum += (Number(charArrNumbers[i]));
        }

        averageNumber = sum / charArrNumbers.length;

        if(averageNumber <= 5){
            strNumber += '9';
            charArrNumbers = strNumber.split("");
        }
    }

    console.log(strNumber);
}

average(['585']);