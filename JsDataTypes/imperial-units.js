function convert(params) {
    let number = Number(params[0]);

    let foots = Math.floor(number / 12);
    let inches = number - (12 * foots);

    console.log(`${foots}\'-${inches}\"`);
}

convert(['11']);