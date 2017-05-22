function capitalize(array) {

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

    function up(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function lower(word){
        return word.toLowerCase();
    }

    console.log(array[0].split(" ").map(lower).map(up).join(" "));
}

capitalize("Ala bala niTsa nice")