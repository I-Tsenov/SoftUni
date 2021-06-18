function perfectNumber(num) {

    let sum = 0;
    let result = "It's not so perfect.";

    for (let i = 1; i <= num / 2; i++) {

        if (num % i === 0) {
            sum += i;
        }

        if (sum === num) {
            result = "We have a perfect number!";
            break;
        }
    }

    return result;
}

console.log(perfectNumber(28));