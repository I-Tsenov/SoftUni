function sorting(arr) {

    let sorted = arr.sort((a, b) => a - b);

    let result = [];

    while (sorted.length > 0) {

        result.push(sorted.pop());

        if (sorted.length === 0) {
            break;
        }

        result.push(sorted.shift());
    }

    console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);