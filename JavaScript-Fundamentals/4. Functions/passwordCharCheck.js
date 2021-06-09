function charCheck(str) {

    let isValid = false;

    for (let char of str) {

        isValid = false;

        let charPosition = char.charCodeAt(0)
    
        if (charPosition >= 48 && charPosition <= 57) {
            isValid = true;
        } else if (charPosition >= 97 && charPosition <= 122) {
            isValid = true;
        } else if (charPosition >= 65 && charPosition <= 90) {
            isValid = true;
        } 

        if (isValid === false) {
            break;
        }
    }

    return isValid;
}

console.log(charCheck("in1d$13"));