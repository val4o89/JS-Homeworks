function solve(nums) {

    let [a, b, c] = nums.map(Number);

    let root = Math.sqrt(Math.pow(b, 2) - (4 * a * c));

    let root1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let root2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);


    if(root > 0 ){
        console.log(Math.min(root1, root2));
        console.log(Math.max(root1, root2));
    }
    else if(root == 0){
        console.log(Math.max(root1, root2));
    }
    else{
        console.log('No')
    }
}