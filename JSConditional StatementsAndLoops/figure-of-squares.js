function draw(number) {
    let n = Number(number[0]);

    let line = '';

    let elements = (2 * n) - 1;
    if(n % 2 == 0){
        for (let i = 1; i < n; i++) {

            for (let j = 1; j <=  elements; j++) {


                if((j == 1 || j == elements || j == n)){
                    if((i == 1 || i == Math.ceil(n / 2) || i == n - 1))
                        line += '+';
                    else
                        line += '|';
                }
                else{
                    if(line.indexOf('|') == -1)
                        line += '-';
                    else
                        line += ' ';
                }
            }
            console.log(line);
            line = '';        }
    }
    else{
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <=  elements; j++) {

                if((j == 1 || j == elements || j == n)){
                    if((i == 1 || i == Math.ceil(n / 2) || i == n))
                        line += '+';
                    else
                        line += '|';
                }
                else{
                    if(line.indexOf('|') == -1)
                    line += '-';
                    else
                        line += ' ';
                }
            }
            console.log(line);
            line = '';
        }
    }

    console.log(line);
}

draw(['7'])