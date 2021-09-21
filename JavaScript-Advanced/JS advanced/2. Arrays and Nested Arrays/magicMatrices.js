function magicMatrices(matrix) {
    const firstRowSum = matrix[0].reduce((a, b) => a + b, 0)
    const rows = matrix.length
    const cols = matrix[0].length

    for (let row = 1; row < rows; row++) {
        let rowSum = 0
        for (let col = 0; col < cols; col++) {
            rowSum += matrix[row][col]
        }
        if (rowSum != firstRowSum) {
            return false
        }
    }

    for (let col = 0; col < cols; col++) {
        let colSum = 0;
        for (let row = 0; row < rows; row++) {
            colSum += matrix[row][col]
        }

        if (colSum != firstRowSum) {
            return false
        }
    }
    return true
}

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));

console.log(magicMatrices([
    [1, 0, 0],
    [0, 1, 0],                       // "ГЪРМИМ И НЕ СТРУВАМЕ"  - Марио Митов 16.09.21
    [0, 1, 0]
]))

console.log(magicMatrices([
    [1, 0, 0], //1
    [0, 0, 1], //1
    [0, 1, 0]] //1
    //   1  1  1 
    //  3 col + 3 row
    //  sum == 6 
    //  sum 6 / 3row + 3 col == 1 == row sum
))



// решение на опонента


// function magicMatrices(matrix) {

//     let fulSum = 0;
//     let rowSum = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         rowSum = 0;
//         for (let j = 0; j < matrix[i].length; j++) {  // обхождаме до дължината на реда
//             fulSum += 2 * matrix[i][j];  // взимаме предвид и колоните
//             rowSum += matrix[i][j];
//         }
//     }

//     if (rowSum !== (fulSum / (matrix.length + matrix[0].length))) {  // isMagic === true
//         return false;
//     }

//     return true;
// }