function calculate(params) {
    let a = Number(params[0]);
    let b = Number(params[1]);
    let area = a * b;
    let perimeter = (a * 2) + (b * 2);
    console.log(area);
    console.log(perimeter);
}

calculate(['2', '2']);