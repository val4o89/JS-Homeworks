function count(sentence, pattern) {

        let regex = new RegExp('\\b'+pattern + '\\b', 'gi');

        if(regex.test(sentence))
        console.log(sentence.match(regex).length);
        else
        console.log(0);
}

count("Theeeee ", 'there')