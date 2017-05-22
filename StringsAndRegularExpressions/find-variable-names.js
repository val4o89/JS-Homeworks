function find(sentence) {

    function sliceWord(word) {
        return word.slice(1);
    }

    console.log(sentence.match(/\b[_]{1}[A-Za-z0-9]+\b/g).map(sliceWord).join(','));
}

find("Calculate the _area of the _perfectRectangle object.");