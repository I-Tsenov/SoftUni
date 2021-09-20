function diagonalAttack(input) {
    let sum = 0;
    let sum2 = 0;
    let output = [];
    let matrix = [];

    for (let line of input) {
        line = line.split(" ").map(Number);
        matrix.push(line);
    }

    for (let i = 0; i < matrix.length; i++) {
        let rowLength = matrix[i].length;
        sum += matrix[i][i]                    // сумата на основния диагонал
        sum2 += matrix[i][rowLength - i - 1]  // сумата на втория диагонал
    }

    if (sum === sum2) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && i !== matrix.length - 1 - j) {
                    matrix[i][j] = sum;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {

        output.push(matrix[i].join(' '));
    }

    return output.join('\n')
}

console.log(diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']))

// console.log(diagonalAttack(['1 1 1',
// '1 1 1',
// '1 1 0']))