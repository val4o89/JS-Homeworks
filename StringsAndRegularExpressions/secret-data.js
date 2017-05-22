function secret(array) {

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
    let nameRegex = /\*[A-Z][a-zA-Z]*(?=[\s\t\n]|$)/g;
    let phoneRegex = /\+[0-9-]{10}(?=[\s\t\n]|$)/g;
    let idRegex = /\![a-zA-Z0-9]+(?=[\s\t\n]|$)/g;
    let secretBaseRegex = /\_[a-zA-Z0-9]+(?=[\s\t\n]|$)/g;


    let finalText = '';

    for (let text of array) {

    if(nameRegex.test(text)){
        let names = text.match(nameRegex);

        for (let name of names) {
            text = text.replace(name, '|'.repeat(name.length));
        }
    }

    if(phoneRegex.test(text)){
        let phones = text.match(phoneRegex);

        for (let phone of phones) {
            text = text.replace(phone, '|'.repeat(phone.length));
        }
    }

    if(idRegex.test(text)){
        let ids = text.match(idRegex);

        for (let id of ids) {
            text = text.replace(id, '|'.repeat(id.length));
        }
    }

    if(secretBaseRegex.test(text)){
        let secrets = text.match(secretBaseRegex);

        for (let secr of secrets) {
            text = text.replace(secr, '|'.repeat(secr.length));
        }
    }

    console.log(text);
    }
}
/*secret([ 'Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...', '', '' ]);*/