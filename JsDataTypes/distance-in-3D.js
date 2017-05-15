function calcDistance(points) {
    let x1 = Number(points[0]);
    let y1 = Number(points[1]);
    let z1 = Number(points[2]);

    let x2 = Number(points[3]);
    let y2 = Number(points[4]);
    let z2 = Number(points[5]);

    let dx = x1 - x2;
    let dy = y1 - y2;
    let dz = z1 - z2;
    let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    console.log(distance);
}

calcDistance(['1', '1', '0', '5', '4', '0']);