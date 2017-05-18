function format(params) {
    let iterations = Math.floor(params.length / 2);
    let counter = 0;
    let quiz = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>'

    for (let i = 0; i < iterations; i++) {

        if(params[counter] != '' || params[counter + 1] != '')
        quiz += `\n  <question>\n    ${params[counter++]}\n  </question>\n  <answer>\n    ${params[counter++]}\n  </answer>`

    }

    quiz += '\n</quiz>'

    console.log(quiz);
}

format([ 'Who was the forty-second president of the U.S.A.?',
    'William Jefferson Clinton',
    '' ]);