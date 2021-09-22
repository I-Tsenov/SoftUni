function spiralMatrix(length, width) {

    let matrix = [];

    for (let row = 0; row < length; row++) {    // Създаваме матрица с дадени размери
        matrix.push([])
        for (let col = 0; col < width; col++) {
            matrix[row].push(0)
        }
    }

    let row = 0;
    let col = 0;
    let increment = 1;



    while (matrix[row][col] === 0) {       // шефа на посоката
        while (matrix[row][col] === 0) {   // Логика за движение надясно
            matrix[row][col] = increment;
            increment++;
            if (col >= matrix[row].length - 1 || matrix[row][col + 1] !== 0) {
                break;
            }
            col++;
        }

        row++;

        while (matrix[row][col] === 0) {   // Логика за движение надолу
            matrix[row][col] = increment;
            increment++;
            if (row >= matrix.length - 1 || matrix[row + 1][col] !== 0) {
                break;
            }
            row++;
        }

        col--;

        while (matrix[row][col] === 0) {   // Логика за движение наляво
            matrix[row][col] = increment;
            increment++;
            if (col === 0 || matrix[row][col - 1] !== 0) {
                break;
            }
            col--;
        }

        row--;

        while (matrix[row][col] === 0) {   // Логика за движение нагоре
            matrix[row][col] = increment;
            increment++;
            if (row === 0 || matrix[row - 1][col] !== 0) {
                break;
            }
            row--;
        }
        col++;
    }

    for (let i = 0; i < matrix.length; i++) {
       console.log(matrix[i].join(' '))
    }
}

// 1 2 3
// 8 9 4
// 7 6 5


console.log(spiralMatrix(3, 3))