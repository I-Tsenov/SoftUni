function challengeTheWedding(input) {
    let men = Number(input[0]);
    let women = Number(input[1]);
    let tables = Number(input[2]);
    let combinations = "";
    let countCombinations = 0;

    for (let m = 1; m <= men; m++) {
        for (let f = 1; f <= women; f++) {

            if (countCombinations >= tables) {
                break;
            }

            countCombinations++

            combinations += `(${m} <-> ${f}) `
        }
    }

    console.log(combinations)

}

challengeTheWedding(["2", "2", "6"]);
// challengeTheWedding(["2", "2", "3"])