function magic(array) {

    try{

    array = array.filter(isNumber);

    function isNumber(a) {
        if(a != '')
            return a;
    }

    function empties(a) {
        if(a != '')
            return a;
    }

    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }

    function add(a, b) {
        return a + b;
    }

    function returnMatrix(arr) {
        let matrix = new Array;

        for (let i = 0; i < arr.length; i++) {

            matrix[i] = arr[i].split(' ').filter(empties).map(Number);
        }

        return matrix;
    }
        function isMagical(matrix) {
        let previousSum = -Infinity;

        for (let i = 0; i < matrix.length; i++) {
            let sum = matrix[i].reduce(add, 0);

            if(previousSum == -Infinity){
                previousSum = sum;
            }
            if(sum != previousSum){
                return false;
            }
        }

        for (let i = 0; i < matrix.length; i++) {

            let sum = 0;

            for (let j = 0; j < matrix[i].length; j++) {

                if(matrix[j][i] == undefined || isNaN(matrix[j][i]))
                    return false;

                sum += matrix[j][i];

                //console.log(matrix[j][i]);
            }

            if(sum != previousSum)
                return false;
        }

        return true;
    }

    //let arr = cleanArray(array);
    //arr = arr.filter(isNumber);
    let matrix = returnMatrix(array);

    console.log(isMagical(matrix));
    }
    catch(err) {
        console.log(false);
    }
}

magic(['', zzz,'4 5 6',
    '6 5 4',
    '5 5 5', '', ''])