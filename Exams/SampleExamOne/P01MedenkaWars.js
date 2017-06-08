function medenkaWars(arr) {

    let vitkorsDamage = 0;
    let naskorsDamage = 0;

    let vitkorsSameDamageCount = 1;
    let naskorsSameDamageCount = 1;

    let vitkorPreviousMedenkas = 0;
    let naskorPreviousMedenkas = 0;

    for (let line of arr) {

        let lineData = line.split(' ');

        let medenkaCount = Number(lineData[0]);
        
        if(lineData[1] == "dark"){

            if(naskorPreviousMedenkas == medenkaCount){
                naskorsSameDamageCount++;
            } else {
                naskorsSameDamageCount = 1;
            }

            naskorPreviousMedenkas = medenkaCount;

            if(naskorsSameDamageCount == 5){
                naskorsDamage += (medenkaCount * 60) * 4.5;
                naskorsSameDamageCount = 0;
                continue;
            }

            naskorsDamage += medenkaCount * 60;
        }
        else if(lineData[1] == "white"){

            if(vitkorPreviousMedenkas == medenkaCount){
                vitkorsSameDamageCount++;
            }
            else {
                vitkorsSameDamageCount = 1;
            }

            vitkorPreviousMedenkas = medenkaCount;

            if(vitkorsSameDamageCount == 2){
                vitkorsDamage += (medenkaCount * 60) * 2.75;
                vitkorsSameDamageCount = 0;
                continue;
            }

            vitkorsDamage += medenkaCount * 60;
        }

    }
    
    console.log("Winner - " + (vitkorsDamage > naskorsDamage ? "Vitkor" : "Naskor"));
    console.log("Damage - " + (vitkorsDamage > naskorsDamage ? vitkorsDamage : naskorsDamage));
    
}

medenkaWars(['1 white medenkas', '1 white medenkas', '1 white medenkas', '1 white medenkas'
 ]);