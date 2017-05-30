function capitalize(sentence) {


    function up(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function lower(word){
        return word.toLowerCase();
    }

    console.log(sentence.split(" ").map(lower).map(up).join(" "));
}

capitalize("Ala bala niTsa nice")