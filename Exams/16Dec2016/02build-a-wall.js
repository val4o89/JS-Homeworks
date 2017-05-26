function buildAWall(array) {

    let concretePrice = 1900
    let daylyConcretePerWall = 195;
    let finalConcretePrice = 0;
    let concreteByDays = [];

    let wallPieces = array.map(Number).filter(x => x < 30);

    while (wallPieces.length > 0){

        let daylyConcrete = wallPieces.length * daylyConcretePerWall;

        wallPieces = wallPieces.map(x => x += 1).filter(x => x < 30);

        concreteByDays.push(daylyConcrete);

        finalConcretePrice += daylyConcrete * concretePrice;
    }

    console.log(concreteByDays.join(', '));
    console.log(finalConcretePrice + ' pesos');
}

buildAWall(['21', '25', '28']);