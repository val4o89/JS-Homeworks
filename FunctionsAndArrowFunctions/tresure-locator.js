function locate(params) {

    let coords = params.map(Number);

    let tuvalo = {
        name: 'Tuvalu',
        x1: 1,
        y1: 1,
        x2: 3,
        y2: 3
    }

    let tonga = {
        name: 'Tonga',
        x1: 0,
        y1: 6,
        x2: 2,
        y2: 8
    }

    let samoa = {
        name: 'Samoa',
        x1: 5,
        y1:3,
        x2: 7,
        y2: 6
    }

    let cook = {
        name: 'Cook',
        x1: 4,
        y1: 7,
        x2: 9,
        y2: 8
    }

    let tokelau = {
        name: 'Tokelau',
        x1: 8,
        y1: 0,
        x2: 9,
        y2: 1
    }
    let islands = [tuvalo, samoa, cook, tokelau, tonga];

    for (let i = 0; i < coords.length; i+= 2) {
        let name = false;

        if(coords[i] == '' || coords[i + 1] == ''){
            continue;
        }
        for (let island of islands) {

            name = checkTresure(coords[i], coords[i + 1], island);
            if(name){
                break;
            }
        }

        if(name)
            console.log(name)
        else
            console.log("On the bottom of the ocean")
    }

    function checkTresure(x, y, island) {

        if((x >= island.x1 && x <= island.x2) && (y >= island.y1 && y <= island.y2)){

            return island.name;
        }

        return false;

    }
}

locate([4, 2, 1.5, 6.5, 1, 3]);