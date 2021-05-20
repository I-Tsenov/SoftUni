function cake(input) {
    
    
    let index = 0;
    let w = Number (input[index]);
    index++
    let l = Number (input[index]);
    index++
    let command = input[index];
    index++;

    let cakeSize = w * l;
    let totalPiecestaken = 0;


    while (command !== "STOP") {
    
        let piecesTaken = Number (command);
        totalPiecestaken += piecesTaken;

        if (totalPiecestaken >= cakeSize) {
            break;
        }

        command = input[index];
        index++
    }
    if (command==="STOP") {
        console.log(`${cakeSize-totalPiecestaken} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${totalPiecestaken-cakeSize} pieces more.`);
    }
}


cake(["10","10","20","20","20","20","21"]);
cake(["10","2","2","4","6","STOP"]);


