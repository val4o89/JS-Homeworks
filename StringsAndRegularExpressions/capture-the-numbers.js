function capture(array) {

    console.log(array.join(' ').match(/\d+/g).join(' '));
}

capture(['Ala', '54', 'kjdsf', '4', 'fldf', '22:30']);