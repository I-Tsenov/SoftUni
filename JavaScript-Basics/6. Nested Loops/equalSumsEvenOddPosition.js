function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = "";



    for (let i = firstNum; i <= secondNum; i++) {
        let current = "" + i;
        let oddNum = 0;
        let evenNum = 0;
        for (let k = 0; k < current.length; k++) {

            let currentDigit = Number(current.charAt(k));

            if (k % 2 === 0) {
                evenNum += currentDigit;
            } else {
                oddNum += currentDigit;
            }
        }
        if (evenNum === oddNum) {
            printLine += `${i} `
        }
    }
    console.log(printLine);
}


equalSumsEvenOddPosition(["100000", "100050"])
