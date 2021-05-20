function carNumber(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let specialNumber = "";

    for (let i = start; i <= finish; i++) {
        for (let j = start; j <= finish; j++) {
            for (let k = start; k <= finish; k++) {
                for (let l = start; l <= finish; l++) {

                    let sumOfMidPair = j + k;

                    if (sumOfMidPair % 2 === 0 && i > l && (i % 2 === 0 && l % 2 !== 0 || l % 2 === 0 && i % 2 !== 0)) {
                        specialNumber += `${i}${j}${k}${l} `;
                    }

                }
            }
        }
    }

    console.log(specialNumber);

}


carNumber(["2", "3"])