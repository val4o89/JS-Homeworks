function pritnArray(array) {

    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }

    array = cleanArray(array);

    let delimiter = array.pop();
    console.log(array.join(delimiter));
}