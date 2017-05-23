function getHeroes(array) {

    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }
    array = cleanArray(array);

    let heroes = [];

    for (let line of array) {
        let heroData = line.split(' / ');
        let heroItems = [];

        if(heroData.length > 2){
            heroItems = heroData[2].split(', ');
        }

        let heroName = heroData[0];
        let heroLevel = heroData[1];

        let hero = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems
        }

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

getHeroes([ 'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara' ]);