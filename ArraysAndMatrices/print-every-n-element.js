function printElement(array) {
    let n = array.pop();

    for (let i = 0; i < array.length; i++) {

        if(i % n == 0)
            console.log(array[i])
    }
}

printElement([5,20,31,4,20,2]);