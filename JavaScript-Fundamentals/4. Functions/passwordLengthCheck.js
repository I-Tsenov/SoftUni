function lengthCheck(str) {

    let isValid = false
    if (str.length >= 6 && str.length <= 10) {
        isValid = true;
    }
    return isValid;
}

console.log(lengthCheck("indian"));