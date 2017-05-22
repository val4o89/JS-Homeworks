function rotate(array) {

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

    let rotations = Number(array.pop()) % array.length;
    for (let i = rotations; i > 0; i--) {

        array.unshift(array.pop());
    }

    console.log(array.join(" "));
}

rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    15
])