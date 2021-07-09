function theLift(arr) {

    let notSeated = Number(arr.shift());
    let liftSpace = arr.shift().split(' ').map(Number);

    for (let i = 0; i < liftSpace.length; i++) {
        let currentSpace = liftSpace[i];

        while (currentSpace < 4) {
            currentSpace += 1;
            notSeated -= 1;
            liftSpace[i] = currentSpace;
            if (notSeated === 0 && liftSpace[liftSpace.length-1] === 4) {
                return `${liftSpace.join(' ')}`
            } else if (notSeated === 0) {
                return `The lift has empty spots!\n${liftSpace.join(' ')}`
            } 
        }
    }
        return `There isn't enough space! ${notSeated} people in a queue!\n${liftSpace.join(' ')}`
}

console.log(theLift([
    "20",
    "0 0 0 0 0"
]))


   // break conditions 3  - no more people, no more space, no people and no spaces left