function luckyNumbers(input) {

    let luckyNum = Number(input[0]);
    let gotLucky = "";

    for (i = 1; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            for (k = 1; k <= 9; k++) {
                for (l = 1; l <= 9; l++) {

                    let sumFirstPair = i + j;
                    let sumSecondPair = k + l;

                    if (sumFirstPair === sumSecondPair && luckyNum % sumFirstPair === 0 ) {
                        gotLucky += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    
    console.log(gotLucky);
}

luckyNumbers(["3"]);