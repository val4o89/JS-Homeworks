function bunnyKill(array) {

    let bombAllData = array.pop().split(' ');

    for (let i = 0; i < array.length; i++) {

        array[i] = array[i].split(' ').map(Number);

    }

    for (let i = 0; i < bombAllData.length; i++) {
        let bombData = bombAllData[i].split(',').map(Number);

        let x = bombData[0]
        let y = bombData[1]

        for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, array.length - 1); i++) {
            for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, array[i].length - 1); j++) {
                if(i != x || j != y){
                    array[i][j] -= array[x][y];
                }
            }
        }

    }

    let result = array.reduce((a, b) => a + ',' + b).split(',').map(Number).filter(x => x > 0);
    console.log(array.join('\n'));
    console.log(result.reduce((a,b) => a + b));
    console.log(result.length);

}

bunnyKill([
    '10 5 10 15 20',
    '10 10 10',
    '10 15 10 10',
    '10 10 10 10 10 10',
    '2,2 0,1' ])