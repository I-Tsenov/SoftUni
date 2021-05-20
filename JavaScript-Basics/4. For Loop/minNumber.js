function minNumber(input) {
    let numberCount = Number(input[0]);
    let minimalNumber = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= numberCount; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < minimalNumber) {
            minimalNumber = currentNumber;
        }
    }
    console.log(minimalNumber)
}

minNumber(["4", "45", "-20", "7", "99"]); 
minNumber(["2", "-1", "-2"]);
