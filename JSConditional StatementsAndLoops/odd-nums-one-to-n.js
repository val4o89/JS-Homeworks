function odd(n) {
    let number = Number(n[0]);

    for (let i = 0; i <= number; i++) {
        if(i % 2 != 0) {
            console.log(i + "\n");
        }
    }
}