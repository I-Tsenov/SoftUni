function searchNumber(arr1, arr2) {

    let elToTake = arr2[0];
    let elToDelete = arr2[1];
    let elMagic = arr2[2];
    let counter = 0;
    let final = [];

    final = arr1.slice(0, elToTake);
    final.splice(0, elToDelete);

    for (let element of final) {

        if (element === elMagic) {
            counter++;
        }
    }

    let result = `Number ${elMagic} occurs ${counter} times.`;
    return result;
}

console.log(searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]));