function carCount(array) {

    let cars = new Map();

    for (let line of array) {
        let splittedLine = line.split(' | ');

        let brand = splittedLine[0];
        let model = splittedLine[1];
        let count = Number(splittedLine[2]);

        if(cars.has(brand)){
            if(cars.get(brand).has(model)){
                let oldCount = cars.get(brand).get(model);
                cars.get(brand).set(model, oldCount + count);
            }
            else {
                cars.get(brand).set(model, count);
            }
        }
        else  {
            cars.set(brand, new Map());
            cars.get(brand).set(model, count);
        }
    }

    for (let [key, value] of cars.entries()) {
        console.log(key)
        for (let [key1, value1] of value.entries()) {
            console.log(`###${key1} -> ${value1}`)
        }
    }
}

carCount([ 'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200' ]);