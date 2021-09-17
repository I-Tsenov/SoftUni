function sameNumbers(input) {

    let totalSum = 0;
    let asString = input.toString();
    let isSame = true;

    for (let i = 0; i < asString.length; i++) {
        let currentDigit = Number(asString[i]);
        let nextDigit = asString[i + 1];

        if (asString[i] !== asString[i + 1] && nextDigit !== undefined) {
            isSame = false;
        }

        totalSum += currentDigit;
    }

    console.log(isSame)
    console.log(totalSum)
}

sameNumbers(2222222)
sameNumbers(1234)