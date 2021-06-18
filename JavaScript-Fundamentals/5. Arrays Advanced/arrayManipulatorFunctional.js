function arrayManipulator(arr, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(" ");
        let order = currentCommand[0];

        switch (order) {
            case "add": add(arr, currentCommand); break;
            case "addMany": addMany(arr, currentCommand); break;
            case "contains": contains((arr, currentCommand)); break;
            case "remove": remove(arr, currentCommand); break;
            case "shift": shift(arr, currentCommand); break;
            case "sumPairs": sumPairs(arr, currentCommand); break;
            case "print": return `[ ${arr.join(", ")} ]`;
        }
    }

    function add(arr, currentCommand) {
        let index = Number(currentCommand[1]);
        let element = Number(currentCommand[2]);
        arr.splice(index, 0, element);
    }

    function addMany(arr, currentCommand) {
        let index = Number(currentCommand[1]);
        for (let a = currentCommand.length - 1; a >= 2; a--) {
            arr.splice(index, 0, Number(currentCommand[a]));
        }
    }

    function contains(currentCommand) {
        let elContained = Number(currentCommand[1]);
        if (arr.includes(elContained)) {
            console.log(arr.indexOf(elContained));
        } else {
            console.log(-1);
        }
    }

    function remove(arr, currentCommand) {
        let index = currentCommand[1];
        arr.splice(index, 1);
    }

    function sumPairs(arr) {

        for (let j = 0; j < arr.length; j++) {

            let nextNumbers = arr.splice(j, 2);
            let result = nextNumbers.reduce((a, b) => a + b);
            arr.splice(j, 0, result);

        }
    }

    function shift(arr, currentCommand) {
        let index = Number(currentCommand[1]);

        for (let rotation = 0; rotation < index; rotation++) {

            let el = arr.shift();
            arr.push(el);
        }
    }

    return `[ ${arr.join(", ")} ]`;
}

console.log(arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']));