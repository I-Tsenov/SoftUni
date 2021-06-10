function passwordValidator(str) {

    let requirements = "";

    if (charCheck(str) && lengthCheck(str) && minDigitsCheck(str)) {
        requirements = "Password is valid" + "\n";
    }
    if (!lengthCheck(str)) {
        requirements += "Password must be between 6 and 10 characters" + "\n";
    }
    if (!charCheck(str)) {
        requirements += "Password must consist only of letters and digits" + "\n";
    }
    if (!minDigitsCheck(str)) {
        requirements += "Password must have at least 2 digits" + "\n";
    }

    function charCheck(str) {

        let isValid;

        for (let char of str) {

            isValid = false;
            
            let charPosition = char.charCodeAt(0)

            if (charPosition >= 48 && charPosition <= 57) {
                isValid = true;
            } else if (charPosition >= 65 && charPosition <= 90) {
                isValid = true;
            } else if (charPosition >= 97 && charPosition <= 122) {
                isValid = true;
            }

            if (isValid === false) {
                break;
            }
        }

        return isValid;
    }

    function lengthCheck(str) {

        let isValid = false

        if (str.length >= 6 && str.length <= 10) {
            isValid = true;
        } 
        return isValid;
    }


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

    return requirements;

}

console.log(passwordValidator('logIn'));
console.log(passwordValidator('MyPass123'));
console.log(passwordValidator('Pa$s$s'));