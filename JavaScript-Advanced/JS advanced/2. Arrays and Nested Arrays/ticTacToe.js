function ticTacToe(arr) {

    const firstMark = 'X';
    const secondMark = 'O';

    let turnChecker = true;

    let dashBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]]

    for (let i = 0; i < arr.length; i++) {
        let turn = arr[i].split(' ');
        let row = turn[0];
        let col = turn[1];
        if (turnChecker) {
            if (dashBoard[row][col] !== false) { 
                console.log("This place is already taken. Please choose another!")
                continue;
            }
            dashBoard[row][col] = firstMark;
            turnChecker = false;
        } else {
            if (dashBoard[row][col] !== false) { 
                console.log("This place is already taken. Please choose another!")
                continue;
            }
            dashBoard[row][col] = secondMark;
            turnChecker = true;
        }
        

        let winCondition = ["", "", "", "", "", "", "", ""];
        for (let k = 0; k < dashBoard.length; k++) {
            for (let j = 0; j < dashBoard.length; j++) {
                winCondition[k] += dashBoard[k][j];
                winCondition[k + 3] += dashBoard[j][k];
                if (k === j) {
                    winCondition[6] += dashBoard[k][k];
                }
                if (k === dashBoard.length - j - 1) {
                    winCondition[7] += dashBoard[k][dashBoard.length - k - 1];
                }
            }
        }

        // 0 1 2 k = 0 j = 2
        // 0 1 2 k = 1 j = 1
        // 0 1 2 k = 2 j = 0

        for (const check of winCondition) {
            if (check === 'XXX') {
                return "Player X wins!" + '\n' + printDashBoard(dashBoard);
            } else if (check === 'OOO') {
                return "Player O wins!" + '\n' + printDashBoard(dashBoard);
            }
        }

        let continueGame = false;

        for (let k = 0; k < dashBoard.length; k++) {
            for (let j = 0; j < dashBoard.length; j++) {
                let field = dashBoard[k][j];
                if (field === false) {
                    continueGame = true;
                    break;
                }
            }
        }
        if (!continueGame) {
            return "The game ended! Nobody wins :(" + '\n' + printDashBoard(dashBoard);
        }
    }

    function printDashBoard(dashBoard) {
        let output = "";
        for (let i = 0; i < dashBoard.length; i++) {
            let row = "";
            for (let j = 0; j < dashBoard[i].length; j++) {
                row += dashBoard[i][j];
                row += "\t";
            }
            output += row + "\n";
        }
        return output;
    }
}




// console.log(ticTacToe(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// ))

console.log(ticTacToe(
["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]

))



                // winCondition[0]; row0
                // winCondition[1]; row1
                // winCondition[2]; row2
                // winCondition[3]; col0
                // winCondition[4]; col1
                // winCondition[5]; col2
                // winCondition[6]; diag0
                // winCondition[7]; diag1