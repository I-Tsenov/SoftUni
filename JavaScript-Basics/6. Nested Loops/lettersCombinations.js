function lettersCombinations(input) {

    let char1 = input[0];
    let char2 = input[1];
    let charIgnore = input[2];
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let countCombinations = 0;
    let combinations = ""

    for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            for (let k = 0; k < alpha.length; k++) {

                let currentChar1 = alpha[i];
                let currentChar2 = alpha[j];
                let currentChar3 = alpha[k];

                if ((currentChar1 >= char1 && currentChar1 <= char2 && currentChar1 !== charIgnore) &&
                    (currentChar2 >= char1 && currentChar2 <= char2 && currentChar2 !== charIgnore) &&
                    (currentChar3 >= char1 && currentChar3 <= char2 && currentChar3 !== charIgnore)) {

                    countCombinations++;

                    combinations += `${currentChar1}${currentChar2}${currentChar3} `;

                }
            }
        }
    }
    console.log(`${combinations}${countCombinations}`);
}

lettersCombinations(["a", "c", "b"]);
// lettersCombinations(["f", "k", "h"]);


