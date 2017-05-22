function addRemove(array) {

    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }

    let result = new Array();

    array = cleanArray(array);

    for (let i = 0; i < array.length; i++) {

        if(array[i] == 'add')
          result.push(i + 1);
        else
            result.pop();
    }

    if(result.length < 1)
    console.log('Empty')
    else
        console.log(result.join('\n'));
}

addRemove([ 'add', 'remove', 'remove', 'remove',]);