function calculate(array) {
    
    function sumIt(a,b) {
        return a + b;
    }

    let sum = array.map(Number).reduce(sumIt);
    let vat = sum * 0.2;
    let total = sum + vat;

    console.log(sum);
    console.log(vat);
    console.log(total);
}

calculate([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);