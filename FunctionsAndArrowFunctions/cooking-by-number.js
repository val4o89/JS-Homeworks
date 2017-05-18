function cook(params) {
    let number = Number(params[0]);

    for (let i = 1; i < params.length; i++) {
        if(params[i] == ''){
            continue;
        }
        switch (params[i]){
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number = number - (number * 0.2); break;
        }

        console.log(number);
    }

}

cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);