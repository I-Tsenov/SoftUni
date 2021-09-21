function extractIncrSubsequence(arr) {

    let result = arr.reduce(function (result, currentValue) {

        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue);
        }

        return result;

    }, []);

    return result;
}

console.log(extractIncrSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));


/*

function extractIncrSubsequence(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (elem >= result[result.length - 1] || result.length === 0) {
            result.push(elem)
        }
    }

    return result;

}

*/