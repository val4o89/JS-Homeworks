function extract(array) {
    let regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    if(regex.test(array.join(' '))) {
        console.log(array.join(' ').match(regex).join('\n'))
    }else{
        console.log('');
    }
}