function gameOfIntervals(input) {
    let turnCount = Number(input[0]);
    let result = 0;
    let between0_9 = 0;
    let between10_19 = 0;
    let between20_29 = 0;
    let between30_39 = 0;
    let between40_50 = 0;
    let invalidNumber = 0;

    for (let i = 1; i <= turnCount; i++) {
        let currentNumber = Number(input[i]);


        if (currentNumber >= 0 && currentNumber <= 9) {
            result += currentNumber * 0.2;
            between0_9++;
        } else if (currentNumber >= 10 && currentNumber <= 19) {
            result += currentNumber * 0.3;
            between10_19++;
        } else if (currentNumber >= 20 && currentNumber <= 29) {
            result += currentNumber * 0.4;
            between20_29++;
        } else if (currentNumber >= 30 && currentNumber <= 39) {
            result += 50
            between30_39++;
        } else if (currentNumber >= 40 && currentNumber <= 50) {
            result += 100
            between40_50++;
        } else {
            result /= 2;
            invalidNumber++

        }
    }
    between0_9 = between0_9 / turnCount * 100;
    between10_19 = between10_19 / turnCount * 100;
    between20_29 = between20_29 / turnCount * 100;
    between30_39 = between30_39 / turnCount * 100;
    between40_50 = between40_50 / turnCount * 100;
    invalidNumber = invalidNumber / turnCount *100;


    console.log(result.toFixed(2))
    console.log(`From 0 to 9: ${between0_9.toFixed(2)}% `)
    console.log(`From 10 to 19: ${between10_19.toFixed(2)}% `)
    console.log(`From 20 to 29: ${between20_29.toFixed(2)}% `)
    console.log(`From 30 to 39: ${between30_39.toFixed(2)}% `)
    console.log(`From 40 to 50: ${between40_50.toFixed(2)}% `)
    console.log(`Invalid numbers: ${invalidNumber.toFixed(2)}%`)
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])