function calc(r, h) {

    let volume = (1 / 3) * ((Math.PI * Math.pow(r, 2)) * h);
    let baseArea = Math.PI * r * r;

    console.log('volume = ' + volume);
    console.log('area = ' + baseArea);

}