function pritnArray(array) {
    let delimiter = array.pop();
    console.log(array.join(delimiter));
}

//for softuni judge :)
//
//
//
//
//
//
//
function printArrayForJudge(array) {
    let delimiter = array.pop();
    let result = '';

    for (let i = 0; i < array.length; i++) {

        result += array[i];

        if(i == array.length - 1)
            break;

        result += delimiter;
    }

    console.log(result);
}
printArrayForJudge(['sdf','sdfdsf', 'kurcho', 'vareli', '-']);