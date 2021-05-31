function mergeArrays(arr1, arr2) {

    let modArray = [];

    for (let indexArr1 = 0, indexArr2 = 0; indexArr1 < arr1.length; indexArr1++, indexArr2++) {   
        // можем да ползваме само един индекс за двата масива

        if (indexArr1 % 2 === 0) {
            modArray.push(Number(arr1[indexArr1]) + Number(arr2[indexArr2]));
        } else {
            modArray.push(arr1[indexArr1] + arr2[indexArr2]);
        }

    }

    console.log(modArray.join(" - "));

}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);