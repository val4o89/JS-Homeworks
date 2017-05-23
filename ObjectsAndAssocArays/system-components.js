function systemComponents(array) {

    let systems = new Map();

    function sortSystems(a, b) {
        if(systems.get(a).size > systems.get(b).size){
            return -1;
        }
        else if(systems.get(a).size < systems.get(b).size){
        return 1;
        }
        else{
            if(a > b){
                return 1;
            }
            else if(a < b) {
                return -1;
            }
        }
        return 0;
    }

    function sortComponents(system, a, b) {
        return systems.get(system).get(b).length - systems.get(system).get(a).length;
    }

    for (let line of array) {
        let splittedLine = line.split(' | ');

        let systemName = splittedLine[0];
        let componentName = splittedLine[1];
        let subComponentName = splittedLine[2];

        if(systems.has(systemName)){
            if(systems.get(systemName).has(componentName)){
                systems.get(systemName).get(componentName).push(subComponentName);
            }
            else {
                systems.get(systemName).set(componentName, []);
                systems.get(systemName).get(componentName).push(subComponentName);
            }
        }
        else {
            systems.set(systemName, new Map());
            systems.get(systemName).set(componentName, []);
            systems.get(systemName).get(componentName).push(subComponentName);
        }
    }

    let sortedSystems = Array.from(systems.keys()).sort(sortSystems);

    for (let systemName of sortedSystems) {
        console.log(systemName);

        let sortedComponents = Array.from(systems.get(systemName).keys()).sort((a, b) => sortComponents(systemName, a, b));

        for (let componentName of sortedComponents) {
            console.log('|||' + componentName);

            for (let subcomponent of systems.get(systemName).get(componentName)) {
                console.log('||||||' + subcomponent);
            }
        }
    }
}

systemComponents([ 'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security' ])