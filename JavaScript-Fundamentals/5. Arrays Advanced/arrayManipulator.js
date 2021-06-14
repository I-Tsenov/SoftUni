function arrayManipulator(arr, commands) {

    for (let i = 0; i < commands.length; i++) {

        let currentCommand = commands[i].split(" ");
        let order = currentCommand[0];

        switch (order) {

            case "add": 
                let index = Number(currentCommand[1]);
                let element = Number(currentCommand[2]);
                arr.splice(index, 0, element);
                break;

            case "addMany":
                let indexx = Number(currentCommand[1]);
                for (let a = currentCommand.length - 1; a >= 2; a--) {
                    // let numToAdd = Number(currentCommand[a]);        // дава compile time error //
                    arr.splice(indexx, 0, Number(currentCommand[a]));
                } break;

            case "contains":
                let elContained = Number(currentCommand[1]);
                if (arr.includes(elContained)) {
                    console.log(arr.indexOf(elContained));
                } else {
                    console.log(-1)
                } break;

            case "remove":
                let indexxx = currentCommand[1];
                arr.splice(indexxx, 1);
                break;

            case "sumPairs":

                for (let j = 0; j < arr.length;) {

                    let sumPair = 0;
                    let el = Number(arr[j]);
                    let elTwo = Number(arr[j + 1])

                    if (j === arr.length - 1) {
                        sumPair = el;
                        arr.splice(j, 1);
                        arr.unshift(sumPair);
                        arr.reverse();
                        break;
                    }

                    sumPair = el + elTwo;

                    arr.splice(j, 2);
                    arr.unshift(sumPair);

                    j++;

                    if (j === arr.length) {
                        arr.reverse();
                        break;
                    }

                } break;

            case "shift":

                let indexxxx = Number(currentCommand[1]);

                for (let rotation = 0; rotation < indexxxx; rotation++) {

                    let el = arr.shift();
                    arr.push(el);

                } break;

            case "print": return `[ ${arr.join(", ")} ]`;

        }
    }
    
    
    return `[ ${arr.join(", ")} ]`;

}

console.log(arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']));
// console.log(arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']));
