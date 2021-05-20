function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinationCounter = 0;
    let isMagic = false;


    for (let i = start; i <= finish; i++) {
        for (let k = start; k <= finish; k++) {
            combinationCounter++;
            if (i + k === magicNum) {
                isMagic = true;
                console.log(`Combination N:${combinationCounter} (${i} + ${k} = ${magicNum})`)
                break;
            }
        }
        if (isMagic) {
            break;
        }
    }
    if (!isMagic) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);

