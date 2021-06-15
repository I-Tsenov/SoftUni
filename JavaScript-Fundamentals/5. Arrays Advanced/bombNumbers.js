                //                НЕУСПЕШЕН ОПИТ


function bombNumbers(arr1, arr2) {

    sum = 0;
    let bombNumber = arr2[0];
    let powerBomb = arr2[1];

    for (let i = 0; i < arr1.length; i++) {

        const element = arr1[i];
        let startCut = Math.max(0, i - powerBomb);
        let endCut = i + powerBomb;

        if (element === bombNumber) {

            arr1.splice(startCut, endCut)

            i = i - powerBomb - 1;
        }

    }

    for (let element of arr1) {
        sum += element;
    }

    return sum;
}

// console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
// console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
// console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));



/*                              ЧУЖДО РЕШЕНИЕ:

function bombNumbers(sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
 
    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;
 
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}

*/