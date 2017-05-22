function sortByCriteria(array) {

    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }

    function order(a, b) {
        if(a.length > b.length){
            return 1;
        }
        else if(a.length < b.length){
            return -1;
        }
        else{
            if(a > b){
                return 1;
            }
            else if(a < b){
                return -1;
            }
            else{
                return 0;
            }
        }
    }

    let arr = cleanArray(array);

    arr.sort(order);

    console.log(arr.join('\n'));
}

sortByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortByCriteria(['test', 'Deny', 'omen', 'Default'])