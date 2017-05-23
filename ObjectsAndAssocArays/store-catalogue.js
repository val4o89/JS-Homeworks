function catalogue(array) {

    function alphabetOrder(a, b) {
        if(a.split(' : ')[0] > b.split(' : ')[0]){
            return 1;
        }
        else {
            return -1;
        }
    }

    array = array.sort(alphabetOrder);

    let currentLetter = 0;

    for (let obj of array) {

        let letter = obj.charAt(0);

        let productName = obj.split(" : ")[0];
        let productPrice = Number(obj.split(" : ")[1]);

        if(letter != currentLetter){
            console.log(letter);
            currentLetter = letter;
        }

        console.log(`${productName}: ${productPrice}`);
    }
}

catalogue([ 'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10' ]);