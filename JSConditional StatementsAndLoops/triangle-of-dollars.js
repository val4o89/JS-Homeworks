function triangle(param) {

    let rows = Number(param[0]);

    let elements = 1;

    function drawRow(elements) {
        if(elements <= rows) {
            console.log('$'.repeat(elements++));
            drawRow(elements);
        }
    }
    drawRow(elements);
}

triangle(['10']);