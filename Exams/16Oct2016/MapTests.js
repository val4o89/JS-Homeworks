function mapTest() {

    function descSort(key1, key2, map) {
        let innerMap1Length = map.get(key1).size;
        let innerMap2Length = map.get(key2).size;

        if(innerMap2Length > innerMap1Length){
            return -1;
        } else {
            return 1;
        }
    }

    let map = new Map();

    map.set("A", new Map());
    map.set("B", new Map());
    map.set("C", new Map());

    map.get("A").set(1, 'a');
    map.get("A").set(2, 'b');
    map.get("A").set(3, 'c');
    map.get("A").set(4, 'c');

    map.get("B").set(1, 'a');
    map.get("B").set(2, 'b');
    map.get("B").set(3, 'c');
    map.get("B").set(4, 'c');
    map.get("B").set(5, 'c');

    map.get("C").set(1, 'a');
    map.get("C").set(2, 'b');
    map.get("C").set(3, 'c');
    
    let sortedKeysByCountOfEntries = [...map.keys()].sort((x,y) => descSort(x, y, map));

    for (let obj of sortedKeysByCountOfEntries) {
           console.log(obj);

        for (let [key, value] of map.get(obj)) {
            console.log(key + " " + value);
        }
    }

    let str = 'abcdefghijklmnop';
    
    console.log([...str]);

}

mapTest();