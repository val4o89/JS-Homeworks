function radar(params) {
    let speed = Number(params[0]);
    let area = params[1];

    let limit = getLimit(area);

    getInfraction(speed, limit);

    function getLimit(area) {
        switch(area){
            case "motorway": return 130;
            case "interstate": return 90;
            case "city": return 50;
            case "residential": return 20;
        }
    }
    
    function getInfraction(speed, limit) {

        if(speed - limit <= 0){
            console.log('');
        }
        if(speed - limit > 0 && speed - limit <= 20){
            console.log('speeding');
        }
        else if(speed - limit > 20 && speed - limit <= 40){
            console.log('excessive speeding');
        }
        else if(speed - limit > 40){
            console.log('reckless driving');
        }
    }
}

radar([-10, 'motorway']);