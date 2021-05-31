function maxNumber(array) {

    let modArray = [];

    for (let i = 0; i < array.length; i++) {

        let isBigger = true;
 
        for (let j = i + 1; j < array.length; j++) {


            if (array[i] <= array[j]) {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            modArray.push(array[i])
        }

    }

    console.log(modArray.join(" "))

}

maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);