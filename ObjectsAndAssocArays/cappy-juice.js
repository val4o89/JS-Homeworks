function juice(array) {

    function orderJuices(a, b) {
        if(a.order > b.order){
            return 1;
        }
        return -1;
    }


    let juices = [];

    for (let item of array) {
        let kvp = item.split(' => ');


        juices.push({fruit: kvp[0], quantity: Number(kvp[1]), ordered: false, order: Number.MAX_VALUE})
    }
    
    let newJuices = [];
    let juiceOrder = 1;

    for (let juice of juices) {

        if(newJuices.length < 1){

            if(juice.quantity >= 1000 && juice.ordered == false) {
                juice.order = juiceOrder++;
                juice.ordered = true;
            }

            newJuices.push(juice);
            newJuices[0].order = juiceOrder++;
            continue;
        }

        let containsFruit = false;

        for (let newJuice of newJuices) {
            if(newJuice.fruit == juice.fruit){
                newJuice.quantity += juice.quantity;
                if(newJuice.quantity >= 1000 && newJuice.ordered == false){
                    newJuice.order = juiceOrder++;
                    newJuice.ordered = true;
                }
                containsFruit = true;
                break;
            }
        }

        if(containsFruit == false){
            if(juice.quantity >= 1000 && juice.ordered == false) {
                juice.order = juiceOrder++;
                juice.ordered = true;
            }
            newJuices.push(juice)
        }
    }

    let result = newJuices.sort(orderJuices);

    for (let juice of result) {

        if(juice.quantity >= 1000){
            console.log(`${juice.fruit} => ${Math.floor(juice.quantity / 1000)}`)
        }
    }
}

juice([ 'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789' ]);