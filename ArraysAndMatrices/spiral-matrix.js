function matrix(a, b) {

    let rows = a;
    let cols = b;

    let counter = 1;
    let maxElement = rows * cols;
    let matrix = [];

    for (let i = 0; i < cols; i++) {
        let helper = [];
        for (let j = 0; j < rows; j++) {
            helper.push(0);
        }
        matrix.push(helper);
    }

    let horizontalTurns = rows;
    let verticalTurns = cols - 1;


    let direction = "right";

    let horizontalSteps = rows;
    let verticalSteps = cols - 1;

    let positionX = 0;
    let positionY = 0;

    while (counter <= maxElement){



        if(direction == 'right'){
            for (let i = positionY; i < horizontalSteps; i++) {

                matrix[positionX][i] = counter++;
                positionY = i;
            }
            positionX++;
            horizontalSteps--;
            direction = 'down';
        }

        else if(direction == 'down'){
            for (let i = positionX; i <= verticalSteps; i++) {

                matrix[i][positionY] = counter++;
                positionX = i;
            }
            direction = 'left';
            positionY--;
        }
        else if(direction == 'left'){
            for (let i = positionY; i >= cols - 1 - horizontalSteps; i--) {

                matrix[positionX][i] = counter++;
                positionY = i;
            }
            positionX--;
            direction = 'up';
            verticalSteps--;
        }

        else if(direction == 'up'){

            for (let i = positionX; i >= rows - 1 - verticalSteps; i--) {

                matrix[i][positionY] = counter++;
                positionX = i;
            }
            direction = "right";
            positionY++;
        }
    }


    for (let item of matrix) {

        console.log(item.join(' '))
    }
}

matrix([6, 2]);