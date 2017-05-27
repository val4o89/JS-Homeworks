function rosetta(array) {

    function getSymbol(n) {
        let symbolCode = (n % 27) + 64;

        return String.fromCharCode(symbolCode);

    }

    let templateRows = Number(array.shift());

    let template = [];
    let stone = [];

    for (let i = 0; i < templateRows; i++) {

        template[i] = array.shift().split(" ").map(Number);
    }

    for (let i = 0; i < array.length; i++) {

        stone[i] = array[i].split(" ").map(Number);

    }
    
    let sentence = '';

    for (let i = 0; i < stone.length; i++) {

        for (let j = 0; j < stone[i].length; j++) {
            stone[i][j] += template[i % template.length][j % template[0].length];
        }
    }

    for (let i = 0; i < stone.length; i++) {
        sentence += stone[i].map(getSymbol).join("").replace(/@/g, ' ');
    }
    
    console.log(sentence);
}

rosetta([ '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22' ]);