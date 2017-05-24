function check(number) {

    if(number == 0 || number == 1 || number < 0){
        console.log(false);
        return;
    }

    for (var i = number - 1; i > 1; i--) {

        if((number / i) % 1 == 0){
            console.log(false);
            return;
        }
    }

    console.log(true);
}

check(7);