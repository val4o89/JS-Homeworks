function unique(matrix) {

    function order(a, b) {
        if(a > b){
            return 1;
        } else if(a < b){
            return - 1;
        } else {
            return 0;
        }
    }
    
    function lengthSort(a, b) {
        if(a.length < b.length){
            return -1;
        } else if(a.length > b.length){
            return 1
        } else {
            return 0;
        }
    }
    

    let result = [];
    let resultSet = new Set();
    let finalResult = [];

    for (let i = 0; i < matrix.length; i++) {
        result[i] = JSON.parse(matrix[i]).sort(order).reverse();
    }

    result.sort(lengthSort);
    result.forEach(x => resultSet.add(JSON.stringify(x)));
    [...resultSet].map(JSON.parse).forEach(x => console.log("[" + x.join(", ") + "]"));


}

unique([ '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
        '[4, -3, 3, -2, 2, -1, 1, 0]',
        '[4, -3, 3, -2, 2, -1, 1, 0]',
        '[10, 1, -17, 0, 2, 13]'
    ]
)