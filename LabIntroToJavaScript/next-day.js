function solve(year, month, day) {

    let date = new Date(year, month - 1, day);
    let dayToAdd = 24 * 60 * 60 * 1000;
    let nextDay = new Date(date.getTime() + dayToAdd);

    console.log(nextDay.getFullYear() + '-' + (nextDay.getMonth() + 1) + '-' + nextDay.getDate())
}

solve(2016, 9, 30);