function chess(n) {
    console.log('<div class="chessboard">');

    let isBlack = true;

    for (var i = 0; i < n; i++) {


        console.log('  <div>');

        for (var j = 0; j < n; j++) {
            
            if(isBlack == true){
                console.log('    <span class="black"></span>');
                isBlack = false;
                if(n % 2 == 0 && j == n - 1) {
                    if (isBlack == false) {
                        isBlack = true;
                    }
                }
                continue;
            }
            else {
                console.log('    <span class="white"></span>');
                isBlack = true;
                if(n % 2 == 0 && j == n - 1) {
                    if (isBlack == true) {
                        isBlack = false;
                    }
                }
            }
        }
        console.log('  </div>');
    }
    
    console.log('</div>');
}

chess(2);