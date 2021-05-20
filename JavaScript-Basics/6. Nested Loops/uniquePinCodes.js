function uniquePinCodes(input) {
    let topNum1 = Number(input[0]);
    let topNum2 = Number(input[1]);
    let topNum3 = Number(input[2]);
    let isPrime = false;
    let combination = "";

    for (let i = 2; i <= topNum1; i += 2) {
        for (let j = 2; j <= topNum2; j++) {
            for (let k = 2; k <= topNum3; k += 2) {

                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    isPrime = true;
                } else {
                    isPrime = false;
                }

                if (isPrime) {
                    combination = `${i} ${j} ${k}`
                    console.log(combination);
                }

            }
        }

    }

}

uniquePinCodes(["3", "5", "5"]);
// uniquePinCodes(["8", "2", "8"]);