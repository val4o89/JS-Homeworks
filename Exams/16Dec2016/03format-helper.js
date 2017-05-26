function help(text) {
    console.log(text.reduce(x => x)
        .replace(/\s*([.,!?:;])\s*/g, (match, g1) => `${g1} `)
        .replace(/\.\s(?=[0-9])/g, (match) => `.`)
        .replace(/"\s*(.+?)\s*"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;])\s(?=[.,!?:;])/g, (match, g1) => g1));
}

help(['We should test how digits and dates would be printed: first some digit - 9,than some number  : 3      . 14    ! Do not forget about the dates though: 09  .   11; Now, spam more: 311 .1, 31 . not number 31   .   31 .  2031!']);