function moviePrices(params) {
    let movieName = params[0].toLowerCase();
    let dayOfWeek = params[1].toLowerCase();

    if (movieName == 'the godfather'){
        switch (dayOfWeek){
            case 'monday': return 12;
            case 'tuesday': return 10;
            case 'wednesday': return 15;
            case 'thursday': return 12.50;
            case 'friday': return 15;
            case 'saturday': return 25;
            case 'sunday': return 30;
            default: return 'error';
        }
    }
    else if (movieName == "schindler's list"){
        switch (dayOfWeek){
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': return 8.50;''
            case 'saturday':
            case 'sunday': return 15;
            default: return 'error';
        }
    }
    else if (movieName == "casablanca"){
        switch (dayOfWeek){
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': return 8;
            case 'saturday':
            case 'sunday': return 10;
            default: return 'error';
        }
    }
    else if (movieName == "the wizard of oz"){
        switch (dayOfWeek){
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday': return 10;
            case 'saturday':
            case 'sunday': return 15;
            default: return 'error';
        }
    }
    else {
        return 'error';
    }
}