function getIncreasingSequence(arr) {

    let a = -Infinity;

    function isBigger(n) {

        if(n >= a){
            a = n;
            return n;
        }
        return;
    }

    arr = arr.filter(isBigger);

    console.log(arr.join('\n'));
}

function secondTry(array) {
    let biggestNumber = -Infinity;

    for (let current of array) {
        if(current >= biggestNumber){
            biggestNumber = current;
            console.log(current);
        }
    }
}

getIncreasingSequence([-Infinity, '1', '32', '4', '99', 'asd', '43', '121'])