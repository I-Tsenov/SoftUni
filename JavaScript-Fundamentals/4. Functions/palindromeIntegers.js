function palindromeIntegers(array) {

    let isPalindrome = false;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        let currentEl = element.toString();
        let reversedEl = element.toString().split("").reverse().join("");

        currentEl === reversedEl ? isPalindrome = true : isPalindrome = false;

        if (isPalindrome) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

// palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);