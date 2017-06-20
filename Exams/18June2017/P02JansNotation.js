function jansNotation(arr) {



    for (let i = 0; i < arr.length; i++) {

        if(isNaN(arr[i])) {

            if(i - 2 > -1){

                if(!isNaN(arr[i - 1]) && !isNaN(arr[i - 2])){

                    switch (arr[i]) {

                        case '+': arr[i] = arr[i - 2] + arr[i - 1]; break;
                        case '-': arr[i] = arr[i - 2] - arr[i - 1]; break;
                        case '*': arr[i] = arr[i - 2] * arr[i - 1]; break;
                        case '/': arr[i] = arr[i - 2] / arr[i - 1]; break;

                    }
                    
                    arr.splice(i - 2, 2);

                    i = i - 2;

                } else {
                    console.log("Error: too many operands!");
                    return;
                }

            } else {
                console.log("Error: not enough operands!");
                return;
            }

        }

    }

    if(arr.length == 1){
        console.log(arr[0]);
    } else {
        console.log("Error: too many operands!");
    }
}

jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']

)