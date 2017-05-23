function createTable(array) {

    console.log('<table>');

    for (let json of array) {

        let obj = JSON.parse(json);

        console.log('  <tr>');
        console.log(`    <td>${obj['name']}</td>`)
        console.log(`    <td>${obj['position']}</td>`)
        console.log(`    <td>${obj['salary']}</td>`)
        console.log('  <tr>');
    }

    console.log('</table>');

}

createTable([ '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}' ]);