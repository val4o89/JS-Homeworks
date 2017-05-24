function solve(number) {
    let parsedNumber = Number(number);
    let stringNumber = '';

    for (var i = 1; i <= parsedNumber; i++) {

        stringNumber += i;

    }

    return stringNumber;
}