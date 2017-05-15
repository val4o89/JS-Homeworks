function log(params) {
    let object = {
        [params[0]]: params[1],
        [params[2]]: params[3],
        [params[4]]: params[5]
    };
    console.log(object)
}


log(['name', 'Pesho', 'age', '23', 'gender', 'male']);