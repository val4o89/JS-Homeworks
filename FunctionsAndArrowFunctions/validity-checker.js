function isValid(params) {
    let [x1, y1, x2, y2] = params.map(Number);

    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);


    function check(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.abs(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));

        if(distance % 1 == 0){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}