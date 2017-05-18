function  calc(params) {

    let coords = params.map(Number);

    let firstPoint = { x: coords[0], y: coords[1], order: 1 };
    let secondPoint = { x: coords[2], y: coords[3], order: 2 };
    let thirdPoint = { x: coords[4], y: coords[5], order: 3 };

    function getDistance(point1, point2) {

        let distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))

        return distance;
    }

    let distance12 = getDistance(firstPoint, secondPoint);
    let distance23 = getDistance(secondPoint, thirdPoint);
    let distance13 = getDistance(thirdPoint, firstPoint);

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
}

calc([5, 1, 1, 1, 5, 4]);