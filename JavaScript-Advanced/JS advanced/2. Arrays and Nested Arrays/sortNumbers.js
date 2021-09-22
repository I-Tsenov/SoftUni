function sortNumbers(arr) {

    mixedArray = [];
    let sorted = arr.sort((a, b) => b - a);

    while (sorted.length) {
        
        mixedArray.push(sorted.pop());
        mixedArray.push(sorted.shift());

    }

    return mixedArray;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))