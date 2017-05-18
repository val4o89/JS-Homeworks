function reduce(params) {

    function cut(crystal) {
        return crystal / 4;
    }

    function lap(crystal) {
        return crystal - crystal * 0.2;
    }

    function grind(crystal) {
        return crystal - 20;
    }

    function etch(crystal) {
        return crystal - 2;
    }

    function xray(crystal) {
        return crystal + 1;
    }

    function floorMicrones(crystal) {
        return Math.floor(crystal);
    }

    let crystals = params.map(Number); //starts from index 1;
    let limit = crystals[0];

    for (let i = 1; i < crystals.length; i++) {

        let currentCrystal = crystals[i];

        if(currentCrystal < limit - 1){
            continue;
        }

        let isBigger = true;

        //counters--
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let xrayUsed = false;

        if(currentCrystal == limit)
            isBigger = false;

        console.log(`Processing chunk ${currentCrystal} microns`);

        while(isBigger) {

            if(cut(currentCrystal) >= limit){
                currentCrystal = cut(currentCrystal);
                cutCount++;
                if(cut(currentCrystal) <= limit){
                    currentCrystal = floorMicrones(currentCrystal);
                    console.log(`Cut x${cutCount}`);
                    console.log('Transporting and washing');
                }
                continue;
            }

            if(lap(currentCrystal) >= limit){
                currentCrystal = lap(currentCrystal);
                lapCount++;
                if(lap(currentCrystal) <= limit){
                    currentCrystal = floorMicrones(currentCrystal);
                    console.log(`Lap x${lapCount}`);
                    console.log('Transporting and washing');
                }
                continue;
            }

            if(grind(currentCrystal) >= limit){
                currentCrystal = grind(currentCrystal);
                grindCount++;
                if(grind(currentCrystal) <= limit){
                    currentCrystal = floorMicrones(currentCrystal);
                    console.log(`Grind x${grindCount}`);
                    console.log('Transporting and washing');
                }
                continue;
            }

            if(etch(currentCrystal) >= limit - 1){
                currentCrystal = etch(currentCrystal);
                etchCount++;
                if(currentCrystal <= limit){
                    currentCrystal = floorMicrones(currentCrystal);
                    console.log(`Etch x${etchCount}`);
                    console.log('Transporting and washing');
                }
                continue;
            }

            if(currentCrystal == limit - 1){
                currentCrystal = xray(currentCrystal);
                console.log('X-ray x1')
                console.log(`Finished crystal ${currentCrystal} microns`)
                isBigger = false;
                continue;
            }

            if(currentCrystal == limit){
                console.log(`Finished crystal ${currentCrystal} microns`)
                isBigger = false;
            }
        }
    }
}

reduce([350, 349]);