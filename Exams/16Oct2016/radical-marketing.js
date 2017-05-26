function solve(array) {

    function sortPeople() {
        
    }
    let people = new Map();

    for (let line of array) {

        let splittedData = line.split('-');
        
        let leftPerson = splittedData[0];
        let rightPerson = splittedData[1];
        
        if(splittedData.length == 1){
            
            if(!people.has(leftPerson)){
                people.set(leftPerson, new Set());
            }
            
        } else {
            if(leftPerson == rightPerson){
                continue;
            }

            if(people.has(rightPerson) && people.has(leftPerson)){
                
                people.get(rightPerson).add(leftPerson);
            }
        }
    }

    let maxSubscribers = -Infinity;

    for (let [key, value] of people) {
        maxSubscribers = Math.max(maxSubscribers, value.size);
    }

    let counter = 1;

    for (let [key, value] of people) {
        if(value.size == maxSubscribers){
            console.log(key);
            for (let subscriber of value) {
                console.log(`${counter++}. ${subscriber}`);
            }

            return;
        }
    }
}

solve([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'
])