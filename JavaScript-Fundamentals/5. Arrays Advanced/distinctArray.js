function distinctArray(array) {

    for (let i = 0; i < array.length; i++) {

        let counter = 1;

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] === array[j]) {
                counter++;
                if (counter > 1) {
                    array.splice(j, 1)
                    i--;
                    break;
                }
            }
        }
    }

    let result = array.join(" ");
    return result;

}

console.log(distinctArray([7, 7, 7, 7, 7, 7, 1, 2]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));



/*

                                    АЛТЕРНАТИВНО РЕШЕНИЕ


function distinctArray(array) {

    for (let i = 0; i < array.length; i++) {

        let index = array.indexOf(array[i], i + 1);

        while (index !== -1) {
            array.splice(index, 1);
            index = array.indexOf(array[i], i + 1);
        }
    }

    return array.join(" ");
}

console.log(distinctArray([7, 1, 2, 7, 7, 7]));
console.log(distinctArray([20, 8, 12, 13, 4, 4, 8, 5]));



                                   АЛТЕРНАТИВНО РЕШЕНИЕ №2



function distinctArray(array) {

    let outputArr = [];

    for (let element of array) {
        if (!outputArr.includes(element)){
            outputArr.push(element);
        }
    }

    return outputArr.join(" ");
}











*/