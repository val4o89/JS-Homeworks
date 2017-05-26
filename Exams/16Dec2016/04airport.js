function airportSystem(array) {

    let towns = new Map();

    let planes = new Map();

    for (let line of array) {

        let lineData = line.split(" ");

        let town = lineData[1];
        let pasangers = Number(lineData[2]);
        let status = lineData[3];
        let airplane = {status: status, pasangers: pasangers};

        if(towns.has(town)){
            if(towns.get(town).has("")){

            }
        }
    }
}