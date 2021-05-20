function divideWithoutRemainder(input) {
    let numberCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 1; i <= numberCount; i++) {
        currentNumber = input[i];

        if (currentNumber % 2 === 0) {
            p1 += 1;
        } 
        if (currentNumber % 3 === 0) {
            p2 += 1;
        }
        if (currentNumber % 4 === 0) {
            p3 += 1;
        }
    }
    p1 = p1 / numberCount * 100;
    p2 = p2 / numberCount * 100;
    p3 = p3 / numberCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}

divideWithoutRemainder(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"])
