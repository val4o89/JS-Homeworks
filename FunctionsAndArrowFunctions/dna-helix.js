function draw(number) {

    input = number;


    let dna = '';

    let elements = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let firstRow = '**12**';
    let secondRow = '*1--2*';
    let thirdRow = '1----2';
    let fourthRow = secondRow;

    let rowsArr = [firstRow, secondRow, thirdRow, fourthRow];

    let rowCounter = 0;
    let symbolCounter = 0;
    let counter = 1;

    for(let i = 0; i < input; i++){

        //let row = rowsArr[rowCounter++].replace('1', elements[symbolCounter++]).replace('2',elements[symbolCounter++]);
       //console.log(rowsArr[rowCounter++], elements[symbolCounter++], elements[symbolCounter++]);

       dna += rowsArr[rowCounter++].replace('1', elements[symbolCounter++]).replace('2',elements[symbolCounter++]) + '\n';
        //console.log(row);
        if(rowCounter == 4)
            rowCounter = 0;
        if(symbolCounter == 10)
            symbolCounter = 0
    }

    console.log(dna);
}

draw(['dsf', '4']);