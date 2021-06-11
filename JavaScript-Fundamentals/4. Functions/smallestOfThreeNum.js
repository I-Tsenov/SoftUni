function smallestOfThreeNum(x, y, z) {

    let smallest = Number.MAX_SAFE_INTEGER;

    smallest = smaller(x, smallest);
    smallest = smaller(y, smallest);
    smallest = smaller(z, smallest);

    function smaller(n, small) {
        if (n < small) {
            small = n;
        }
        return small
    }

    return smallest;
}

console.log(smallestOfThreeNum(2, 5, 3));
console.log(smallestOfThreeNum(600,342,123));