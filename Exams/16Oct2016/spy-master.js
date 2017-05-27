function solve(array) {

    function replace(match) {
        return 'kiki riki'
        console.log();
    }
    let secretKey = array.shift();

    let secretKeyRegex = secretKey.split('').map(x => `[${x.toLowerCase()}${x.toUpperCase()}]`).reduce((a,b) => (a + b));

    let somet = "^\\|\\s*" + secretKeyRegex + "\\s*([A-Z$#%!]{8,})(\\.\\|\\,$\\|\\s)";
    let regex = new RegExp(somet, 'g');

    for (let i = 0; i < array.length; i++) {
        if(regex.test(array[i])){
            console.log('ffff');
        }
        array[i] = array[i].replace(regex, replace);
    }

    console.log(regex);
    console.log(array);
}

solve([ 'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ]);