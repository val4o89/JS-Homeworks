function lastDay(params) {
    let date = new Date(params[2], params[1] - 1, 0);
    let day = date.getDate();
    console.log(day)
}

lastDay(['17','3','2002']);