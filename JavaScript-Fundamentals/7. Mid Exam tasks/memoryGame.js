function memoryGame(arr) {

    let sequence = arr.shift().split(' ');
    let moveCounter = 0;

    for (let command of arr) {

        if (sequence.length === 0) {
            console.log(`You have won in ${moveCounter} turns!`);
            break;
        } else if (command === "end") {
            console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
            break;
        }

        let [index1, index2] = command.split(' ').map(Number);
        moveCounter++;

        if (sequence[index1] === sequence[index2]) {

            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            sequence = sequence.filter(value => value !== sequence[index1]);
            continue;
        } 
        
        if ((index1 < 0 || index1 > sequence.length - 1) || (index2 < 0 || index2 > sequence.length - 1) || (index1 === index2)) {

            console.log(`Invalid input! Adding additional elements to the board`);
            let elPunish = `-${moveCounter}a`;
            sequence.splice(sequence.length / 2, 0, elPunish, elPunish);
            continue;
        }
        
        console.log('Try again!');
    }
}

console.log(memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]));

/*                                      83/100  проблем в прекъсването на цикъла - шифтването

function memoryGame(arr) {

    let moveCounter = 0;
    let sequence = arr.shift().split(' ');

    while ((line = arr.shift()) !== 'end') {

        if (sequence.length === 0) {
            return `You have won in ${moveCounter} turns!`;
        }

        let [index1, index2] = line.split(' ').map(Number);
        moveCounter++;

        if (sequence[index1] === sequence[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            sequence = sequence.filter(value => value !== sequence[index1]);                     // няма да работи, ако имаме повече еднакви елементи, понеже филтрира и тях
            continue;
        }

        if ((index1 < 0 || index1 > sequence.length - 1) || (index2 < 0 || index2 > sequence.length - 1) || (index1 === index2)) {
            console.log(`Invalid input! Adding additional elements to the board`);
            let elPunish = `-${moveCounter}a`;
            sequence.splice(sequence.length / 2, 0, elPunish, elPunish);
            continue;
        }

        console.log('Try again!');
    }

    return `Sorry you lose :(\n${sequence.join(' ')}`
}

*/