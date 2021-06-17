function equalNeighbors(arr) {

    let counter = 0;

    for (let row = 0; row < arr.length; row++) {

        const currentArr = arr[row];
        const nextArr = arr[row + 1];

        for (let col = 0; col < currentArr.length; col++) {

            if (nextArr !== undefined && currentArr[col] === nextArr[col]) {
                counter++
            }

            if (currentArr[col] === currentArr[col+1]) {
                counter++
            }
        }
        
    }

    return counter;

}

// console.log(equalNeighbors([['2', '4', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']]))
console.log(equalNeighbors([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]]))
// 2 2 5 7 4
// 4 0 5 3 4
// 2 5 5 4 2

// oбхождаме основния масив  ***
// обхождаме подмасива     ***
// сравняваме стойностите на подмасива със следващия подмасив 
// aко няма следващ масив, брейкваме