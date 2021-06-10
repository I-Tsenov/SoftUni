function minDigitsCheck(str) {

    let digitCounter = 0;
    let isValid = false;

    for (let char of str) {

        let charPosition = char.charCodeAt(0)

        if (charPosition >= 48 && charPosition <= 57) {
            digitCounter++;
        }
        if (digitCounter >= 2) {
            isValid = true;
            break;
        }
    }

    return isValid;
}

console.log(minDigitsCheck("petar22sd"));