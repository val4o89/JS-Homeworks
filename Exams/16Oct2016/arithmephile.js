function calculate(array) {
    
    array = array.map(Number);
    
    let biggestProduct = -Infinity;


    for (let i = 0; i < array.length; i++) {
        let currentProduct = -Infinity;
        let steps = 0;

        if(array[i] > 0 && array[i] < 10){
            steps = array[i];

            if(array[i + 1] !== undefined){
                currentProduct = array[i + 1];
            }
        }


        for (let j = 2; j < steps + 1; j++) {
            if(array[i + j] !== undefined){
                currentProduct *= array[i + j];
            }
        }

        if(currentProduct > biggestProduct){
            biggestProduct = currentProduct;
        }
    }

    console.log(biggestProduct);
}

calculate([9,
    5652,
    5652,
    9190,
    4172,
    494,
    536,
    9510,
    1584,
    0,
    1,
    10,
    6,
    0,
    675,
    8913,
    1891,
    4298,
    269,
    3754,
    6459,]);