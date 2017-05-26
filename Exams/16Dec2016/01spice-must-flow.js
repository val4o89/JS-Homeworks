function earnSpices(n) {

    let daylySpices = n;

    let days = 0;

    let harvestedSpices = 0;

    while(daylySpices >= 100){

        harvestedSpices += daylySpices;

        daylySpices -= 10;

        harvestedSpices -= 26;

        days++;
    }

    harvestedSpices -= 26;

    console.log(days);
    console.log(harvestedSpices >= 0 ? harvestedSpices : 0);
}

earnSpices(111);