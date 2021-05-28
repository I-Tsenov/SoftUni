function addOrSubstract(arr) {

    let originalSum = 0;
    let modSum = 0;
    let modArr = [];

    for (let i = 0; i < arr.length; i++) {

        originalSum += arr[i];

        if (arr[i] % 2 === 0) {
            modArr.push(arr[i] + i);
            modSum += modArr[i];
        } else {
            modArr.push(arr[i] - i);
            modSum += modArr[i];
        }
    }

    console.log(modArr);
    console.log(originalSum);
    console.log(modSum);
}

addOrSubstract([5, 15, 23, 56, 35]);
// addOrSubstract ([-5, 11, 3, 0, 2]);