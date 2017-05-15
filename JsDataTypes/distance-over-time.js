function calculate(params) {
    let v1 = Number(params[0]);
    let v2 = Number(params[1]);
    let time = Number(params[2]);

    let firstObjDistance = v1 * ((time/60)/60);
    let secObjDistance = v2 * ((time/60)/60);

    let delta = Math.abs(firstObjDistance - secObjDistance) * 1000;

    console.log(delta);
}

calculate(['0', '60', '3600']);