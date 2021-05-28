function commonElements(arr1, arr2) {

    let match = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr1[i]) {

                match.push(arr2[j]);

            }
        }
    }

    console.log(match.join("\n"));

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])




                                                    //  АЛТЕРНАТИВНО РЕШЕНИЕ //

/*
function commonElements(arr1, arr2) {

    for (let el of arr1) {
        let isCommon = arr2.includes(el);
        if (isCommon) {
            console.log(el);
        }
    }
}
*/
