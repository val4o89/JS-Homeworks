function getIncreasingSequence(array) {

    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] && !isNaN(actual[i])) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }

    let arr = cleanArray(array);
    arr = arr.map(Number);


    var increasing = (function () {

        let a = -Infinity;

            return {run: function (n) {
                if(n >= a){
                    a = n;
                    return a;
                }
            }
        }
    })();

    arr = arr.filter(increasing.run);

    console.log(arr.join('\n'));
}

getIncreasingSequence(['1', '32', '4', '99', 'asd', '43', '121'])