function usernames(array) {

    function addToSet(a) {
        setNames.add(a);
    }

    function order(a, b) {

        if(a.length > b.length){
            return -1;
        }
        else if(a.length < b.length){
            return 1;
        }
        else {
            if(a > b){
                return -1;
            }
            else {
                return 1;
            }
        }

    }

    let setNames = new Set();

    array.map(addToSet);

    console.log([...setNames].sort(order).reverse().join('\n'));

}