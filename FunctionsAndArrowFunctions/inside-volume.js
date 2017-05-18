function check(params) {
    let nums = params.map(Number);

    let repeats = nums.length / 3;
    let counter = 0;

    for (let i = 1; i <= repeats; i++) {

        if(inVolume(nums[counter], nums[counter + 1], nums[counter + 2])){
            console.log('inside');
        }
        else{
            console.log('outside');
        }
        counter += 3;
    }

    function inVolume(x, y, z) {

        let [x1, x2, y1, y2, z1, z2] = [10, 50, 20, 80, 15, 50];

        if(x >= x1 && x <= x2){
            if(y >= y1 && y <= y2){
                if(z >= z1 && z <= z2){
                    return true;
                }
            }
        }

        return false;
    }
}

check([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);