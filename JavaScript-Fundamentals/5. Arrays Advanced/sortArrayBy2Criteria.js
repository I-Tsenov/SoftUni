function sortBy2Criteria(arr) {

    arr.sort(sortLengthFirst)

    function sortLengthFirst(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }

    return arr.join("\n")
}

console.log(sortBy2Criteria(["Isacc", "Theodor", "Anto", "Aack", "Harrison", "George"]));
