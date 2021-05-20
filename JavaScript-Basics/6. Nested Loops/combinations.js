function combinations(input) {
    let n = Number(input[0]);
    let totalCombinations = 0;

    for (let i = 0; i <= n; i++) {
        for (let k = 0; k <= n; k++) {
            for (let m = 0; m <= n; m++) {
                if (i + k + m === n) {
                    totalCombinations++
                }
            }
        }
    }

    console.log(totalCombinations);

}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);