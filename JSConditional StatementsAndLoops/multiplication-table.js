function multiplicate(params) {
    let num = Number(params[0]);

    let table = '<table border="1">\n<tr><th>x</th>';

    for (let i = 1; i <= num; i++) {

        table += `<th>${i}</th>`
    }

    table += '</tr>\n';

    for (let i = 1; i <= num; i++) {

        table += `<tr><th>${i}</th>`;

        for (let j = 1; j <= num; j++) {
            table += `<td>${i * j}</td>`
        }

        table += '</tr>\n';
    }

    table += '</table>';

    console.log(table);
}

multiplicate(['5']);