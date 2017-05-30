function magic(array) {

    try{


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

    console.log(isMagical(array));
    }
    catch(err) {
        console.log(false);
    }
}

magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);