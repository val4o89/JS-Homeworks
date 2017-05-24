function filterByAge(a, b, c, d, e) {

    let firstPerson = {name: b, age: c};
    let secondPerson = {name: d, age: e};

    if(a <= firstPerson.age){
        console.log(firstPerson);
    }
    if(a <= secondPerson.age){
        console.log(secondPerson);
    }
}