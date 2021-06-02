function addOrSubtract(x, y, z) {

    let sumResult = sum(x, y);
    let subtractResult = subtract(sumResult, z);

    function sum(a, b) {
        result = a + b;
        return result;
    }

    function subtract(a, b) {
        result = a - b;
        return result;
    }

    return subtractResult;

}

console.log(addOrSubtract(23, 6, 10))
console.log(addOrSubtract(1, 17, 30));