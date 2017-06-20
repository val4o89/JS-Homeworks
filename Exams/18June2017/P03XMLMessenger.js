function xMLMessenger(input) {

    input = input.replace("\n", '     ');
    let mesage = '';

    let pattern = /^<message[ \n\t\r]+([a-z]+="[a-zA-Z0-9 \.]+"[ \n\t\r]*)+>(.*?)<\/message>$/gm;

    if(input.split("from").length !== 2 || input.split("to").length !== 2){
        console.log("Missing attributes");
        return;
    }
    
    if(!pattern.test(input)){
        console.log("Invalid message format");
        return;
    }

    let senderTokens = input.split('from="');
    let recieverTokens = input.split('to="');

    let sender = senderTokens[1].substring(0, senderTokens[1].indexOf('"'));
    let reciever = recieverTokens[1].substring(0, recieverTokens[1].indexOf('"'));

    let matches = pattern.exec(input);
    let messages = ((pattern.exec(input))[2]).split('     ');

    mesage += '<article>\n';
    mesage += `  <div>From: <span class="sender">${sender}</span></div>\n`;
    mesage += `  <div>To: <span class="recipient">${reciever}</span></div>\n`;
    mesage += `  <div>\n`;

    for (let i = 0; i < messages.length; i++) {
        mesage += `    <p>${messages[i]}</p>\n`;
    }

    mesage += `  </div>\n`;
    mesage += '</article>';
    console.log(mesage);

}

xMLMessenger(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`)