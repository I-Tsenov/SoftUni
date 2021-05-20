function specialNumbers(input) {
    let num = Number(input[0]);
    let output = "";

    for (i = 1; i <= 9; i++) {
        for (k = 1; k <= 9; k++) {
            for (m = 1; m <= 9; m++) {
                for (n = 1; n <= 9; n++) {

                    if (num % i === 0 && num % k === 0 && num % m === 0 && num % n === 0) {
                        output += `${i}${k}${m}${n} `;
                    }
                }
            }
        }
    }
    console.log(output);
}
specialNumbers(["3"])