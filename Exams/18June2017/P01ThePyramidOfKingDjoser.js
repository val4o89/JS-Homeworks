function thePyramidOfKingDjoser(base, heightOfBlock) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    
    let pyramidHeight = 0;

    for (let i = base; i > 0; i -= 2) {

        pyramidHeight++;
        
        if(i == 1 || i == 2){
            gold += i*i;
            continue;
        } else if(pyramidHeight % 5 == 0){
            let lapisLazuliCurrentRow = ((i * 4) - 4);
            stone += ((i * i) - lapisLazuliCurrentRow);
            lapisLazuli += lapisLazuliCurrentRow;
            continue;
        }
        let marbleCurrentRow = ((i * 4) - 4);
        stone += ((i * i) - marbleCurrentRow);
        marble += marbleCurrentRow;
    }

    console.log(`Stone required: ${Math.ceil(stone * heightOfBlock)}`);
    console.log(`Marble required: ${Math.ceil(marble * heightOfBlock)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * heightOfBlock)}`);
    console.log(`Gold required: ${Math.ceil(gold * heightOfBlock)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * heightOfBlock)}`);

}

thePyramidOfKingDjoser(11, 0.75);